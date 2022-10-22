<script lang="ts" setup>
  import {Robot} from "~/classes/Robot"

  defineProps<{
    robo: Robot,
  }>()
</script>

<template>
  <div class="grid"></div>
</template>
