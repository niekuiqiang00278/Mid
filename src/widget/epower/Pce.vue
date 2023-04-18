<template>
  <div id="ce0">
    <div id="p0">
<!--      <el-dialog-->
<!--          v-model="fc.centerDialogVisible"-->
<!--          align-center>-->
<!--        <template #title>-->
<!--          <div>控制台</div>-->
<!--        </template>-->
<!--        <template #default>-->
<!--          <div>-->
<!--            <div class="slwc">-->
<!--              <span>{{fc.zp.us}}</span>-->
<!--              <span>{{fc.zp.ws}}</span>-->
<!--              <span>{{fc.zp.live}}</span>-->
<!--            </div>-->
<!--            <div>{{fc.zp.aka}}</div>-->
<!--            <div>{{fc.zp.por}}</div>-->
<!--            <div class="slwc">-->
<!--              <span>{{fc.zp.pt}}</span>-->
<!--              <span>{{fc.zp.lt}}</span>-->
<!--            </div>-->
<!--            <el-button-group size="large">-->
<!--              <el-button type="success">上线</el-button>-->
<!--              <el-button  type="info">延长</el-button>-->
<!--              <el-button type="warning">下线</el-button>-->
<!--              <el-button type="danger">删除</el-button>-->
<!--            </el-button-group>-->
<!--          </div>-->
<!--        </template>-->
<!--        <template #footer>-->
<!--          <span class="dialog-footer">-->
<!--            <el-button @click="wldc()">Cancel</el-button>-->
<!--          </span>-->
<!--        </template>-->
<!--      </el-dialog>-->
    </div>
    <div id="p1">
      <el-table :data="fc.akt" @row-click="fkkw" :style="{'width':fc.width+'px'}" :height="fc.height">
        <el-table-column prop="us" label="用户名" width="200"></el-table-column>
        <el-table-column prop="aka" label="占位码" width="300" show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="por" label="校验码" width="300" show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="ws" label="通信" width="120"></el-table-column>
        <el-table-column prop="live" label="存活值" width="120"></el-table-column>
<!--        <el-table-column prop="pt" label="首次登录" width="200"></el-table-column>-->
<!--        <el-table-column prop="lt" label="最后登录" width="200"></el-table-column>-->
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup name="Pce">
import {nextTick, reactive} from "vue";
import {Depshow} from "../../base/Api";
var fc = reactive({
  akt: [], height: 0, width: 0, centerDialogVisible: false,zp:[]
});
nextTick(() => {
  const myDiv = document.getElementById('p1');
  const computedStyle = window.getComputedStyle(myDiv);
  const height = parseInt(computedStyle.height);
  const width = parseInt(computedStyle.width);
  fc.height = height;
  fc.width = width;
})
setInterval(function () {
  Depshow().then(res=>{
    fc.akt = res.data;
  })
},1000)
// // setInterval(function () {
// T0().then(res => {
//   fc.akt = res.result.akt
// })
// // },1000)
// const fkkw = (a: any) => {
//   fc.centerDialogVisible = true;
//   fc.zp = a;
// }
// const wldc = () => {
//   fc.centerDialogVisible = false
//   fc.zp = []
// }
</script>
<style scoped lang="scss">
#p0 {
  height: 30px;
  display: flex;
  flex-direction: row;

  span {
    flex: 1;
  }
}

#p1 {
  background: gold;
  flex: 1;
  overflow: auto;
}
.slwc{
  span{
    margin-right: 5px;
  }
}
</style>