<script setup lang="ts">
  // example counter component
  let count = $ref(0)
</script>

<template>
  <button class="" @click="count++">{{ count }}</button>
  
</template>
