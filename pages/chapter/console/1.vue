<script lang="ts" setup>
import GameView from "~/components/GameView.vue"
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot"
import {Level} from "~/classes/Level"
import {watchEffect} from "#imports"
import {useRouter} from "#app"
import LayouGameBoy from "~/components/LayouGameBoy.vue";

const router = useRouter()
const level = new Level({obstacles: new Set([10]), goal: 10})
const robo = new Robot({level})

let nextToggle = $ref(false)

watchEffect(() => {
  if (robo._x >= level.goal) {
    nextToggle = true
  }
})

</script>
<template>
  <LayouGameBoy>
    <GameView
        bgSrc="/"
        :robo="robo"
        :resolution="4"
    />
    <Controller
        :nextToggle="nextToggle"
        next-url="/chapter/console/2"
        :robo="robo"
        chapter-name="Methods"
        current-task="1"
        task-count="4"
    >
      <h2 class="text-5xl font-mono">1. Console</h2>
      <article>


        1.1 Use the console.log code in the editor to log the Name of your Robo to the console. Run your code (ENTER) when you are ready to see the result.

        Example (string):
        robo.log('teach-a-bot')

        1.2 On the next line, write another console.log to print out the age of your Robo. Run your code (ENTER) when you are ready to see the result.


        Example (number):
        robo.log(2500)


        1.3 Try another Age and another Name. Run your code (ENTER) when you are ready to see the result.


        Example:
        robo.log('teach-a-bot')
        robo.log(2500)
      </article>
    </Controller>
  </LayouGameBoy>
</template>
