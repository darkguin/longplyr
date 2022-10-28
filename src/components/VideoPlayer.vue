<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, provide, ref, withDefaults } from "vue";
import { Player } from "@/core";
import { Events } from "@/modules/events-emmiter";

const props = withDefaults(defineProps<{ src: string }>(), { src: "" });
const emits = defineEmits([Events.Created]);

const player = ref<Player>();
const mediaRef = ref<HTMLVideoElement>();
const containerRef = ref<HTMLDivElement>();

onMounted(() => {
  if (!mediaRef.value || !containerRef.value) return;

  const playerInstance = new Player(mediaRef.value, containerRef.value);
  player.value = playerInstance;
  provide("player", playerInstance);
  emits(Events.Created, playerInstance);
});

const onPlayerClick = () => {
  if (!player.value) return;
  player.value.togglePlay();
};
</script>

<template>
  <div ref="containerRef" :class="{ 'lpr--fullscreen': player?.isFullscreen }" class="lpr">
    <video
      :id="player && player.id"
      ref="mediaRef"
      :src="src"
      class="lpr__video"
      v-bind="$attrs"
      @click="onPlayerClick"
    ></video>

    <div class="lpr__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
:host {
  --lpr-player-border-radius: 16px;
}

.lpr {
  border: 0 solid transparent;
  border-radius: var(--lpr-player-border-radius);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  &.lpr--fullscreen {
    border-radius: 0;
  }

  &__video {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &__container {
    align-items: center;
    box-sizing: border-box;
    display: grid;
    gap: 12px;
    grid-template-areas: ". . . . ." "timeline timeline timeline timeline timeline" "play volume time . fullscreen";
    grid-template-columns: auto auto auto 1fr auto;

    grid-template-rows: 1fr auto auto;
    height: 100%;
    left: 0;
    padding: 14px 20px;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  video::-webkit-media-controls-overlay-enclosure {
    display: none !important;
  }

  video::-webkit-media-controls-enclosure {
    display: none !important;
  }

  video::-webkit-media-controls {
    display: none !important;
  }
}
</style>
