<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import { Player } from "@/core";
import SoundOffIcon from "@/components/icons/SoundOffIcon.vue";
import SoundIcon from "@/components/icons/SoundIcon.vue";
import { useReactivity } from "@/modules/reactivity";

const player = ref<Player>(inject("player") as Player);
const isMuted = ref(player.value?.$el.muted);
const volume = useReactivity<number>(player, "volume");

const progress = computed(() => `${volume.value * 100}%`);

const onToggleMute = () => {
  if (!player) return;
  player.value.$el.muted = !isMuted.value;
  isMuted.value = !isMuted.value;
};

const onProgressClick = (event: MouseEvent) => {
  const { clientX, target } = event;
  const { left, width } = (target as HTMLElement).getBoundingClientRect();
  player.value.$el.volume = (clientX - left) / width;

  isMuted.value && onToggleMute();
};
</script>

<template>
  <div class="lpr-volume">
    <div class="lpr-volume__button" @click="onToggleMute">
      <Transition>
        <SoundIcon v-if="!isMuted" class="lpr-volume__icon" width="26" height="26" color="#fff" />
        <SoundOffIcon v-else class="lpr-volume__icon" width="28" height="28" color="#fff" />
      </Transition>
    </div>

    <div class="lpr-volume__level-container">
      <div class="lpr-volume__level" @click="onProgressClick" />

      <div class="lpr-volume__level-progress" :style="{ width: progress }">
        <div class="lpr-volume__level-circle"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --volume-color: #787574;
  --volume-progress-color: #00b9ae;

  --volume-width: 80px;
  --volume-height: 4px;
  --volume-border-radius: 8px;
}

.lpr-volume {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  gap: 10px;

  &__button,
  &__level-container {
    display: flex;
    align-items: center;
    pointer-events: all;
    cursor: pointer;
  }

  &__button {
    width: 32px;
    height: 100%;
  }

  &__level-container {
    overflow: hidden;
    transform: translateX(calc(-1 * #{var(--volume-width) / 2}));
    opacity: 0;
    width: 0;
    height: 100%;
    transition: transform 0.2s ease-out, opacity 0.2s ease-in;
  }

  &:hover &__level-container {
    position: relative;
    opacity: 1;
    height: 100%;
    width: var(--volume-width);
    transform: translateX(0);
    transition: transform 0.2s ease-out, opacity 0.2s ease-in;
  }

  &__level {
    & {
      cursor: pointer;
      pointer-events: all;
      background-color: var(--volume-color);
      opacity: 0.7;
    }

    &,
    &-progress {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateY(-50%);

      border: 0 solid transparent;
      border-radius: var(--volume-border-radius);
      height: var(--volume-height);
    }

    &-progress {
      pointer-events: none;
      width: 0;
      background-color: var(--volume-progress-color);

      resize: horizontal;
    }

    &-circle {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--volume-progress-color);
    }
  }

  &__icon {
    position: absolute;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
