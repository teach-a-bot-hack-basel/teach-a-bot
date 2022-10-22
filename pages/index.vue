<script setup lang="ts">
  import {onMounted} from "#imports"
  import {Robot} from "~/classes/Robot"
  import {Level} from "~/classes/Level"
  import Counter from "~/components/Counter.vue"
  import GameView from "~/components/GameView.vue"

  const level = new Level({obstacles: new Set([2, 4, 8])})
  const robo = new Robot({level})

</script>

<template>
  <main>
    <pre>{{ JSON.stringify(robo, null, 2) }}</pre>
    <pre>obstacles: {{ [...level.obstacles].join(",") }}</pre>
    <div class="w-96 h-32 bg-black relative">
      <div
        class="w-8 h-8 bg-gray-500 absolute"
        :style="{left: (robo._x * 32)+'px', bottom: (robo._y * 32)+'px'}"
      ></div>
    </div>
  </main>
</template>
