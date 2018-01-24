<template>
   <div id="footer">
      <span>Written By {{this.author}}</span>
    </div>
</template>

<script>
  
  export default {
    data(){
      return {
        author:'Mu'
      }
    }
  }
</script>

<style lang="less" scoped>
#footer{
    margin-top: 40px;
    text-align: center;
    color: #666;
    font-size: 10px;
    text-shadow: 0 1px 0 #bfbfbf
}
</style>
