<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import { Player, useTime } from "@/core";
import SoundOffIcon from "@/components/icons/SoundOffIcon.vue";
import SoundIcon from "@/components/icons/SoundIcon.vue";
import { useReactivity } from "@/modules/reactivity";

const player = ref<Player>(inject("player") as Player);

const { toHMS } = useTime();
const currentTime = useReactivity<number>(player, "currentTime");
const duration = useReactivity<number>(player, "duration");

const isShort = computed(() => duration.value < 3600);

const formattedTime = computed(() => {
  const { h, m, s } = toHMS(currentTime.value);
  return isShort ? `${m}:${s}` : `${h}:${m}:${s}`;
});

const formattedDuration = computed(() => {
  const { h, m, s } = toHMS(duration.value);
  return isShort ? `${m}:${s}` : `${h}:${m}:${s}`;
});
</script>

<template>
  <div class="lpr-time">{{ formattedTime }} / {{ formattedDuration }}</div>
</template>

<style lang="scss">
.lpr-time {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}
</style>
