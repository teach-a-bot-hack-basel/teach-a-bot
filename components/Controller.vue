<script lang="ts" setup>
import PopUp from "~/components/PopUp.vue";
import {Robot} from "~/classes/Robot";

const p = defineProps<{
  robo: Robot,
  chapterName: String,
  currentTask: String,
  taskCount: String,
  nextToggle: Boolean,
  nextUrl: String
}>()

function callFunction(functionName) {
  window["Robo"][functionName]();
}

let RoboMethods = $ref(Object.getOwnPropertyNames(Object.getPrototypeOf(p.robo)))

</script>
<template>
  <div class="w-full bg-stone-400 flex justify-between ali pt-4 gap-4">
    <div class="grid grid-rows-3 gap-2">
      <h2 class="text-3xl bg-white p-2 font-mono">Level</h2>
      <div class="bg-black text-white p-2">
        {{ currentTask }} / {{ taskCount }}
      </div>
      <router-link v-if="nextToggle" :to="nextUrl">
        <button class="text-3xl font-mono text-red-500">
          Next >
        </button>
      </router-link>
    </div>


    <div class="grid grid-cols-2 flex-grow gap-2">
      <button class="border-4 border-stone-700 rounded-lg text-center font-bold"
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


