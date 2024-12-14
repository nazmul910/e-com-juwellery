<script setup>
import GalleryP from './GalleryP.vue';
</script>
<template>
<div class=" bg-orange-100 px-6 md:px-0 py-16">
  <h1 class=" text-center text-6xl font-thin py-10">New <span class="font-unna text-7xl">Arrivals</span></h1>
  <div class="container mx-auto  border-t border-slate-400 md:px-5 py-5">
    <div>
      <div class="px-4 mb-10">
        <ul class="flex list-disc gap-16 text-slate-400 uppercase font-thin">
          <li>free shipping</li>
          <li>cashback 5%</li>
        </ul>
      </div>
      <div>
        <GalleryP/>
      </div>
    </div>
  </div>
</div>
</template>