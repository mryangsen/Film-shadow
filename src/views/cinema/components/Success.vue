<!--  -->
<template>
<div class='success-main'>
    <div class="header">
      <img src="@/assets/imgs/icons/arr-left.png" alt class="icons icons-serch" @click="$router.go(-1)">
    </div>
    <div class="banner">
        <img src="@/assets/imgs/icons/gou.png" alt="">
        <div class="list success">恭喜你支付成功</div>
        <router-link tag='div' class="list look-order" :to="{name:'finally'}">查看我的订单</router-link>
        <router-link tag='div' to="/home" class="list back">返回首页</router-link>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name:"success",
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
created(){
    this.clearBuyGoods()
},
methods: {
clearBuyGoods(){
    //点击立即购买就购买清空数组，但是如果是购物车进入购买的话需要购物车也清空，立即购买直接清空这个数组就可以了
     this.$store.dispatch("Buy/clearBuyGoods")
}
},
}
</script>
<style lang='scss' scoped>
.header{
     position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 20px;
  text-align: center;
  height: 40px;
  line-height: 40px;
 
  z-index: 9999;
  .icons {
      width: 11px;
      height: 18px;
      position: absolute;
      display: block;
      left: 16px;
      top: 10px;
    }
}
.banner{
    width: 60%;
    margin: 50% auto;
    .list{
        width: 100%;
        height: 60px;
        border-radius: 5px;
        font-size: 20px;
        text-align: center;
        line-height: 60px;
        margin-top: 30px;
        &.back{
          border: 1px solid #E5E5E5;
        }
        &.look-order{
            color: #fff;
            background-color: #1C4B47;
        }
    }
}
</style>