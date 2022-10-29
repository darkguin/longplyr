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
        height="22px"
        width="22px"
      />
      <ExitFullscreenIcon
        v-else
        class="lpr-fullscreen__icon"
        color="#fff"
        height="22px"
        width="22px"
      />
    </Transition>
  </div>
</template>

<style lang="scss">
:host {
  grid-area: fullscreen;
}

.lpr-fullscreen {
  position: relative;
  display: inline-block;
  align-self: flex-end;
  width: 22px;
  height: 22px;
  cursor: pointer;
  pointer-events: all;

  &__icon {
    position: absolute;
    transition: all 0.25s ease-in;

    &:hover {
      transition: all 0.25s ease-in;
      transform: scale(1.2);
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter-from {
  transform: scale(0);
  opacity: 0;
}

.v-leave-to {
  transform: scale(1);
  opacity: 0;
}
</style>
