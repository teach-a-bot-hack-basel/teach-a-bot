<script setup lang="ts">
  import {onMounted} from "#imports";
  import {Robot} from "~/classes/Robot";
  import {Level} from "~/classes/Level";
  import RoboComp from "~/components/RoboComp.vue"

  const level = new Level({obstacles: new Set([3, 6, 10]), goal: 2})
  const Robo = new Robot({level})
</script>

<template>
  <main>
    <pre>{{ JSON.stringify(Robo, null, 2)}}</pre>
    <pre>obstacles: {{ [...level.obstacles].join(',')  }}</pre>
    <div class="w-96 h-32 bg-black relative">
      <div class="w-8 h-8 bg-gray-500 absolute" :style="{left: (Robo._x * 32)+'px'}"></div>
      <div class="w-4 h-4 bg-red-500 absolute" v-for="obstacle in level.obstacles" :style="{left: (obstacle * 32) +'px'}"></div>
    </div>
      <RoboComp/>
    <div>
    </div>
  </main>
</template>
