<script lang="ts" setup>
import {Robot} from "~/classes/Robot"

const p = defineProps<{
  robo: Robot,
}>()

console.log('Robo: ', p.robo);

</script>

<template>
  <div class="grid aspect-square bg-green-50" style="
  grid-template-columns: repeat(24, minmax(0, 1fr));
  grid-template-rows: repeat(24, minmax(0, 1fr));">
    <div
        class="bg-gray-500"
        :style="{gridRowStart: 24 - robo._y, gridColumnStart: 1 + robo._x}"
    ></div>

    <div v-for="obst of robo._level.obstacles" class="bg-black"
         :style="{gridColumnStart: 1 + obst, gridRowStart: 24}"/>
  </div>
</template>
