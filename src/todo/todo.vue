<template>
  <section class="real-app">
      <input 
      type="text"      
      class="add-input" 
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo">
      <item 
      v-for="todo in filterTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"/>
  <tabs 
  :filter="filter" 
  :todos="todos" 
  @toggle="toggleFilter" 
  @deleteAll="deleteAllItem"/>
      
  </section>
</template>


<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";

let id = 0;

export default {
  data() {
    return {
      todos: [],
      filter: "All"
    };
  },
  computed: {
    filterTodos: function() {
      if (this.filter === "All") {
        return this.todos;
      }
      const completed = this.filter === "Completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo: function(e) {
      if (!e.target.value.trim()) {
        return;
      }
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo: function(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter: function(state) {
      this.filter = state;
    },
    deleteAllItem: function() {
      this.todos = this.todos.filter(todo => todo.completed === false);
    }
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
