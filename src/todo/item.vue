<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
      <input 
        type="checkbox"
        class="toggle"
        checked="checked"
        v-model="todo.completed"
        >
    <label>{{todo.content}}</label>
    <button 
        class="destory"
        @click="deleteTodo"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo: function() {
      this.$emit('del',this.todo.id);
    }
  }
};
</script>

<style lang="less" scoped>
.todo-item {
  position: relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  &:hover {
    .destory:after {
      content: "x";
    }
  }
  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
    .toggle:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 55%;
      width: 90%;
      height: 90%;
      transform: translate(-50%, -50%);
      background: url(../assets/image/check.png) no-repeat;
      background-size: 100%;
    }
  }
  .toggle {
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0 auto 10px;
    appearance: none;
    outline: none;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
  .destory {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background-color: transparent;
    appearance: none;
    cursor: pointer;
    outline: none;
    border: none;
  }
}
</style>

