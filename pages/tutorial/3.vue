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
              readme.txt
            </div>
            <div class="text-3xl font-sans text-center"> The E-learning Game will start when you click the continue button.
                Please open your browser-console bevor you start to play.
                Open it with right-click on the page and click on the inspect button. 

            <a href="https://appuals.com/open-browser-console/">
            <button class="button-help text-black font-extrabold ml-auto mr-auto text-2xl font-mono mt-24 text-center"> 
                &lt;Help me> </button>
            </a>

                        
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