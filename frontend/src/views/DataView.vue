<script setup>
import Display from '../components/Display.vue';
import Resources from '../components/Resources.vue'
</script>

<template>
  <div>
  <div class="center">
    <Motion :initial="{ opacity: 0, scale: 0 }"
            :animate="{ opacity: 1, scale: 1, transition: { duration: 1 } }"
    >
      <Display v-bind="{lat: $route.params.lat, lng: $route.params.lng, risk: $route.params.risk }"/>
    </Motion>
    <Resources class="centeredTopPadding" v-bind="{risk: $route.params.risk}"/>
  </div>
    <div class="centeredTopPadding">
      <Button @click="this.$router.push({ name: 'home'})" label="Return to Home" class="p-button-raised p-button-primary centered footer" />
    </div>
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
          const risk = route.params.risk
        })
    }
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

.center {
  padding-top:7%
}
</style>
