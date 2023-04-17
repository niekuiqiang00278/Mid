<template>
  <div id="e0">
    <div id="f1">
      <Beg id="bc0"></Beg>
      <Bpe id="bc1"></Bpe>
      <Bla id="bc2"></Bla>
    </div>
    <!--    @contextmenu="rightClick"-->
    <Pce id="f2">2</Pce>
  </div>
</template>

<script lang="ts" setup name="EPower">
import "scss/EPower.scss"
import {menusEvent} from 'vue3-menus';
import {shallowRef} from "vue";
import Bla from "../widget/epower/Bla.vue";
import Beg from "../widget/epower/Beg.vue";
import {News, T0} from "../base/Api";
import Bpe from "../widget/epower/Bpe.vue";
import Pce from "../widget/epower/Pce.vue";

const menus = shallowRef({
  menus: [
    {
      label: "返回(B)",
      tip: 'Alt+向左箭头',
      click: () => {
      }
    },
    {
      label: "点击不关闭菜单",
      tip: '不关闭菜单',
      click: () => {
        return false;
      }
    }
  ]
});
const rightClick = (event: any) => {
  menusEvent(event, menus.value);
  event.preventDefault();
}
''


</script>

