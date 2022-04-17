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
    <input
      id="locationInput" 
      type="text" 
      @input="$emit('update:city', $event.target.value)"
      :value="city"
      placeholder="Enter Location" 
      ref="cityRef"
    />
    <i class="pi pi-spin pi-spinner" />
    </span>
    </div>
    <div class="centeredTopPadding">
    <Button @click="this.$router.push({ name: 'view', params: {lat: -1, lng: -1} })" label="Primary" class="p-button-outlined centered" />
    </div>



<!-- <AutoComplete :multiple="true" v-model="selectedCountries" 
	:suggestions="filteredCountriesMultiple" 
	@complete="searchCountryMultiple($event)" field="name" /> -->
    </div>

</template>

<script>

export default {
  mounted() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.$refs["cityRef"],
      {
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(38.5382, -121.7617)
        ),
        types: ['(cities)'],
        componentRestrictions: {country: 'us'},
        
      }
    );

    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      console.log("Inputted place: ", place);

      console.log("formatted address: ", place.formatted_address)

      const getCoords = new google.maps.Geocoder().geocode({
        address: place.formatted_address
      }).then((value) => {
        console.log("Latitue of Location: ", value.results[0].geometry.location.lat())
        let latitude = value.results[0].geometry.location.lat()
        console.log("Longitude of Location: ", value.results[0].geometry.location.lng())
        let longitude = value.results[0].geometry.location.lng()
        this.$router.push({ name: 'view', params: {lat: latitude, lng: longitude} })
      })

    })
  }
}
 
</script>

<style scoped>

#locationInput {
  font-size: 40px;
}

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
