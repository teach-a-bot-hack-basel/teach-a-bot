<script lang="ts" setup>
  import GameView from "~/components/GameView.vue"
  import Controller from "~/components/Controller.vue"
  import {Robot} from "~/classes/Robot"
  import {Level} from "~/classes/Level"
  import {watchEffect} from "#imports"
  import {useRouter} from "#app"
  import {fn} from "~/functions/fn"
  import LayouGameBoy from "~/components/LayouGameBoy.vue";

  const router = useRouter()
  const level = new Level({obstacles: new Set([4, 8]), goal: 11})
  const robo = new Robot({level})

  watchEffect(() => {
    if (robo.hasReachedGoal()) {
      alert("goal reached!")
    }
  })

  async function solution() {
    while (!robo.hasReachedGoal()) {
      if (robo.isBlocked()) robo.climb()
      else robo.move()
      await fn.sleep(500)
    }
  }

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
        next-url="/chapter/advanced/1"
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
      <button class="bg-black text-white p-2 font-mono" @click="solution">Run
        solution ->
      </button>
    </Controller>
  </LayouGameBoy>

</template>
