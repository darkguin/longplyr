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
        <SoundIcon v-if="!muted" class="lpr-volume__icon" color="#fff" height="22" width="22" />
        <SoundOffIcon v-else class="lpr-volume__icon" color="#fff" height="22" width="22" />
      </Transition>
    </div>

    <div class="lpr-volume__level-container" @click="onProgressClick">
      <div class="lpr-volume__level" />
      <div :style="{ width: progress }" class="lpr-volume__level-progress" />
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --volume-border-radius: 12px;
  --volume-color: rgba(255, 255, 255, 80%);

  grid-area: volume;
  --volume-height: 6px;
  --volume-progress-color: #00b9ae;

  --volume-width: 80px;
}

.lpr-volume {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 22px;

  &__button,
  &__level-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    pointer-events: all;
  }

  &__button {
    width: 22px;
    height: 100%;
  }

  &__level-container {
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: all 1s ease-out;
    transform: scale(0);
    opacity: 0;
  }

  &:hover &__level-container,
  &__level-container:hover {
    position: relative;
    width: var(--volume-width);
    height: 100%;
    transition: all 300ms ease-out;
    transform: scale(1);
    opacity: 1;
  }

  &__level {
    & {
      cursor: pointer;
      pointer-events: all;
      opacity: 0.7;
      background-color: var(--volume-color);
    }

    &,
    &-progress {
      position: absolute;
      top: 50%;
      right: 0;
      bottom: 0;
      left: 0;
      height: var(--volume-height);
      margin-left: 7px;
      transform: translateY(-50%);
      border: 0 solid transparent;
      border-radius: var(--volume-border-radius);
    }

    &-progress {
      width: 0;
      resize: horizontal;
      pointer-events: none;
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
  transform: translateY(-30px);
  opacity: 0;
}

.v-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
