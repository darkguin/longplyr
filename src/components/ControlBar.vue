<script lang="ts" setup>
import { inject, provide } from "vue";
import { Player } from "@/core";

const player = inject("player") as Player;
provide("player", player);
</script>

<template>
  <div class="lpr-control-bar">
    <slot />
  </div>
</template>

<style lang="scss">
:host {
  --control-bar-padding-left: 20px;
  --control-bar-padding-right: 20px;
  --control-bar-padding-bottom: 12px;
}

.lpr-control-bar {
  position: absolute;
  left: var(--control-bar-padding-left);
  right: var(--control-bar-padding-right);
  bottom: var(--control-bar-padding-bottom);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - var(--control-bar-padding-right) - var(--control-bar-padding-left));
  gap: 12px;
  pointer-events: all;
}
</style>
