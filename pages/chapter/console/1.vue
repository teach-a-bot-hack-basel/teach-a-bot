<script lang="ts" setup>
import GameView from "~/components/GameView.vue";
import Controller from "~/components/Controller.vue"
import {Robot} from "~/classes/Robot";
import {Level} from "~/classes/Level";

const level = new Level({obstacles: new Set([2, 4, 8])})
const robo = new Robot({level})

</script>
<template>
  <div class="flex flex-col aspect-square">
    <GameView :robo="robo" class="flex-grow"/>
    <Controller class="fixed bottom-0"/>
  </div>
</template>
