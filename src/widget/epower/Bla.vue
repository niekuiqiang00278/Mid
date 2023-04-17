<template>
  <div>
    <button @click="adds_ser">adds server</button>
    <button @click="dels_ser">dels server</button>
    <button></button>
    <button @click="refs_ser">refs server</button>
  </div>
</template>
<script lang="ts" setup name="Bla">
const adds_ser = () => {
  console.log('adds_ser')
}
const dels_ser = () => {
  console.log('dels_ser')
}
const refs_ser = () => {
  console.log('refs_ser')
}
</script>

<style scoped>
button {
  flex: 1;
}
</style>