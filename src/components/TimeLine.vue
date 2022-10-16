<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import { Player } from "@/core";
import { useReactivity } from "@/modules/reactivity";
import { useResizeObserver } from "@vueuse/core";

const player = ref<Player>(inject("player") as Player);

const currentTime = useReactivity<number>(player, "currentTime");
const duration = useReactivity<number>(player, "duration");

const progress = computed(() => `${(currentTime.value / duration.value) * 100}%`);

const onTimelineClick = (event: MouseEvent) => {
  const { clientX, target } = event;
  const { left, width } = (target as HTMLElement).getBoundingClientRect();
  player.value.$el.currentTime = duration.value * ((clientX - left) / width);
};
</script>

<template>
  <div class="lpr-timeline__container">
    <div class="lpr-timeline" @click="onTimelineClick" />

    <div class="lpr-timeline__progress" :style="{ width: progress }">
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

  --timeline-padding-left: 20px;
  --timeline-padding-right: 20px;
  --timeline-padding-bottom: 60px;
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
    overflow: visible;
    resize: horizontal;
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
