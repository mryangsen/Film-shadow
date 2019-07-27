<!--  -->
<template>
<div class='sign-main'>
<TopBackBar><span>签到</span></TopBackBar>
   <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide class="myslide">
          <img src="@/assets/imgs/home/sign3.png" alt class="banner-swiper">
        </swiper-slide>
        <swiper-slide  class="myslide">
          <img src="@/assets/imgs/home/sign2.png" alt class="banner-swiper">
        </swiper-slide>
        <swiper-slide  class="myslide">
          <img src="@/assets/imgs/home/sign3.png" alt class="banner-swiper">
        </swiper-slide>
      </swiper>
    </div>
    <ul class="sign-nav">
        <li class="sign-list"><img src="@/assets/imgs/home/signlist1.png" alt=""></li>
        <li class="sign-list"><img src="@/assets/imgs/home/signlist2.png" alt=""></li>
        <li class="sign-list"><img src="@/assets/imgs/home/signlist3.png" alt=""></li>
        <li class="sign-list"><img src="@/assets/imgs/home/signlist4.png" alt=""></li>
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TopBackBar from "@/components/TopBackBar";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
//import引入的组件需要注入到对象中才能使用
name:'sign',
components: {
    swiper,
    swiperSlide,
    TopBackBar
},
data() {
//这里存放数据
return {
 swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 1.25,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination"
        }
        //  slidesPerView: 'auto',
      },
};
},
methods: {
    callback(){}
},
}
</script>
<style lang='scss' scoped>
.banner {
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
     background: none;
    .myslide.swiper-slide {
        background: none;
      text-align: center;
      font-size: 18px;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      .banner-swiper {
        width: 330px;
        height: 500px;
      }
    }
    .swiper-slide:not(.swiper-slide-active) {
      transform: scale(0.8);
    }
   
  }
}
.sign-nav{
    width:250px;
    margin: 0 auto;
    display: flex;
 justify-content: space-between;
 align-items: center;
    .sign-list{
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background:rgba(51,54,61,1);
        img{
            margin-top: 10px;
            width: 20px;
            height: 20px;
        }
    }
}
</style>