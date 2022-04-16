<script setup>
import { onMounted } from '@vue/runtime-core';
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
    <input type="text" 
    @input="$emit('update:city', $event.target.value)"
    :value="city"
    placeholder="Enter Location" ref="cityRef"/>
    <i class="pi pi-spin pi-spinner" />
    </span>
    </div>
    <div class="centeredTopPadding">
    <Button @click="this.$router.push({ path: 'view' })" label="Primary" class="p-button-outlined centered" />
    </div>



<!-- <AutoComplete :multiple="true" v-model="selectedCountries" 
	:suggestions="filteredCountriesMultiple" 
	@complete="searchCountryMultiple($event)" field="name" /> -->
    </div>

</template>

<script>

export default {
    data() {
        return {
            selectedCountry: null,
            filteredCountries: null
        }
    },
    setup() {
      const cityRef = ref()

      onMounted(() => {
        const autocomplete = google.maps.places.Autocomplete(cityRef.value, {
        types: ["address"],
        fields: ["address_components"]
        });
      })
      
      return {cityRef}
    }
}
</script>

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
