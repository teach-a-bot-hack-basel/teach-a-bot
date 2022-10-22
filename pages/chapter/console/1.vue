<script lang="ts" setup>
import GameView from "~/components/GameView.vue";
import Controller from "~/components/Controller.vue"
</script>
<template>
  <div class="flex flex-col aspect-square">
    <GameView class="flex-grow"/>
    <Controller class="fixed bottom-0"/>
  </div>
</template>
