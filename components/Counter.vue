<script setup lang="ts">
  // example counter component
  let count = $ref(0)
</script>

<template>

  <button class="bg-black border" @click="count++">{{ count }}</button>
  
</template>
