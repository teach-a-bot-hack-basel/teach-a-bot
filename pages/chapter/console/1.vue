<script lang="ts" setup>
import GameView from "~/components/GameView.vue"
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot"
import {Level} from "~/classes/Level"
import {watchEffect} from "#imports"
import {useRouter} from "#app"
import LayouGameBoy from "~/components/LayouGameBoy.vue";

const router = useRouter()
const level = new Level({obstacles: new Set([3, 6, 10]), goal: 8})
const robo = new Robot({level})

watchEffect(() => {
  if (robo._x >= level.goal) {
    alert('goal reached!')
    router.push('/chapter/console/2')
  }
})

</script>
<template>
  <LayouGameBoy>
    <GameView
        :robo="robo"
        :resolution="12"
    />
    <Controller
        :robo="robo"
        chapter-name="Methods"
        current-task="1"
        task-count="4"
    >
      <h2 class="text-5xl font-mono">Aufgabe 1</h2>
      <article>
        lorem
      </article>
    </Controller>
  </LayouGameBoy>
</template>
