<script lang="ts" setup>
</script>

<template>

  <div class=" bg-slate-300 p-6 w-full h-full">
    <div class="bg-white w-full h-full flex-col p-16">
      <div class="flex">
        <div class="Roboter-ganz w-80 mt-16 ml-16 mr-64">
          <img
            class="w-80 mt-16 ml-16 mr-64"
            src="/images/robo_ganz_schwebend.svg"
            alt="Robo-ganz"
          >
        </div>

        <div>
          <div class="text-black font-extrabold text-3xl font-mono mb-24 text-center leading-loose">
            How to be a robot &lt;Manual>
          </div>
          <div class="text-3xl font-sans text-center"> JavaScript is primarily
            known as the language of most modern web browsers. The language has
            continued to evolve and improve. JavaScript is a powerful, flexible,
            and fast programming language now being used for increasingly
            complex web development and beyond!

            Since JavaScript remains at the core of web development, it’s often
            the first language learned by self-taught coders eager to learn and
            build. We’re excited for what you’ll be able to create with the
            JavaScript foundation you gain here. JavaScript powers the dynamic
            behavior on most websites, including this one.

          </div>
        </div>
      </div>

      <RouterLink
        to="/chapter/console/1"
        class="block text-black font-extrabold text-2xl text-right font-mono mr-8 mt-8"
      >
        Continue >>
      </RouterLink>

    </div>
  </div>
</template>
