<template>
  <GoogleMap api-key="AIzaSyC2A2vs5L1PjZ9Q12G8fSfwxBUCTUvDyZU" style="width: 100%; height: 500px" :center="center" :zoom="15" 
    :clickableIcons=false gestureHandling="none">
    <Marker :options="{ position: center }" />
    <InfoWindow :options="{ position: center, content:  '<div onload=showRisk() style=color:red;font-size:40px;font-weight:bold>%</div>' }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";


export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  props: {
    lat: String,
    lng: String,
    risk: String
  },
  setup(props) {
    console.log("Props", props )
    let lat = (props.lat ? props.lat : "38.5449")
    let lng = (props.lng ? props.lng : "-121.7405")
    const center = { lat: parseFloat(lat) + 0.001, lng: parseFloat(lng) };

    let risk = (props.risk ? props.risk : "0")
    const riskNum = { risk: parseFloat(risk) };

    return { center, riskNum };
  },
});
</script>

<style scoped>
div ::v-deep(.gm-ui-hover-effect) {
  display: none !important;
}

</style>