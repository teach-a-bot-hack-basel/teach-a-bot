<script setup lang="ts">
import {onMounted} from "#imports";
import {Robot} from "~/classes/Robot";
import {Level} from "~/classes/Level";

const Robo = new Robot()
const level = new Level({obstacles: new Set([2,4,8])})

console.log(level)

</script>

<template>
  <main>
    <pre>{{ JSON.stringify(Robo, null, 2)}}</pre>
    <pre>obstacles: {{ [...level.obstacles].join(',')  }}</pre>
    <div class="w-96 h-32 bg-black relative">
      <div class="w-8 h-8 bg-gray-500 absolute" :style="{left: (Robo._x * 32)+'px'}"></div>
    </div>
  </main>
</template>
