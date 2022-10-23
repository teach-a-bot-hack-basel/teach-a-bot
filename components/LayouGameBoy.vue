<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col aspect-square max-w-xl mx-auto mt-10 ">
    <div class="relative p-10 bg-stone-400 rounded-xl border-4 border-stone-700">
      <div class="absolute top-4 left-4 rounded-full h-4 w-4 border-4 border-stone-700	"/>
      <div class="absolute top-4 right-4 rounded-full h-4 w-4 border-4 border-stone-700"/>

      <div class="absolute bottom-4 left-4 rounded-full border-4 border-stone-700 h-4 w-4"/>
      <div class="absolute bottom-4 right-4 rounded-full border-4 border-stone-700 h-4 w-4"/>
      <slot/>
    </div>
  </div>
</template>
