<script lang="ts" setup>
import {Robot} from "~/classes/Robot"
import RoboComp from "~/components/RoboComp.vue";

const p = defineProps<{
  robo: Robot,
  resolution: number,
  bgSrc?: String,
}>()


</script>

<template>
  <div class="
  grid border-4 border-stone-700
  rounded-lg grid-rows-[200px_minmax(900px,_1fr)_100px]
  bg-cover bg-no-repeat"
       :style="{
     gridTemplateColumns: '1fr '.repeat(resolution),
     gridTemplateRows: '1fr '.repeat(resolution),
     backgroundImage: `url('${bgSrc}')` }">

    <RoboComp class="aspect-square"
              :style="{gridRowStart: resolution - robo._y, gridColumnStart: 1 + robo._x}"/>

    <div
        v-for="obst of robo._level.obstacles" class="bg-black aspect-square"
        :style="{gridColumnStart: 1 + obst, gridRowStart: resolution}"
    />

    <div
        class="bg-yellow-400 aspect-square"
        :style="{gridRowStart: resolution, gridColumnStart: 1 + robo._level.goal}"
    ></div>
  </div>
</template>
