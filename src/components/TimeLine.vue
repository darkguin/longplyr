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

    <div :style="{ width: progress }" class="lpr-timeline__progress"></div>
  </div>
</template>

<style lang="scss">
:host {
  grid-area: timeline;
  --timeline-border-radius: 12px;
  --timeline-color: rgba(255, 255, 255, 80%);
  --timeline-height: 6px;
  --timeline-progress-color: #00b9ae;
}

.lpr-timeline {
  &__container {
    position: relative;
    display: block;
    height: var(--timeline-height);
  }

  &,
  &__progress {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: var(--timeline-height);
    border: 0 solid transparent;
    border-radius: var(--timeline-border-radius);
  }

  & {
    cursor: pointer;
    pointer-events: all;
    opacity: 0.7;
    background-color: var(--timeline-color);
  }

  &__progress {
    overflow: visible;
    width: 0;
    resize: horizontal;
    pointer-events: none;
    background-color: var(--timeline-progress-color);
  }
}
</style>
