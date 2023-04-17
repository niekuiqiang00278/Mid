<template>
  <div>fff</div>
<!--  <el-tree-v2 :data="data" :props="props">-->
<!--    <template #default="{ node }">-->
<!--      <span class="prefix" :class="{ 'is-leaf': node.isLeaf }"-->
<!--      >[ElementPlus]</span-->
<!--      >-->
<!--      <span>{{ node.label }}</span>-->
<!--    </template>-->
<!--  </el-tree-v2>-->
</template>

<script lang="ts" setup name="Bpe">
import {T2} from "../../base/Api";

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
// T2().then(res=>{
//   console.log(res)
//
// })
</script>

<style scoped>
.prefix {
  color: var(--el-color-primary);
  margin-right: 10px;
}
.prefix.is-leaf {
  color: var(--el-color-success);
}
</style>