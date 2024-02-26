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
import { watch, watchEffect, defineExpose } from "vue"
import useClothes from '@/hooks/useClothes'
import useHats from '@/hooks/useHat'
import useWeapon from '@/hooks/useWeapon'

const { cloth, addSize, changeCloths } = useClothes()
const { hat, changeHatColor, changeHatType, changeHatBrand } = useHats()
const { weapon, nameLevel, stopWatch,changeName, clearLevel, addLevel } = useWeapon()

stopWatch

watch(cloth, (newValue, oldValue) => {
    console.log(newValue, oldValue);
}, { deep: true })

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
watchEffect(() => {
    if (hat.brand.price < 100) {
        alert("阿西吧")
    }
})
// 此处把hat暴露给父组件APP.vue
defineExpose({ hat })
</script>

<style scoped>
.weapon {
    background-color: white
}
</style>@/hooks/useClothes