<template>
  <section class="real-app">
      <input 
      type="text"      
      class="add-input" 
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo">
      <item :todo="todo"></item>
  <tabs :filter="filter"></tabs>
      
  </section>
</template>


<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";

export default {
  data() {
    return {
      todo: {
        id: 0,
        content: "this is todo",
        completed: false
      },
      filter: "All"
    };
  },
  methods: {
    addTodo: function() {}
  },
  components: {
    Item,
    Tabs
  }
};
</script>

<style lang="less" scoped>
.real-app {
  margin: 0 auto;
  width: 600px;
  box-shadow: 0 0 5px #666;
}
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.5;
  outline: none;
  padding: 6px;
  border: none;
  box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;
}
</style>
