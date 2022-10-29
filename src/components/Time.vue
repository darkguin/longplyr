<script lang="ts" setup>
import { computed, inject } from "vue";
import { Player } from "@/core";
import { useReactivity } from "@/modules/reactivity";
import { useTime } from "@/utils";

const player = inject("player") as Player;

const { toHMSStrings } = useTime();
const { currentTime, duration } = useReactivity(player);

const isShort = computed(() => duration.value < 3600);

const formattedTime = computed(() => {
  const { h, m, s } = toHMSStrings(currentTime.value);
  return isShort ? `${m}:${s}` : `${h}:${m}:${s}`;
});

const formattedDuration = computed(() => {
  const { h, m, s } = toHMSStrings(duration.value);
  return isShort ? `${m}:${s}` : `${h}:${m}:${s}`;
});
</script>

<template>
  <div class="lpr-time">{{ formattedTime }} / {{ formattedDuration }}</div>
</template>

<style lang="scss">
:host {
  grid-area: time;
}

.lpr-time {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
</style>
