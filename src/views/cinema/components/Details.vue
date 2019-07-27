<template>
  <div class="Details-main">
    <!-- 头部部分 -->
    <div class="header-main">
      <span @click="$router.go(-1)" class="ico">
         <img src="@/assets/imgs/icons/back.png" alt>
      </span>
      <p>耀莱成龙影城（建业店）</p>
      <span class="icos">
        <img class="star" src="@/assets/imgs/icons/xing.png" alt>
      </span>
    </div>
    <!-- 地址部分 -->
    <div class="header-site">
      <span class="icod">
        <img src="@/assets/imgs/icons/arrrdess.png" alt>
      </span>
      <p class="moves">耀莱成龙影城（建业店）</p>
      <P class="mov">金水区中州大道建业置地</P>
      <span class="icot">
        <img src="@/assets/imgs/icons/arrrig.png" alt>
      </span>
    </div>
    <!-- 轮播部分 -->
    <div class="carousel">
      <swiper
        class="banner-swiper"
        :options="bannerSwiperOptions"
        ref="mySwiper"
        @someSwiperEvent="callback"
      >
        <swiper-slide v-for="m in detailImgs" :key="m.id">
          <img :src="'https://images.weserv.nl/?url='+m.images.small" alt> 
          <p class="movie-names">{{m.title}}</p>
          <p class="idop">{{m.id}}</p>
          <p class="introduce">119分钟/剧情</p>
          <p class="casts">
            演员:
            <span v-for="itm in m.casts" :key="itm.id">{{itm.name}}</span>
          </p>
        </swiper-slide>
      </swiper>
      <!-- 剧情介绍 -->
      <p class="datar">今日12月12号</p>
    </div>
    <!-- 电影列表 -->
    <div class="my-play">
      <ul class="play-ul">
        <li class="play-li">
          <div class="datas" v-for="m in appraise" :key="m.id">
            <p class="times"  >{{m.times}}</p>
            <p class="times">16.14散场</p>
          </div>
          <div class="moved">
            <p class="purc">原版3d</p>
            <p class="purc">2号厅(冠名招商中)</p>
          </div>
          <p class="moneys"  >30.9元</p>
           <a class="buys"   @click="swiperId">购票</a>
        </li>
        <li class="play-li">
          <div class="datas">
            <p class="times">13.60</p>
            <p class="times">16.14散场</p>
          </div>
          <div class="moved">
            <p class="purc">原版3d</p>
            <p class="purc">2号厅(冠名招商中)</p>
          </div>
          <p class="moneys">30.9元</p>
          <a class="buys"   @click="swiperId">购票</a>
        </li>
        <li class="play-li">
          <div class="datas">
            <p class="times">13.60</p>
            <p class="times">16.14散场</p>
          </div>
          <div class="moved">
            <p class="purc">原版3d</p>
            <p class="purc">2号厅(冠名招商中)</p>
          </div>
          <p class="moneys">30.9元</p>
          <a class="buys"   @click="swiperId">购票</a>
        </li>
        <li class="play-li">
          <div class="datas">
            <p class="times">13.60</p>
            <p class="times">16.14散场</p>
          </div>
          <div class="moved">
            <p class="purc">原版3d</p>
            <p class="purc">2号厅(冠名招商中)</p>
          </div>
          <p class="moneys">30.9元</p>
          <a class="buys"   @click="swiperId">购票</a>
          <!-- <a class="buys"  @click="swiperId()">购票</a> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

import "swiper/dist/css/swiper.css";

// 引入组件后需要注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
  import tailsApi from "@/api/tails";
export default {
  name: "Details",
  components: {
    swiper: swiper, //注册组件
    swiperSlide
  },
  data() {
    return {
      activeId:26715636,
      bannerSwiperOptions: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      appraise:[],
      detailImgs: []
    };
  },

  created() {
    Axios.get("http://59.110.138.169/api/douban/movie/in_theaters").then(
      res => {
        this.detailImgs = res.data.data;
      }
    );

     tailsApi .DetailsApi()
        .then(res=>{
          this.appraise=res;
        })
       
  },

  methods: {
    callback() {},
    swiperId(e){
      var price =  e.target.previousElementSibling.innerText 
       this.activeId = document.getElementsByClassName("swiper-slide-active")[0].children[2].innerText
     console.log(this.activeId)
       this.$router.push({
          name: "Seat",
          params: {id:this.activeId,rmb:price}
        });
    
      
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.Details-main {
  padding: 0 $basePadding;
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  background-color: aqua;
  background: url("../../../assets/imgs/movie/reds.png") no-repeat;
  background-size: 376px 323px;
  background-color: #0000;

  .header-main {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 22px;
    p {
      font-size: 16px;
    }
    .ico {
      display: block;
       width: 20px;
       height: 20px;
      img {
         margin-top: 4px;
        display: block;
        width: 10px;
        height: 15px;
      }
    }
    .icos {
      width: 20px;
      height: 18px;
      .star {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.header-site {
  position: relative;
  margin-top: 26px;
  width: 100%;
  height: 40px;
  line-height: 20px;
  .moves {
    text-align: left;
    margin-left: 60px;
    font-size: 16px;
  }
  .mov {
    margin-top: 4px;
    text-align: left;
    margin-left: 60px;
    font-size: 12px;
  }

  .icod {
    float: left;
    img {
      display: block;
      width: 20px;
      height: 20px;
    }
  }
  .icot {
    position: absolute;
    top: 6px;
    right: 10px;
    display: block;
    float: right;
    img {
      display: block;
      width: 16px;
      height: 16px;
    }
  }
}
.carousel {
  //轮播部分
  width: 100%;
  height: 300px;
  margin-top: 10px;
  // background-color: cadetblue;
  .banner-swiper {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background-color: #33363d;
    .swiper-slide {
      width: 200px;
      height: 220px;
      line-height:15px;
      img {
        display: block;
        margin: 20px auto;
        width: 140px;
        height: 188px;
      }
    }
  }
  .movie-names {
    font-size: 18px;
  }
  .introduce {
    margin-top: 6px;
    font-size: 14px;
    color: rgba(266, 266, 266, 0.4);
  }
  .casts {
    margin-top: 4px;
  }

  .datar {
    text-align: left;
    margin-top: 8px;
    color: #fbc34a;
  }
}
.my-play {
  width: 100%;
  .play-ul {
    width: 100%;
    .play-li {
      position: relative;
      margin-top: 6px;
      width: 100%;
      height: 90px;
      background-color: #33363d;
      overflow: hidden;
      .datas {
        width: 80px;
        float: left;
        margin-top: 21px;
        line-height: 20px;
        font-size: 18px;
        .times {
          display: inline-block;
          text-align: left;
          margin-left: 16px;
          font-size: 12px;
        }
      }
      .moved {
        width: 80px;
        float: left;
        margin-top: 21px;
        line-height: 20px;
        font-size: 12px;
        .purc {
          display: inline-block;
          text-align: left;
          // width: 90px;
          margin-left: 26px;
          font-size: 12px;
        }
      }
      .moneys {
        display: inline-block;
        width: 62px;
        height: 26px;
        margin-top: 36px;
        font-size: 17px;
        margin-right: 30px;
      }

      .buys {
        position: absolute;
        top: 30px;
        right: 20px;
        width: 46px;
        height: 26px;
        line-height: 26px;
        display: block;
        font-size: 12px;
        color: aliceblue;
        text-decoration: none;
        background: linear-gradient(left, #f26b86, #f1ac6e);
      }
    }
  }
}
.idop{
  display: none;
}
</style>
