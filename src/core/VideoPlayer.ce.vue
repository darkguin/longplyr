<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, provide, ref, withDefaults } from "vue";
import { Player } from "@/core";
import { Events } from "@/core/values";

const props = withDefaults(defineProps<{ src: string }>(), { src: "" });
const emits = defineEmits([Events.Created]);

const mediaRef = ref<HTMLVideoElement>();
const containerRef = ref<HTMLDivElement>();
const player = ref<Player>();

onMounted(() => {
  if (!mediaRef.value || !containerRef.value) return;

  console.log();
  player.value = new Player(mediaRef.value, containerRef.value);
  provide("player", player.value);
  emits(Events.Created, player.value);
});

const onPlayerClick = () => {
  if (!player.value) return;
  player.value.togglePlay();
};
</script>

<template>
  <div class="lpr">
    <video
      :id="player && player.id"
      :src="src"
      class="lpr__video"
      ref="mediaRef"
      @click="onPlayerClick"
    ></video>

    <div class="lpr__container" ref="containerRef">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --lpr-player-border-radius: 16px;
}

.lpr {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0 solid transparent;
  border-radius: var(--lpr-player-border-radius);

  &__video {
    width: 100%;
    height: 100%;
  }

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}
</style>
