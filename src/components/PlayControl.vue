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
      <PlayIcon v-if="paused" class="lpr-play__icon" color="#fff" height="32" width="32" />
      <PauseIcon v-else class="lpr-play__icon" color="#fff" height="32" width="32" />
    </Transition>
  </div>
</template>

<style lang="scss">
:host {
  grid-area: play;
}

.lpr-play {
  cursor: pointer;
  display: inline-block;
  height: 32px;
  margin-right: 16px;
  pointer-events: all;
  position: relative;
  width: 32px;

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
