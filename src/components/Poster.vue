<script lang="ts" setup>
import { defineProps, inject, onMounted, ref, withDefaults } from "vue";
import { Player } from "@/core";
import { Events } from "@/core/values";

withDefaults(defineProps<{ src: string }>(), { src: "" });

const player = inject("player") as Player;
const isVisible = ref(true);

onMounted(() => {
  player.once(Events.Playing, () => onChangeVisibility(false));
});

const onChangeVisibility = (value = !isVisible.value) => {
  isVisible.value = value;
};

const onClick = () => {
  if (!player) return;
  player.play();
};
</script>

<template>
  <div v-show="isVisible" class="lpr-poster__container" @click="onClick">
    <img :src="src" class="lpr-poster" />
  </div>
</template>

<style lang="scss">
:host {
  --lpr-poster-background: #0a0a0a;
  --lpr-poster-brightness: 60%;
}

.lpr-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--lpr-poster-background);
    filter: brightness(var(--lpr-poster-brightness));
    z-index: 2;
    cursor: pointer;
    pointer-events: all;
  }
}
</style>
