<script setup lang="ts">
import {onMounted} from "#imports";
import {Robot} from "~/classes/Robot";

const Robo = new Robot()

</script>

<template>
  <main>
    <pre>{{ JSON.stringify(Robo, null, 2)}}</pre>
    <div class="w-96 h-32 bg-black relative">
      <div class="w-8 h-8 bg-gray-500 absolute" :style="{left: (Robo._x * 32)+'px'}"></div>
    </div>
  </main>
</template>
