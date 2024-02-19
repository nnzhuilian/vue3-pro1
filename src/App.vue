<template>
  <div class="app">
    <button @click="clearRole">delete role</button>
    <button @click="blockRole">block role</button>
    <button @click="showlog">show</button>
    Hello world!
    <PersonVue />
    <!-- v-if false删除元素/ v-show false屏蔽元素 -->
    <RoleVue v-if="show" v-show="block" />
    <WeaponVue ref="weapon"/>
  </div>
</template>

<script lang="ts" setup name="App">
import PersonVue from "./components/Person.vue";
import RoleVue from "./components/Role.vue";
import WeaponVue from "./components/Weapon.vue"
import { ref } from "vue";


let show = true
let block = true

function clearRole() {
  show = false
}
function blockRole() {
  block = false
}
let weapon = ref() // 需配合子componet defineEpose使用
function showlog(){
  console.log(weapon.value);
}

</script>

<style scoped>
.app {
  background-color: bisque;
  margin: 10px;
  box-shadow: 2px 2px 10px brown;
  padding: 10px;
}
button {
  background-color: coral;
  color: white;
  box-shadow: 0 0 2px burlywood;
  border-color: lightcoral;
}
</style>