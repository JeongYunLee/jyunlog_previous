<template>
  <div class="mt-8">

    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        Interested in
      </h2>

      <ul class="flex flex-wrap gap-4 items-center">
        <li>
          <ol class="text-gray-500 dark:text-gray-400">▪︎ Artificial Intelligence</ol>
          <ol class="text-gray-500 dark:text-gray-400">▪︎ Natural Language Process</ol>
          <ol class="text-gray-500 dark:text-gray-400">▪︎ Knowledge Graph</ol>
        </li>

         <!-- framework icons -->
        <!-- <li class="flex items-center">
          <Html class="h-10 w-10 rounded-sm drop-shadow-sm"></Html>
        </li>
        <li class="flex items-center">
          <Css class="h-10 w-10 rounded-sm drop-shadow-sm"></Css>
        </li> -->
        <!-- <li class="flex items-center">
          <Bootstrap class="h-10 w-10"></Bootstrap>
        </li>
        <li class="flex items-center">
          <TailwindCss class="h-10 w-10"></TailwindCss>
        </li>
        <li class="flex items-center">
          <Javascript class="h-10 w-10"></Javascript>
        </li>
        <li class="flex items-center">
          <Vuejs class="h-10 w-10"></Vuejs>
        </li>
        <li class="flex items-center">
          <Nuxt class="h-10 w-10"></Nuxt> 
        </li>-->
      </ul>
    </div>

    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        Favorite things
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li>
          <ol class="text-gray-500 dark:text-gray-400 flex items-center">▪︎ Taking a picture → 
            <a href="https://www.instagram.com/j_pick_ture/?igshid=YmMyMTA2M2Y%3D" target="_blank">
              <img class="w-4 h-4 ml-2" src="~assets/icon/instagram.svg"/>
            </a>
          </ol>
          <ol class="text-gray-500 dark:text-gray-400">▪︎ Playing a guitar</ol>
          <ol class="text-gray-500 dark:text-gray-400">▪︎ Travel, Walking around</ol>
          <ol class="text-gray-500 dark:text-gray-400">▪︎ Korean Traditional things</ol>
        </li>
        <!-- framework icons -->
        <!-- <li class="flex items-center">
          <Laravel class="h-10 w-10"></Laravel>
        </li>
        <li class="flex items-center">
          <Node class="h-10 w-10"></Node>
        </li> -->
      </ul>
    </div>

    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Previous Blog
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li>
          <ol class="text-gray-500 dark:text-gray-400">The previous blog that I used from 2020 to 2022 is 
            <a href="https://blog.naver.com/cathx618" class="underline underline-offset-auto" target="_blank">here</a>.
          </ol> 
        </li>
      </ul>
    </div>

    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        About my character
     </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li>
          <img class="w-36 h-36 ml-2" src="~static/author.png"/>
        </li>
        <li>
          <colorMC /> <buttonMC />
        </li>
        <li class="text-gray-500 dark:text-gray-400">
          This is 'Maeng-Chong', a green bean and it's one of 'Doo-Cong' family which I named. 
          I usually used this character in my profiles and you can see this easily. 
          I hope I have a chance to tell you datails about this character one day!
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Javascript from "../assets/devicon/javascript.svg?inline";
import Html from "../assets/devicon/html.svg?inline";
import Css from "../assets/devicon/css.svg?inline";
import Vuejs from "../assets/devicon/vuejs.svg?inline";
import TailwindCss from "../assets/devicon/tailwindcss.svg?inline";
import Nuxt from "../assets/devicon/nuxt.svg?inline";
import Bootstrap from "../assets/devicon/bootstrap.svg?inline";
import Laravel from "../assets/devicon/laravel.svg?inline";
import Node from "../assets/devicon/node.svg?inline";
import BuyMeACoffee from "./BuyMeACoffee.vue";
import colorMC from "./colorMC.vue";
import buttonMC from "./buttonMC.vue";
export default {
  components: {
    Javascript,
    Html,
    Css,
    Bootstrap,
    Vuejs,
    TailwindCss,
    Nuxt,
    Laravel,
    Node,
    BuyMeACoffee,
    colorMC,
    buttonMC
},
};
</script>
