<script lang="ts" setup>
import { ref } from "vue";

const videoElementRef = ref<HTMLVideoElement>();
</script>

<template>
  <div class="lpr">
    <video class="lpr__video" ref="videoElementRef"></video>

    <div class="lpr__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss"></style>
