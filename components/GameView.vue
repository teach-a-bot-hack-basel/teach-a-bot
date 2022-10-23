<script lang="ts" setup>
import {Robot} from "~/classes/Robot"

const p = defineProps<{
  robo: Robot,
  resolution: {
    type: Number,
    default: 12,
  },
}>()

console.log('Robo: ', p.robo);

</script>

<template>
  <div class="grid aspect-square bg-green-50"
       :style="{gridTemplateColumns: resolution, gridTemplateRows: resolution}">
    <div
        class="bg-gray-500"
        :style="{gridRowStart: resolution - robo._y, gridColumnStart: 1 + robo._x}"
    ></div>

    <div v-for="obst of robo._level.obstacles" class="bg-black"
         :style="{gridColumnStart: 1 + obst, gridRowStart: resolution}"/>
  </div>
</template>
