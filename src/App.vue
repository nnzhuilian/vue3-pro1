<template>
  <button @click="clearRole">delete role</button>
  <button @click="blockRole">block role</button>
  <div class="app">
    Hello world!
    <PersonVue />
    <!-- v-if false删除元素/ v-show false屏蔽元素 -->
    <RoleVue v-if="show" v-show="block"/> 
  </div>
</template>

<script>
import PersonVue from "./components/Person.vue";
import RoleVue from "./components/Role.vue";

export default {
  name: 'APP',
  components: { PersonVue, RoleVue },
  data() {
    return {
      show: true,
      block:true
    };
  },
  methods: {
    clearRole() {
      this.show = false
    },
    blockRole(){
      this.block = false
    }
  }
}

</script>

<style>
.app {
  background-color: bisque;
  margin: 10px;
  box-shadow: 2px 2px 10px brown;
  padding: 10px;
}
</style>