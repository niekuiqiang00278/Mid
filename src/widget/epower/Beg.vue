<template>
  <el-input clearable v-model="cw.w"></el-input>
</template>

<script lang="ts" setup name="Beg">
import {reactive} from "vue";
import {T1, T2} from "../../base/Api";

var cw = reactive({
  w: ''
})
// T1().then(res => {
//   console.log(res);
// })
// T2().then(res => {
//   console.log(res);
// })
</script>
<style scoped>

</style>