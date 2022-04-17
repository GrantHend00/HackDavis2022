<template>
  <GoogleMap api-key="AIzaSyC2A2vs5L1PjZ9Q12G8fSfwxBUCTUvDyZU" style="width: 100%; height: 500px" :center="center" :zoom="15" 
    :clickableIcons=false gestureHandling="none">
    <Marker :options="{ position: center }" />
    <InfoWindow v-if="riskLevel === 'High'" :options="{ position: center, content:  '<div style=color:red;font-size:40px;font-weight:bold>High Risk</div>' }" />
    <InfoWindow v-else-if="riskLevel === 'Medium'" :options="{ position: center, content:  '<div style=color:yellow;font-size:40px;font-weight:bold>Medium Risk</div>' }" />
    <InfoWindow v-else :options="{ position: center, content:  '<div style=color:green;font-size:40px;font-weight:bold>Low Risk</div>' }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

export default defineComponent({
  data() {
    return {
      riskLevel: "Null"
    }
  },
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

    if(riskNum.risk <= 5)
      this.riskLevel = "Low";
    else if(riskNum.risk > 5 && riskNum.risk <= 10)
      this.riskLevel = "Medium";
    else  
      this.riskLevel = "High"

    return { center, riskNum };
  },
});
</script>

<style scoped>
div ::v-deep(.gm-ui-hover-effect) {
  display: none !important;
}

.percentageRed {
  font-size: 20px;
  color: red;
}

</style>