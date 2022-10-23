<script lang="ts" setup>
import {Robot} from "~/classes/Robot"
import RoboComp from "~/components/RoboComp.vue";

const p = defineProps<{
  robo: Robot,
  resolution: number,
}>()


</script>

<template>
  <div class="grid aspect-square border-4 border-gray-600 bg-green-200 rounded-lg"
       :style="{gridTemplateColumns: resolution, gridTemplateRows: resolution}">

    <RoboComp class="aspect-square bg-black"
              :style="{gridRowStart: resolution - robo._y, gridColumnStart: 1 + robo._x}"/>


    <div
        v-for="obst of robo._level.obstacles" class="bg-black"
        :style="{gridColumnStart: 1 + obst, gridRowStart: resolution}"
    />

    <div
        class="bg-yellow-400"
        :style="{gridRowStart: resolution, gridColumnStart: 1 + robo._level.goal}"
    ></div>
  </div>
</template>
