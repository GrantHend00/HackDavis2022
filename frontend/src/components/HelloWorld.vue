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
    <img class="logo centered medium" src="..\assets\firesight.png">
    <div class="centered margin-bottom">
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
    
    </div>
    <!-- A single page / github md file link to information about the model. -->
    <Button @click="this.$router.push({ name: 'github'})" id="footer" label="About the Model" class="p-button p-button-link white"/>



<!-- <AutoComplete :multiple="true" v-model="selectedCountries" 
	:suggestions="filteredCountrie<Button @click="this.$router.push({ name: 'view', params: {lat: -1, lng: -1} })" label="Calculate Risk" class="p-button p-component p-button-raised white" />sMultiple" 
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
        this.$router.push({ name: 'view', params: {lat: latitude, lng: longitude}})
      })
    })
  }
}
 
</script>

<style scoped>

.medium {
  width: 500px;
  height: 500px;
}

.white {
  background-color: black;
  color: white !important
}
.margin-bottom {
  margin-bottom: 25px;
}

#footer {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

#locationInput {
  box-shadow: 10px 5px 5px grey;
  box-sizing: content-box; height: 40px; width: 400px;
  font-size: 28px;
  color: grey;
  border: 0.1px double rgba(0,0,0,0.4);
  padding-left: 5%;
  outline: none;
  text-align: left;
}

#locationInput::-webkit-input-placeholder{
  transform: scale(0.7);
  transform-origin: 0% 50%;
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
