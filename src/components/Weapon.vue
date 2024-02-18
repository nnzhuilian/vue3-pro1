<template>
  <div class = "weapon">
    <p>名称: {{ weapon.name }}</p>
    <p>等级：<input type="text" v-model="weapon.level"></p>
    <button @click="changeName">变更</button>
    <button @click="clearLevel">等级清零</button>
    <button @click="addLevel">增加等级</button>
    <p>名称等级：{{ nameLevel }}</p>
  </div>
  <div class ="cloth">
    <p>名称：{{ cloth.name }}</p>
    <p>大小：{{ cloth.size }}</p>
    <button @click = "addSize">扩容</button>
    <button @click= "changeCloths">换衣服</button>
  </div>
</template>

<script setup lang="ts" name = "WeaponVue">
import { toRefs, reactive, computed, watch, ref } from "vue"

let weapon = reactive({
    name:'白星',
    level: 1,
    color: 'white'
})

let {name, level, color} = toRefs(weapon)

let nameLevel = computed({
    get(){
        return level.value + name.value;
    },
    set(val){
        level.value = Number(val);
    }
})

const stopWatch = watch(level, (newValue, oldValue)=>{
    console.log(newValue, oldValue)
    if(newValue>10){
        stopWatch()
    }
})

function changeName(){
    name.value = '护膜'
}

function clearLevel(){
    nameLevel.value = '0'
}

function addLevel(){
    level.value += 1;
}

let cloth = ref({
    name: '衣服',
    size: 1
})

function addSize(){
    cloth.value.size += 1;
}

function changeCloths(){
    cloth.value = {name:'大衣', size:2}
}

watch(cloth, (newValue, oldValue)=>{
    console.log(newValue, oldValue);
},{deep: true})



</script>

<style>
.weapon{
    background-color: white;
}
</style>