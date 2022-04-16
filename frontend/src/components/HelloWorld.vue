<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="centered">
    <img id="logo centered" src="..\assets\firesight.png">
    <Button label="Primary" class="p-button-outlined centered" />
  </div>
</template>

<style scoped>


h3 {
  font-size: 1.2rem;
  text-align: center;
}

.centered {
  text-align: center;
}

</style>
