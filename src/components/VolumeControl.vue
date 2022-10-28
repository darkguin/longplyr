<script lang="ts" setup>
import { computed, inject } from "vue";
import { Player } from "@/core";
import { useReactivity } from "@/modules/reactivity";

import SoundOffIcon from "@/components/icons/SoundOffIcon.vue";
import SoundIcon from "@/components/icons/SoundIcon.vue";

const player = inject("player") as Player;
const { volume, muted } = useReactivity(player);

const progress = computed(() => `${volume.value * 100}%`);

const onToggleMute = () => {
  if (!player) return;
  muted.value = !muted.value;
};

const onProgressClick = (event: MouseEvent) => {
  const { clientX, target } = event;
  const { left, width } = (target as HTMLElement).getBoundingClientRect();
  volume.value = (clientX - left) / width;
  muted.value && onToggleMute();
};
</script>

<template>
  <div class="lpr-volume">
    <div class="lpr-volume__button" @click="onToggleMute">
      <Transition>
        <SoundIcon v-if="!muted" class="lpr-volume__icon" color="#fff" height="26" width="26" />
        <SoundOffIcon v-else class="lpr-volume__icon" color="#fff" height="28" width="28" />
      </Transition>
    </div>

    <div class="lpr-volume__level-container" @click="onProgressClick">
      <div class="lpr-volume__level" />

      <div :style="{ width: progress }" class="lpr-volume__level-progress">
        <div class="lpr-volume__level-circle"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --volume-border-radius: 8px;
  --volume-color: #787574;

  grid-area: volume;
  --volume-height: 4px;
  --volume-progress-color: #00b9ae;

  --volume-width: 80px;
}

.lpr-volume {
  align-items: center;
  display: flex;
  height: 32px;
  position: relative;
  width: fit-content;

  &__button,
  &__level-container {
    align-items: center;
    cursor: pointer;
    display: flex;
    pointer-events: all;
  }

  &__button {
    height: 100%;
    width: 32px;
  }

  &__level-container {
    height: 100%;
    opacity: 0;
    overflow: hidden;
    transform: translateX(calc(-1 * #{var(--volume-width) / 2}));
    transition: transform 0.2s ease-out, opacity 0.2s ease-in;
    width: 0;
  }

  &:hover &__level-container,
  &__level-container:hover {
    height: 100%;
    opacity: 1;
    position: relative;
    transform: translateX(0);
    transition: transform 0.2s ease-out, opacity 0.2s ease-in;
    width: var(--volume-width);
  }

  &__level {
    & {
      background-color: var(--volume-color);
      cursor: pointer;
      opacity: 0.7;
      pointer-events: all;
    }

    &,
    &-progress {
      border: 0 solid transparent;
      border-radius: var(--volume-border-radius);
      bottom: 0;
      height: var(--volume-height);
      left: 0;
      position: absolute;

      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &-progress {
      background-color: var(--volume-progress-color);
      pointer-events: none;
      resize: horizontal;

      width: 0;
    }

    &-circle {
      background-color: var(--volume-progress-color);
      border-radius: 50%;
      height: 10px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
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
