<script setup>
  import Navbar from '@/components/layout/Navbar.vue';
  import Hero from '@/components/componetn/hero/HeroSection.vue'
  import Level from '@/components/componetn/level/Level.vue'
  import About from '@/components/componetn/hero/About.vue'
  import Product from '@/components/componetn/hero/Product.vue'
  import Gallery from '@/components/componetn/gallery/Gallery.vue';
  import AllProduct from '@/components/componetn/allProduct/AllProduct.vue';
  import Customization from '@/components/componetn/hero/Customization.vue';
  import Article from '@/components/componetn/hero/Article.vue';
  import Contact from '@/components/componetn/hero/Contact.vue';
  import Footer from '@/components/layout/Footer.vue';
</script>

<template>
  <main>

   <Navbar/>
   <Hero/>
   <Level/>
   <About/>
   <Product/>
   <Gallery/>
   <AllProduct/>
   <Customization/>
   <Article/>
   <Contact/>
   <Footer/>
  </main>

</template>
