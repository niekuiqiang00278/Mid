<template>
  <div id="e0">
    <div id="f1"></div>
    <Pce id="f2"></Pce>
    <!--    @contextmenu="rightClick"-->
  </div>
</template>

<script lang="ts" setup name="EPower">
import "scss/EPower.scss"

import {menusEvent} from 'vue3-menus';
import {reactive, shallowRef} from "vue";
import {Depshow} from "../base/Api";
import Pce from "../widget/epower/Pce.vue";
var oec = reactive({
  pef:[]
})

// const menus = shallowRef({
//   menus: [
//     {
//       label: "返回(B)",
//       tip: 'Alt+向左箭头',
//       click: () => {
//       }
//     },
//     {
//       label: "点击不关闭菜单",
//       tip: '不关闭菜单',
//       click: () => {
//         return false;
//       }
//     }
//   ]
// });
// const rightClick = (event: any) => {
//   menusEvent(event, menus.value);
//   event.preventDefault();
// }
</script>

