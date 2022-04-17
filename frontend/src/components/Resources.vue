<script setup>

</script>

<template>
    <div class="parent">
        <div id="modelResults" class="centered">
            <p style="font-weight:bold">
            According to our model, there is a {{riskNum.risk*riskNum.risk*riskNum.risk*10}}% chance of a fire.
            </p>
        </div>
        <!-- <h1 class="centered">Information</h1>
        <div class="wrapper">
            <div class="column centered">
                <Button @click="this.$router.push({ name: 'usfire'})" label="U.S. Fire Administration" class="p-button p-button-link white"/> 
            </div>
            <div class="column centered">2</div>
            <div class="column centered">3</div>
        </div> -->
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    risk: String,
  },
  setup(props) {
    console.log("Props2", props )

    let risk = (props.risk ? props.risk : "0")
    const riskNum = { risk: parseFloat(risk) };

    console.log("risk", riskNum.risk )
    return { riskNum };
  },
});
</script>

<style scoped>
.parent, .centered {
    width: 100%;
}

.wrapper:after {
  content: "";
  display: table;
  clear: both;
}

.centered {
    text-align: center;
}

.column {
  float: left;
  width: 33.33%;
}

</style>