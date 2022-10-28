<script lang="ts" setup>
import { inject, ref } from "vue";
import { Player } from "@/core";
import FullscreenIcon from "@/components/icons/FullscreenIcon.vue";
import ExitFullscreenIcon from "@/components/icons/ExitFullscreenIcon.vue";

const player = ref<Player>(inject("player") as Player);

const onBtnClick = () => {
  if (!player) return;
  player.value.isFullscreen ? player.value.fromFullScreen() : player.value.toFullScreen();
};
</script>

<template>
  <div class="lpr-fullscreen" @click="onBtnClick">
    <Transition>
      <FullscreenIcon
        v-if="!player?.isFullscreen"
        class="lpr-fullscreen__icon"
        color="#fff"
        height="26"
        width="26"
      />
      <ExitFullscreenIcon v-else class="lpr-fullscreen__icon" color="#fff" height="26" width="26" />
    </Transition>
  </div>
</template>

<style lang="scss">
:host {
  grid-area: fullscreen;
}

.lpr-fullscreen {
  align-self: flex-end;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  pointer-events: all;
  position: relative;
  width: 32px;

  &__icon {
    position: absolute;
    transition: all 0.25s ease-in;

    &:hover {
      transform: scale(1.2);
      transition: all 0.25s ease-in;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: scale(0);
}

.v-leave-to {
  opacity: 0;
  transform: scale(1);
}
</style>
