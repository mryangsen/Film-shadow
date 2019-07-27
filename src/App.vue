<template>
  <div id="app">
    <keep-alive>
       <router-view class="router-view"></router-view>
    </keep-alive>
   
    <foot-bar v-show="$route.meta.footShow"></foot-bar>
  </div>
</template>
<script>
import FootBar from '@components/FootBar.vue'
export default {
  components:{
    FootBar
  }
}
</script>
<style lang="scss">
//  统一padding
  $basePadding: 17.5px;
  // 版心
  $baseCenterWidth: 340px;
  // 字体颜色 
  $baseFontColor: #DFDFDF;
  // 字体颜色2
  $baseFontColor2: #FBC34A;
  // 背景色
  $baseBgColor: #22262D;
  // 次级背景色
  $baseBgLightColor: #22262D;
  // 渐变色 
  @mixin changeColor(){
    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
  }
button{
  outline: none;
  border: none;
}
body{
  background-color: $baseBgColor;
  //取消移动端点击后的默认背景色
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $baseFontColor;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view{
  margin-bottom: 100px;
}
</style>
