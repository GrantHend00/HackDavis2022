<script setup>
import Display from '../components/Display.vue';
</script>

<template>
  <Display v-bind="{lat: $route.params.lat, lng: $route.params.lng }"/>
</template>

<script>
  import { useRoute } from 'vue-router'; 
  export default {
      setup() {
      const route = useRoute()

      onMounted(() => {
        const lat = route.params.lat
        const lng = route.params.lng
      })
    },
  }
</script>
