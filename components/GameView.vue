<script lang="ts" setup>
import {Robot} from "~/classes/Robot";

defineProps<{
  Robo?: Robot,
}>()
</script>
<template>
  <div class="grid w-full h-full bg-green-200"
       style="grid-template-columns: repeat(24, minmax(0, 1fr));
       grid-template-rows: repeat(24, minmax(0, 1fr));">
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
  </div>
</template>
