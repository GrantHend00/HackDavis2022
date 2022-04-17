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
      placeholder="Enter Location..." 
      ref="cityRef"
    />
    <i class="pi pi-map-marker" />
    </span>
    </div>
    <div class="centeredTopPadding">
    <Button @click="this.$router.push({ path: 'view' })" label="Calculate Risk" class="p-button-raised p-button-text p-button-primary centered" />
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
        console.log("Longitude of Location: ", value.results[0].geometry.location.lng())
      })

    })
  }
}
 
</script>

<style scoped>

#locationInput {
  box-shadow: 10px 5px 5px grey;
  font-size: 40px;
  color: grey;
  border: 0.1px double rgba(0,0,0,0.4);
  padding-left: 5%;
  outline: none;
  text-align: left;
}

#locationInput::-webkit-input-placeholder{
  transform: scale(0.5);
  align-items: left;
  color: grey;
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
