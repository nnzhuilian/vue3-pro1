<template>
    <div class="weapon">
        <p>名称: {{ weapon.name }}</p>
        <p>等级：<input type="text" v-model="weapon.level"></p>
        <button @click="changeName">变更</button>
        <button @click="clearLevel">等级清零</button>
        <button @click="addLevel">增加等级</button>
        <p>名称等级：{{ nameLevel }}</p>
    </div>
    <div class="cloth">
        <p>名称：{{ cloth.name }}</p>
        <p>大小：{{ cloth.size }}</p>
        <button @click="addSize">扩容</button>
        <button @click="changeCloths">换衣服</button>
    </div>
    <div class="hat">
        <button @click="changeHatColor">变更颜色 </button>
        <button @click="changeHatType">变更类型 </button>
        <button @click="changeHatBrand">变更品牌 </button>
    </div>
</template>

<script setup lang="ts" name = "WeaponVue">
import { toRefs, reactive, computed, watch, ref, watchEffect, defineExpose } from "vue"

let weapon = reactive({
    name: '白星',
    level: 1,
    color: 'white'
})

let { name, level, color } = toRefs(weapon)

let nameLevel = computed({
    get() {
        return level.value + name.value;
    },
    set(val) {
        level.value = Number(val);
    }
})

const stopWatch = watch(level, (newValue, oldValue) => {
    console.log(newValue, oldValue)
    if (newValue > 10) {
        stopWatch()
    }
})

function changeName() {
    name.value = '护膜'
}

function clearLevel() {
    nameLevel.value = '0'
}

function addLevel() {
    level.value += 1;
}

let cloth = ref({
    name: '衣服',
    size: 1
})

function addSize() {
    cloth.value.size += 1;
}

function changeCloths() {
    cloth.value = { name: '大衣', size: 2 }
}

watch(cloth, (newValue, oldValue) => {
    console.log(newValue, oldValue);
}, { deep: true })


let hat = reactive({
    color: "red",
    type: "circle",
    brand: {
        name: "sb",
        price: 10000
    }
})

watch(() => hat.color, (newV, oldV) => {
    console.log("color", newV, oldV);
})

watch(() => hat.brand, (newV, oldV) => {
    console.log("brand", newV, oldV);
}, { deep: true })

// 这里的hat.brand只监视里面的值
watch([() => hat.color, hat.brand], (newV, oldV) => {
    console.log("array", newV, oldV);
})

function changeHatColor() {
    hat.color = "white"
}
function changeHatType() {
    hat.type = "square"
}
function changeHatBrand() {
    hat.brand = { name: "ab", price: 20 }
}

watchEffect(() => {
    if (hat.brand.price < 100) {
        alert("阿西吧")
    }
})
defineExpose({hat})
</script>

<style scoped>
.weapon {
    background-color: white
}
</style>