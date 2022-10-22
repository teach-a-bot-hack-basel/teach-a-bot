<script lang="ts" setup>
  import {Robot} from "~/classes/Robot"

  defineProps<{
    robo: Robot,
  }>()
</script>

<template>
  <ul>
    <li v-for="obst of robo._level.obstacles">{{ obst }}</li>
  </ul>
</template>
