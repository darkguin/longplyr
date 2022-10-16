<script lang="ts" setup>
import { defineProps, inject, onMounted, ref, withDefaults } from "vue";
import { Player } from "@/core";
import { Events } from "@/core/values";
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
      <img :src="src" class="lpr-poster" alt="lpr-poster" />

      <PlayIcon width="56" height="56" color="#fff" class="lpr-poster__icon" />
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
  object-fit: cover;
  filter: brightness(var(--lpr-poster-brightness));

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--lpr-poster-background);
    z-index: 2;
    cursor: pointer;
    pointer-events: all;
    transition: all ease-in-out 400ms;

    &:hover {
      transform: scale(1.05);
      transition: all ease-in-out 400ms;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    opacity: 0.85;
    transition: all ease-in-out 400ms;

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
