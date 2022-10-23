<script lang="ts" setup>

let toggle = $ref(false)


</script>

<template>
  <div @click="toggle = !toggle" class="text-3xl font-mono">
    ?
  </div>
  <div v-if="toggle" style="background: rgba(0,0,0,0.5)" class="
  fixed top-0 bottom-0 left-0 right-0
  grid place-content-center">
    <div class=" relative w-[80vw] h-[80vh] bg-white rounded-xl p-10">
      <button @click="toggle = !toggle"
              class="absolute right-4 top-2 text-3xl font-mono">x
      </button>
      <div class="grid gap-6 text-2xl font-bold overflow-scroll">
        <slot/>
      </div>
    </div>

  </div>
</template>
