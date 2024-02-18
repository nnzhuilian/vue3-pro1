<template>
    <div class="person">
        <h2>原神{{ status }}！</h2>
        <button @click="sendAlert">开门</button>
    </div>
</template>

<script setup lang="ts" name="PersonVue">
import { ref } from "vue"
let status = ref("关闭")

function sendAlert() {
    alert("欢迎来到提瓦特！")
    status.value = "启动"
}
</script>

<style>
.person {
    background-color: aliceblue;
    border-radius: 2px;
    padding: 10px;
}
</style>