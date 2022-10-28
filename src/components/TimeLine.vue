<script lang="ts" setup>
import { computed, inject } from "vue";
import { Player } from "@/core";
import { useReactivity } from "@/modules/reactivity";

const player = inject("player") as Player;
const { currentTime, duration } = useReactivity(player);

const progress = computed(() => `${(currentTime.value / duration.value) * 100}%`);

const onTimelineClick = (event: MouseEvent) => {
  const { clientX, target } = event;
  const { left, width } = (target as HTMLElement).getBoundingClientRect();
  currentTime.value = duration.value * ((clientX - left) / width);
};
</script>

<template>
  <div class="lpr-timeline__container">
    <div class="lpr-timeline" @click="onTimelineClick" />

    <div :style="{ width: progress }" class="lpr-timeline__progress">
      <div class="lpr-timeline__circle"></div>
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --timeline-border-radius: 8px;
  --timeline-color: #787574;

  grid-area: timeline;
  --timeline-height: 4px;

  --timeline-progress-color: #00b9ae;
}

.lpr-timeline {
  &__container {
    height: var(--timeline-height);
    position: relative;
  }

  &,
  &__progress {
    border: 0 solid transparent;
    border-radius: var(--timeline-border-radius);
    bottom: 0;
    height: var(--timeline-height);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  & {
    background-color: var(--timeline-color);
    cursor: pointer;
    opacity: 0.7;
    pointer-events: all;
  }

  &__progress {
    background-color: var(--timeline-progress-color);
    overflow: visible;
    pointer-events: none;
    resize: horizontal;
    width: 0;
  }

  &__circle {
    background-color: var(--timeline-progress-color);
    border-radius: 50%;
    height: 10px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
  }
}
</style>
