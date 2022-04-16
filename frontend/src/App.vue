<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>

  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
