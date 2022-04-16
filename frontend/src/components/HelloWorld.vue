<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3>{{msg}}</h3>
  </div>
</template>

<style scoped>

h3 {
  font-size: 1.2rem;
  text-align: center;
}

</style>
