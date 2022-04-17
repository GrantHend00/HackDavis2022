<script setup>
import Display from '../components/Display.vue';
import Resources from '../components/Resources.vue'
</script>

<template>
  <div>
    <Display v-bind="{lat: $route.params.lat, lng: $route.params.lng }"/>
    <Resources />
    <div class="centeredTopPadding">
      <Button @click="this.$router.push({ name: 'home'})" label="Return to Home" class="p-button-raised centered footer" />
    </div>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'; 
  export default {
      beforeCreate: function() {
          document.body.className = 'data';
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

.footer {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
.centeredTopPadding {
    padding-top: 2%;
    text-align: center;
}

</style>
