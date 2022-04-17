<template>
  <GoogleMap api-key="AIzaSyC2A2vs5L1PjZ9Q12G8fSfwxBUCTUvDyZU" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    lat: String,
    lng: String
  },
  setup(props) {
    console.log("Props", props )
    let lat = (props.lat ? props.lat : "38.5449")
    let lng = (props.lng ? props.lng : "-121.7405")
    const center = { lat: parseFloat(lat), lng: parseFloat(lng) };

    return { center };
  },
});


</script>