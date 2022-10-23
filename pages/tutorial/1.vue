
<template>
    <div class="p-4">
      <h1 class="titeltext text-black font-extrabold text-6xl text-center pt-20 font-mono">
        teach-a-bot </h1>
  
      <div class="sprechblase-hallo-robo relative">
        <img
          class="h-[100px]  ml-auto mr-48 mt-16"
          src="/images/blase01_robotsayshello.svg"
          alt="sprechblase-hallo-robo"
        >
        <div class="sprechblase-text text-5xl absolute top-0 right-0 pr-72 pt-6 font-sans">
          hello
        </div>
      </div>
  
      <div class="Roboter-kopf w-60 h-48 ml-auto mr-auto mb-16 mt-8">
        <img class="h-48" src="/images/robo_kopf.svg" alt="Robo-Kopf">
      </div>
  
      <div class="sprechblase-code-hallo relative flex justify-center items-center">
        <div class="sprechblase-text text-5xl absolute font-sans pb-10 flex">
            hello
        </div>
        <img
          class="h-[200px]"
          src="/images/blase02_isaidhello.svg"
          alt="sprechblase-code-hallo"
        >
      </div>
  
      <RouterLink
        to="/tutorial/2"
        class="block anweisung-begrüssung text-2xl text-right font-mono mr-8"
      >
        continue >>
      </RouterLink>
    </div>
  </template>
  