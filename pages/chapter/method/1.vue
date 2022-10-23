<script lang="ts" setup>
import GameView from "~/components/GameView.vue"
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot"
import {Level} from "~/classes/Level"
import {watchEffect} from "#imports"
import {useRouter} from "#app"
import LayouGameBoy from "~/components/LayouGameBoy.vue";

const router = useRouter()
const level = new Level({obstacles: new Set([]), goal: 11})
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
        bgSrc="/images/hintergrund_desert.png"
        :robo="robo"
        :resolution="12"
    />
    <Controller
        :nextToggle="nextToggle"
        next-url="/chapter/method/2"
        :robo="robo"
        chapter-name="Methods"
        current-task="1"
        task-count="4"
    >
      <h2 class="text-5xl font-mono">3. Methods</h2>
      <article>
        4.1 Try to go with your Robo and the following Methods through the Parkours. Run your code when you are ready to see the result.

        robo.move()

        robo.climb()

        4.2 Advanced: We give you some examples, but here you can express yourself.
      </article>
    </Controller>
  </LayouGameBoy>
</template>
