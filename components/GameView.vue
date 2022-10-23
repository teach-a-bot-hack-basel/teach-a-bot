<script lang="ts" setup>
  import {Robot} from "~/classes/Robot"

  const p = defineProps<{
    robo: Robot,
    resolution: number,
  }>()

</script>

<template>
  <div
    class="grid aspect-square bg-green-50"
    :style="{gridTemplateColumns: '1fr '.repeat(resolution), gridTemplateRows: '1fr '.repeat(resolution)}"
  >
    <div
      class="bg-gray-500"
      :style="{gridRowStart: resolution - robo._y, gridColumnStart: 1 + robo._x}"
    ></div>

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
