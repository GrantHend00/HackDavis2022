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
    <div class="centered">
    <span class="p-input-icon-left p-input-icon-right">
    <i class="pi pi-search" />
    <InputText type="text" v-model="value3" placeholder="Enter Location" />
    <i class="pi pi-spin pi-spinner" />
    </span>
    </div>
    <div class="centeredTopPadding">
    <Button label="Primary" class="p-button-outlined centered" />
    </div>
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

.centeredTopPadding {
    padding-top: 2%;
    text-align: center;
}

</style>
