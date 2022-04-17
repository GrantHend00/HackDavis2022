<script setup>
import Display from '../components/Display.vue';
import Resources from '../components/Resources.vue'
</script>

<template>
  <div>
    <Display v-bind="{lat: $route.params.lat, lng: $route.params.lng }"/>
    <div class="centeredTopPadding">
      <Button @click="this.$router.push({ name: 'home'})" label="Return" class="p-button-raised centered" />
    </div>
    <Resources />
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'; 
  export default {
      beforeCreate: function() {
          document.body.className = '';
      },
      setup() {
        const route = useRoute()

        onMounted(() => {
          const lat = route.params.lat
          const lng = route.params.lng
        })
    },
  }
</script>

<style scoped>

.centeredTopPadding {
    padding-top: 2%;
    text-align: center;
    background-color: white;
}

</style>
