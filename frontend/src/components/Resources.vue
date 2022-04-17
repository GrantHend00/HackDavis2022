<script setup>

</script>

<template>
    <div class="parent">
        <h1 class="centered">Information</h1>
        <div class="wrapper">
            <div class="column centered">
                <Button @click="this.$router.push({ name: 'usfire'})" label="U.S. Fire Administration" class="p-button p-button-link white"/> 
            </div>
            <div class="column centered">2</div>
            <div class="column centered">3</div>
        </div>
    </div>
</template>

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