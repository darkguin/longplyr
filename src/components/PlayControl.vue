<script lang="ts" setup>
import { inject } from "vue";
import { Player } from "@/core";
import { useReactivity } from "@/modules/reactivity";

import PlayIcon from "@/components/icons/PlayIcon.vue";
import PauseIcon from "@/components/icons/PauseIcon.vue";

const player = inject("player") as Player;
const { paused, ended } = useReactivity(player);

const onBtnClick = () => {
  if (!player) return;
  paused.value || ended.value ? player.$el.play() : player.$el.pause();
};
</script>

<template>
  <div class="lpr-play" @click="onBtnClick">
    <Transition>
      <PlayIcon v-if="paused" class="lpr-play__icon" color="#fff" height="22" width="22" />
      <PauseIcon v-else class="lpr-play__icon" color="#fff" height="22" width="22" />
    </Transition>
  </div>
</template>

<style lang="scss">
:host {
  grid-area: play;
}

.lpr-play {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
  cursor: pointer;
  pointer-events: all;

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
