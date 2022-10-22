<script lang="ts" setup>
import {Robot} from "~/classes/Robot"

defineProps<{
  robo: Robot,
}>()

</script>

<template>
  <div class="grid aspect-square bg-green-50" style="
  grid-template-columns: repeat(24, minmax(0, 1fr));
  grid-template-rows: repeat(24, minmax(0, 1fr));">
    <div v-for="obst of robo._level.obstacles" class="bg-black"
         :style="{gridColumnStart: obst, gridRowStart: 24}"/>
  </div>
</template>
