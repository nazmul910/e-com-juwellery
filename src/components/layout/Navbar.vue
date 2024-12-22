<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class=" text-black bg-orange-100  fixed top-0 left-0 right-0 z-50 px-4 py-2 ">
    <div class="container mx-auto flex items-center justify-between">

      <div class="md:flex space-x-4 hidden md:block  ">
        <a href="#home" class="hidden md:block">Home</a>
        <a href="#about" class="hidden md:block">About</a>
      </div>


      <div class="text-lg md:text-2xl font-unna">Shine</div>


      <div class="flex space-x-4">
        <a href="#service" class="hidden md:block">Services</a>
        <a href="#contact" class="hidden md:block">Contact</a>
      </div>


      <button @click="isMenuOpen = !isMenuOpen" class="block  md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>


    <ul
      v-show="isMenuOpen"
      class="md:hidden  flex flex-col space-y-9 mt-2 italic font-thin  p-4   text-3xl"
    >
      <li><a href="#home" class="block">Home</a></li>
      <li><a href="#service" class="block">About</a></li>
      <li><a href="#service" class="block">Services</a></li>
      <li><a href="#contact" class="block">Contact</a></li>
    </ul>
  </nav>
</template>
