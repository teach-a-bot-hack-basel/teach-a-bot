<script lang="ts" setup>
import GameView from "~/components/GameView.vue"
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot"
import {Level} from "~/classes/Level"
import {watchEffect} from "#imports"
import {useRouter} from "#app"
import LayouGameBoy from "~/components/LayouGameBoy.vue";

const router = useRouter()
const level = new Level({obstacles: new Set([]), goal: 100})
const robo = new Robot({level})

let nextToggle = $ref(false)

watchEffect(() => {
  if (robo.color == "green") {
    nextToggle = true
  }
})

</script>
<template>
  <LayouGameBoy>
    <GameView
        bgSrc="/images/hintergrund_desert.png"
        :robo="robo"
        :resolution="3"
    />
    <Controller
        :nextToggle="nextToggle"
        next-url="/chapter/method/1"
        :robo="robo"
        chapter-name="Coloring the Robot"
        current-task="1"
        task-count="1"
    >
      <h2 class="text-5xl font-mono">Task Color</h2>
      <article>
        Try to color our robot :) <br/>
        Try using <br/> <br/>

        Robo.color = "blue" <br/> <br/>

        Can you set color our robot to a green color?
      </article>
    </Controller>
  </LayouGameBoy>
</template>
