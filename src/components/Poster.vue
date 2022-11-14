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
  player?.$el.play();
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
  width: 100%;
  height: 100%;
  filter: brightness(var(--lpr-poster-brightness));
  object-fit: cover;

  &__container {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all ease-in-out 400ms;
    pointer-events: all;
    background: var(--lpr-poster-background);

    &:hover {
      transition: all ease-in-out 400ms;
      transform: scale(1.05);
    }
  }

  &__icon {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transition: all ease-in-out 400ms;
    transform: translate(-50%, -50%);
    opacity: 0.85;

    &:hover {
      transition: all ease-in-out 400ms;
      opacity: 1;
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
