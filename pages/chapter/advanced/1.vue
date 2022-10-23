<script lang="ts" setup>
  import GameView from "~/components/GameView.vue"
  import Controller from "~/components/Controller.vue"
  import {Robot} from "~/classes/Robot"
  import {Level} from "~/classes/Level"
  import {watchEffect} from "#imports"
  import {useRouter} from "#app"
  import {fn} from "~/functions/fn"

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
  <div class="flex flex-col aspect-square max-w-2xl mx-auto mt-10">
    <div class="p-10 bg-gray-400">
      <GameView
        :robo="robo"
        :resolution="12"
      />
      <Controller
        :robo="robo"
        chapter-name="Methods"
        current-task="1"
        task-count="4"
      />
    </div>
  </div>
  <button class="fixed top-0 right-0 bg-gray-400" @click="solution">run
    solution
  </button>
</template>
