<template>
  <div class = "role">
    <p>{{role.name}}:{{role.star}}</p>
    <button @click="addStar">添加命座</button>
    <button @click="addRole">新增角色</button>
    <button @click="changeRole">变更角色</button>
    <div>
      <ul>
        <li v-for="r in liyue" v-bind:key="r.id">{{r.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts" name="RoleVue">
import { ref, reactive } from "vue"
let role = reactive({
  name:"达达利亚",
  star:0
})

let liyue = reactive([
  {id:'001', name:'胡桃'},
  {id:'002', name:'钟离'},
  {id:'003', name:'魈'}
])

function addStar(){
  role.star++;
}

function addRole(){
  liyue.push({id:'004', name:"甘雨"})
}

function changeRole(){
  // reative对象替换， ref的value可以整体改
  Object.assign(role, {name:"莱欧斯利", star: 0})
}

</script>

<style>
.role{
  border:3px dotted salmon;
  margin: 2px;
}
</style>