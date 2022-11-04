<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, onUnmounted, provide, ref, withDefaults } from "vue";
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

onUnmounted(() => {
  player.value?.dispose();
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
  --lpr-player-padding: min(3.33%, 32px);
}

* {
  font-size: 0;
  box-sizing: border-box;
}

.lpr {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
  border-radius: var(--lpr-player-border-radius);

  &.lpr--fullscreen {
    border-radius: 0;
  }

  &__video {
    font-size: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    object-fit: cover;
  }

  &__container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;

    align-items: center;
    box-sizing: border-box;

    padding: var(--lpr-player-padding);
    pointer-events: none;
    gap: 14px;
    grid-template-areas: ". . . . ." "play volume time . fullscreen" "timeline timeline timeline timeline timeline";
    grid-template-columns: auto auto auto 1fr auto;
    grid-template-rows: 1fr auto auto;
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
