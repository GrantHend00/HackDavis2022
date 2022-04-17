<script setup>
import Display from '../components/Display.vue';
import Resources from '../components/Resources.vue'
</script>

<template>
  <div>
    <Motion :initial="{ opacity: 0, scale: 0 }"
            :animate="{ opacity: 1, scale: 1, transition: { duration: 1 } }"
    >
      <Display v-bind="{lat: $route.params.lat, lng: $route.params.lng }"/>
    </Motion>
    <div class="centeredTopPadding">
      <Button @click="this.$router.push({ name: 'home'})" label="Return" class="p-button-raised centered" />
    </div>
    <Resources />
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'; 
  import { Motion } from "motion/vue"

  export default {
      components: { Motion },

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

.centeredTopPadding {
    padding-top: 2%;
    text-align: center;
}

</style>
