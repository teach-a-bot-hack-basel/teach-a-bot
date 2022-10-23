<script lang="ts" setup>
import PopUp from "~/components/PopUp.vue";
import {Robot} from "~/classes/Robot";

const p = defineProps<{
  robo: Robot,
  chapterName: String,
  currentTask: String,
  taskCount: String
}>()

function callFunction(functionName) {
  window["Robo"][functionName]();
}

let RoboMethods = $ref(Object.getOwnPropertyNames(Object.getPrototypeOf(p.robo)))

</script>
<template>
  <div class="w-full bg-stone-400 flex justify-between ali pt-4">
    <div>
      <h2 class="text-3xl bg-white p-2 font-mono">Level</h2>
      <div class="bg-black text-white p-2 ">
        {{ currentTask }} / {{ taskCount }}
      </div>
    </div>

    <div class="grid grid-cols-2 flex-grow p-4 gap-2">
      <button
          v-for="methode of RoboMethods"
          @click="callFunction(methode)"
      >{{ methode }}
      </button>
    </div>
    <PopUp>
     <slot/>
    </PopUp>
  </div>
</template>
