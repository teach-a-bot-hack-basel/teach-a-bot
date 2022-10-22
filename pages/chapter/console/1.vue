<script lang="ts" setup>
import GameView from "~/components/GameView.vue";
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot";
import {Level} from "~/classes/Level";

const level = new Level({obstacles: new Set([3, 6, 10])})
const robo = new Robot({level})

</script>
<template>
  <div class="flex flex-col aspect-square">
    <GameView :robo="robo" class="flex-grow"/>
    <Controller :robo="robo" class="fixed bottom-0"/>
  </div>
</template>
