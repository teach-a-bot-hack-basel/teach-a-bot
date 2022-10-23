<script>
</script>


<template>

    <div>

     <!--
<div class="grid grid-cols-3 gap-4">
    <h1 class="text-black font-extrabold text-5xl col-start-2"> teach-a-bot </h1>
</div> -->

        <h1 class="titeltext text-black font-extrabold text-6xl text-center pt-20 font-mono"> teach-a-bot </h1>

        <div class="sprechblase-hallo-robo relative"> 
            <img class="h-[100px]  ml-auto mr-48 mt-16" src="/images/blase01_robotsayshello.svg" alt="sprechblase-hallo-robo">    
            <div class="sprechblase-text text-5xl absolute top-0 right-0 pr-72 pt-6 font-sans"> hello </div>
        </div>
        <div class="Roboter-kopf w-60 h-48 ml-auto mr-auto mb-16 mt-8">
            <img class="h-48" src="/images/robo_kopf.svg" alt="Robo-Kopf">
        </div>

        <div class="sprechblase-code-hallo relative flex justify-center items-center"> 
            <div class="sprechblase-text text-5xl absolute font-sans pb-10 flex"> 
                <span> robo.log(' </span>  
                <input class="w-24 text-gray-300" type="text">
                <span> ')</span> 
            </div>
            <img class="h-[200px]" src="/images/blase01_isayhello.svg" alt="sprechblase-code-hallo">  
        </div>
        <div class="anweisung-begrüssung text-2xl text-right font-mono mr-8"> type "hello" to start >> </div>  

    </div>

</template>



