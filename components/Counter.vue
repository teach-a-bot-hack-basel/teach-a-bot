<script setup lang="ts">
  // example counter component
  let count = $ref(0)
</script>

<template>

  <button class="p-4 w-full bg-black border" @click="count++">{{ count }}</button>
  
</template>
