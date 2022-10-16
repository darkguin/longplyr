<script lang="ts" setup>
import { inject, provide } from "vue";
import { Player } from "@/core";

const player = inject("player") as Player;
provide("player", player);
</script>

<template>
  <div class="lpr-control-group">
    <slot />
  </div>
</template>

<style lang="scss">
.lpr-control-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
</style>
