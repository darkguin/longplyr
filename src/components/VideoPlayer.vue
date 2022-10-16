<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, provide, ref, withDefaults } from "vue";
import { Player } from "@/core";
import { Events } from "@/core/values";

const props = withDefaults(defineProps<{ src: string }>(), { src: "" });
const emits = defineEmits([Events.Created]);

const player = ref<Player>();
const mediaRef = ref<HTMLVideoElement>();
const containerRef = ref<HTMLDivElement>();

onMounted(() => {
  if (!mediaRef.value || !containerRef.value) return;

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
  <div class="lpr" ref="containerRef" :class="{ 'lpr--fullscreen': player?.isFullscreen }">
    <video
      :id="player && player.id"
      :src="src"
      v-bind="$attrs"
      class="lpr__video"
      ref="mediaRef"
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0 solid transparent;
  border-radius: var(--lpr-player-border-radius);

  &.lpr--fullscreen {
    border-radius: 0;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
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
