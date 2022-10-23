<script lang="ts" setup>
import GameView from "~/components/GameView.vue"
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot"
import {Level} from "~/classes/Level"
import {watchEffect} from "#imports"
import {useRouter} from "#app"

const router = useRouter()
const level = new Level({obstacles: new Set([3, 6, 10]), goal: 2})
const robo = new Robot({level})

watchEffect(() => {
  if (robo._x >= level.goal) {
    alert('goal reached!')
    router.push('/chapter/console/2')
  }
})

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
</template>
