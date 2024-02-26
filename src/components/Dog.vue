<template>
  <div>
    <button @click='addDog'>添加狗狗图片</button>
    <hr>
    <img v-for="(dog,index) in dogList" :key="index" :src = "dog">
    </div>
</template>

<script setup lang="ts" name = "DogVue">
import { reactive } from "vue"
import axios from 'axios'
let dogList = reactive(['https://images.dog.ceo/breeds/frise-bichon/3.jpg']) // 需要定义至少一个，否则会报错

// 安装Axios-->npm i axios
async function addDog(){
    try {
        let response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dogList.push(response.data.message);
    } catch (error) {
        console.error('Error adding dog:', error);
    }
}

</script>

<style scoped>

</style>