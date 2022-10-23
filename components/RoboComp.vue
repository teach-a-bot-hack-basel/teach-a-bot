<script setup lang="ts">
  // example counter component
  let count = $ref(0)
</script>

<template>
    <h2>Hello2

    </h2>

  <button class="p-4 w-full bg-red border" @click="count++">{{ count }}</button>
  
</template>
