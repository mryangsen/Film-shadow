<template>
  <div class="indent-main">
    <!-- <h2> 这是订单.vue页面 </h2> -->
    <div class="header">
      <router-link to="/main" tag="img" :src="require('@/assets/imgs/main/imgs/leftjt.png')" alt="123" ></router-link>
      <!-- <img @click="$router.go(-1)" src="@/assets/imgs/main/imgs/leftjt.png" alt> -->
      <h2>我的订单</h2>
      <div class="editor">编辑</div>
    </div>
    <div class="banner">
      <ul class="control">
        <router-link :to="{name:'allorder'}" tag="li" class="item ite-all">全部 </router-link>
        <router-link tag="li" class="item" :to="{name:'obligation'}">待付款</router-link>
        <router-link tag="li" class="item" :to="{name:'evaluated'}">待评价</router-link>
        <router-link tag="li" class="item" :to="{name:'refund'}">退款</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "indent",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.indent-main {
  .header {
    width: 335px;
    height: 25px;
    margin: 0 auto;
    margin-top: 20px;
    img {
      float: left;
      width: 20px;
      height: 20px;
      margin-top: 3px;
    }
    h2 {
      float: left;
      display: block;
      width: 64px;
      height: 25px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      margin-left: 120px;
    }
    .editor {
      float: right;
      margin-left: 50px;
      width: 42px;
      height: 20px;
      border-radius: 2px;
      border: 1px solid rgba(249, 195, 74, 1);
      text-align: center;
      line-height: 20px;
      margin-top: 2px;
    }
  }
  .banner {
    overflow: hidden;
    width: 335px;
    min-height: 200px;
    margin: 0 auto;
    // background-color: black;
    .control {
      margin-top: 20px;
      width: 100%;
      height: 14px;
       
      .item {
        float: left;
        width: 42px;
        height: 14px;
        margin-left: 55px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 14px;
        &.ite-all {
          margin-left: 0;
        }
        &.router-link-active{
          color: gold ;
          // border-bottom: 2px solid gold ;  
        }
      }
    }
  }
}
</style>
