<script lang="ts" setup>
  import GameView from "~/components/GameView.vue"
  import Controller from "~/components/Controller.vue"
  import {Robot} from "~/classes/Robot"
  import {Level} from "~/classes/Level"
  import {watchEffect} from "#imports"
  import {useRouter} from "#app"

  const router = useRouter()
  const level = new Level({obstacles: new Set([9, 11, 13]), goal: 14})
  const robo = new Robot({level})

  watchEffect(() => {
    if (robo._x >= level.goal) {
      alert('goal reached!')
      router.push('/chapter/console/3')
    }
  })

</script>
<template>
  <div class="flex flex-col aspect-square">
    <GameView :robo="robo" class="flex-grow"/>
    <Controller :robo="robo" class="fixed bottom-0"/>
  </div>
</template>
