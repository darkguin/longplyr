<script lang="ts" setup>
import { inject, onMounted, onUnmounted, ref } from "vue";
import { Player } from "@/core";
import { Events } from "@/core/values";

const player = inject("player") as Player;
const progressRef = ref<HTMLDivElement>();

onMounted(() => {
  if (!progressRef.value) return;
  player.on(Events.TimeUpdate, onPlayerTimeUpdate);
});

onUnmounted(() => {
  player.off(Events.TimeUpdate, onPlayerTimeUpdate);
});

const onPlayerTimeUpdate = () => {
  if (!progressRef.value || !player) return;

  const { currentTime, duration } = player;
  const progress = (currentTime / duration) * 100;
  progressRef.value.style.width = `${progress}%`;
};

const onTimelineClick = (event: MouseEvent) => {
  if (!player) return;

  const { clientX, target } = event;
  const { left, width } = (target as HTMLElement).getBoundingClientRect();
  player.currentTime = player.duration * ((clientX - left) / width);
};
</script>

<template>
  <div class="lpr-timeline__container">
    <div class="lpr-timeline" @click="onTimelineClick" />
    <div ref="progressRef" class="lpr-timeline__progress">
      <div class="lpr-timeline__circle"></div>
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --timeline-color: #787574;
  --timeline-progress-color: #00b9ae;

  --timeline-height: 4px;
  --timeline-border-radius: 8px;

  --timeline-padding-left: 32px;
  --timeline-padding-right: 32px;
  --timeline-padding-bottom: max(12%, 36px);
}

.lpr-timeline {
  &__container {
    position: absolute;
    left: var(--timeline-padding-left);
    right: var(--timeline-padding-right);
    bottom: var(--timeline-padding-bottom);
    height: var(--timeline-height);
  }

  &,
  &__progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--timeline-height);
    border: 0 solid transparent;
    border-radius: var(--timeline-border-radius);
  }

  & {
    cursor: pointer;
    pointer-events: all;
    background-color: var(--timeline-color);
    opacity: 0.7;
  }

  &__progress {
    pointer-events: none;
    width: 0;
    background-color: var(--timeline-progress-color);
  }

  &__circle {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--timeline-progress-color);
  }
}
</style>
