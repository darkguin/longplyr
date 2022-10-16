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
        width="26"
        height="26"
        color="#fff"
      />
      <ExitFullscreenIcon v-else class="lpr-fullscreen__icon" width="26" height="26" color="#fff" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.lpr-fullscreen {
  position: relative;
  width: 32px;
  height: 32px;
  pointer-events: all;
  cursor: pointer;
  display: inline-block;
  align-self: flex-end;

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
