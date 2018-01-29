<template>
    <div id="app">
        <div class="cover"></div>
        <Header></Header>    
        <todo></todo>    
        <Footer></Footer>        
    </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.vue";
import Todo from "./todo/todo.vue";

export default {
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
}
</style>
