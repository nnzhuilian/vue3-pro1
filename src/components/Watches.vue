<template>
  <div>
    <ul>
      <li v-for="i in list" :key="i.id">{{ i.name }}--{{ i.version }}</li>
    </ul>
    <p>{{ a }}</p>
  </div>
</template>

<script setup lang="ts" name="Watches">
import { type Watch, type Watches } from '@/types/Watches'
import { withDefaults } from 'vue';

let watch1:Watch = {id:123, name:'23', version: 23}

let watches: Watches = [{id:123, name:'23', version: 23},{id:123, name:'23', version: 23}]

// let watchList = defineProps(["list"])

let watchList = withDefaults(defineProps<{list: Watches, a: string}>(),{
  list: ()=> [{id:1,
  name:"2",
  version:3}],
  a:"哈哈哈"
})
</script>

<style scoped>

</style>