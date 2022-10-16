<script lang="ts" setup>
import { inject, onBeforeUnmount, onMounted, ref } from "vue";
import { Player } from "@/core";
import PlayIcon from "@/components/icons/PlayIcon.vue";
import PauseIcon from "@/components/icons/PauseIcon.vue";
import { Events } from "@/core/values";

const player = inject("player") as Player;
const isPlaying = ref(false);

onMounted(() => {
  player.on(Events.Playing, onPlaying);
  player.on(Events.Pause, onPause);
});

onBeforeUnmount(() => {
  player.off(Events.Playing, onPlaying);
  player.off(Events.Pause, onPause);
});

const onPlaying = () => {
  isPlaying.value = true;
};

const onPause = () => {
  isPlaying.value = false;
};

const onBtnClick = () => {
  if (!player) return;
  player.togglePlay();
};
</script>

<template>
  <div class="lpr-play" @click="onBtnClick">
    <Transition>
      <PlayIcon v-if="!isPlaying" class="lpr-play__icon" width="32" height="32" color="#fff" />
      <PauseIcon v-else class="lpr-play__icon" width="32" height="32" color="#fff" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.lpr-play {
  position: relative;
  width: 32px;
  height: 32px;
  pointer-events: all;
  cursor: pointer;
  display: inline-block;
  margin-right: 16px;

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
