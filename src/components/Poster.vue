<script lang="ts" setup>
import { defineProps, inject, onMounted, ref, withDefaults } from "vue";
import { Player } from "@/core";
import { Events } from "@/modules/events-emmiter";
import PlayIcon from "@/components/icons/PlayIcon.vue";

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
  player.$el.play();
};
</script>

<template>
  <transition>
    <div v-if="isVisible" class="lpr-poster__container" @click="onClick">
      <img :src="src" alt="lpr-poster" class="lpr-poster" />

      <PlayIcon class="lpr-poster__icon" color="#fff" height="56" width="56" />
    </div>
  </transition>
</template>

<style lang="scss">
:host {
  --lpr-poster-background: #0a0a0a;
  --lpr-poster-brightness: 60%;
}

.lpr-poster {
  filter: brightness(var(--lpr-poster-brightness));
  height: 100%;
  object-fit: cover;
  width: 100%;

  &__container {
    background: var(--lpr-poster-background);
    cursor: pointer;
    height: 100%;
    left: 0;
    pointer-events: all;
    position: absolute;
    top: 0;
    transition: all ease-in-out 400ms;
    width: 100%;
    z-index: 2;

    &:hover {
      transform: scale(1.05);
      transition: all ease-in-out 400ms;
    }
  }

  &__icon {
    left: 50%;
    opacity: 0.85;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all ease-in-out 400ms;
    z-index: 3;

    &:hover {
      opacity: 1;
      transition: all ease-in-out 400ms;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
