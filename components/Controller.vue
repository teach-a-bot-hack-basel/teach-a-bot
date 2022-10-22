<script lang="ts" setup>
import PopUp from "~/components/PopUp.vue";
import {Robot} from "~/classes/Robot";

const p = defineProps<{
  robo: Robot,
}>()

function callFunction(functionName) {
  window["Robo"][functionName]();
}

let RoboMethods = $ref(Object.getOwnPropertyNames(Object.getPrototypeOf(p.robo)))

</script>
<template>
  <div class="w-full bg-gray-200 h-20 flex justify-between p-6">
    <div class="flex gap-2">
      <button
          class="p-4 border-2 border-gray-500 rounded-xl flex place-items-center"
          v-for="methode of RoboMethods"
          @click="callFunction(methode)"
      >{{ methode }}
      </button>
    </div>
    <PopUp>
      <h2 class="text-5xl">Aufgabe 1</h2>
      <article>
        The console is a panel that displays important messages, like errors, for developers. Much of the work the
        computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can
        print, or log, to our console directly.
        Definition by: https://www.codecademy.com/

        robo.log('teach-a-bot')

        robo.log(2500)

        1.1 Use the console.log code in the editor to log the Name of your Robo to the console (String).
        1.2 On the next line, write another console.log to print out the age of your Robo (Number).
        1.3 Try another Age and another Name.

        Run your code when you are ready to see the result.
      </article>
    </PopUp>
  </div>
</template>
