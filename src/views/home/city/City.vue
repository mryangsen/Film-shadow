<!--  -->
<template>
  <div class="city-main">
    <div class="header">
      <span class="close" @click="$router.go(-1)">关闭</span>
      <div class="header-title">选择城市</div>
    </div>
    <TopBackBar>
      <template v-slot:img-left>
        <!-- 具名插槽  这里实现相关右上角按钮  默认显示分享
        如需隐藏 设置空  span-->
      </template>
      <input class="header-search" type="text" placeholder="搜影片，影院，影人">
      <template v-slot:img-right>
        <!-- 具名插槽  这里实现相关右上角按钮  默认显示分享
        如需隐藏 设置空  span-->
       <span @click = "$router.go(-1)">取消</span> 
      </template>
    </TopBackBar>
      <CityE></CityE>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TopBackBar from "@/components/TopBackBar";
import axios from "axios";
import CityE from "./components/CityE"
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "city",
  components: {
    TopBackBar,
    CityE
  },
  data() {
    //这里存放数据
    return {
     
    };
  },
  methods: {
    
    
  },
  created() {
    
}
};
</script>
<style lang='scss' scoped>

.header {
  width: 100%;
  height: 60px;
  position: relative;
  
  .header-title {
    font-size: 18px;
    text-align: center;
    line-height: 60px;
  }
  

  .close {
    font-size: 16px;
    color: rgba(247, 247, 247, 1);
    position: absolute;
    left: 20px;
    line-height: 60px;
  }
}
.header-search {
    width: 259px;
    height: 36px;
    border-radius: 18px;
    background: url(~@/assets/imgs/home/search.png) left center no-repeat
      rgba(51, 54, 61, 1);
    background-size: 17px 17px;
    background-position: 12px 9px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    margin-bottom: 12px;
    margin-top: 12px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #7a7a7a;
    line-height: 36px;
    text-indent: 40px;
  }


</style>