<template>
  <div class="Movie-main">
    <img class="banner-imgs" src="@/assets/imgs/kind/banner.png" alt>
    <div class="headr">
      <img @click="$router.go(-1)" class="arr-left" src="@/assets/imgs/icons/arr-left.png" alt>
      <img class="arr-right" src="@/assets/imgs/icons/share.png" alt>
    </div>
    <div class="banner">
      <div class="banner-img">
        <img
          class="banner-img-1"
          :src="'https://images.weserv.nl/?url='+intheatersList.images.large"
          alt
        >
        <img class="banner-img-2" src="@/assets/imgs/slices/dianji.png" alt @click="modalhlien">
      </div>
      <div class="banner-title">
        <p>{{intheatersList.title}}</p>
        <p class="ename">Pride & Prejudice</p>
        <p class="string">{{intheatersList.rating.average}}</p>
        <div class="banner-icon">
          <img src="@/assets/imgs/icons/comment.png" alt>
          <img src="@/assets/imgs/icons/string.png" alt>
        </div>
      </div>
    </div>
    <div class="container">
      <div @click="listshow" :class="{active:show==1}" class="jianjie">
        <p>简介</p>
      </div>
      <router-link
        tag="div"
        :to="{name:'review',params:{}}"
        @click="filmshow"
        :class="{active:show==2}"
        class="film"
      >
        <p>影评</p>
      </router-link>
      <div @click="discusshow" :class="{active:show==3}">
        <p>讨论</p>
      </div>
      <div @click="Moreshow" :class="{active:show==4}">
        <p>更多</p>
      </div>
    </div>
    <p class="movie-brief">
      伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…
      <i
        class="movie-more"
      >查看更多></i>
    </p>
    <div class="subnav">
      <p class="subnav-title">演职人员</p>
      <swiper
        class="swiper-banner"
        :options="bannerswiperOption"
        ref="mySwipers"
        @someSwiperEvent="callback"
      >
        <swiper-slide v-for="m in intheatersList.casts" :key="m.id">
          <router-link
            tag="img"
            :to="{name:'detail',query:{name:m.name,img:'https://images.weserv.nl/?url='+ m.avatars.large},params:{id:m.id}}"
            :src="'https://images.weserv.nl/?url='+ m.avatars.large"
            class="castsImg"
          ></router-link>
          <p>{{m.name}}</p>
          <!-- <p>{{m.ename}}</p> -->
        </swiper-slide>
      </swiper>
      <p class="performer">全部32位演员</p>
    </div>
    <div class="subnav">
      <p class="subnav-title">视频</p>
      <swiper
        class="swiper-banner"
        :options="bannerswiper2Option"
        ref="mySwipers"
        @someSwiperEvent="callback"
      >
        <swiper-slide v-for="m in imgs" :key="m.id">
          <video
            class="movie"
            :poster="m.poster"
            style="object-fit:fill"
            controlslist="nodownload"
            :src="m.movie"
            controls="controls"
          ></video>
          <p>{{m.text}}</p>
        </swiper-slide>
      </swiper>
      <p class="performer">全部10个视频</p>
    </div>
    <div class="subnav">
      <p class="subnav-title">票房</p>
      <div class="box-office">
        <div class="box-data">
          <p class="box-data-title">2</p>
          <p>今日票房排行</p>
        </div>
        <div class="box-data">
          <p class="box-data-title">暂无</p>
          <p>首周票房（万）</p>
        </div>
        <div class="box-data">
          <p class="box-data-title">2660</p>
          <p>今日票房排行</p>
        </div>
      </div>
      <router-link tag="p" :to="{name:'office',params:{}}" class="performer">票房详情</router-link>
    </div>
    <div class="footer">
      <router-link tag="p" :to="{name:'Seat'}">特惠选座</router-link>
    </div>
    <div class="mymodal clearfix" v-show="showModal==true">
      <img @click="closemodal" class="close" src="@/assets/imgs/icons/chahao.png" alt>
      <div class="modal">
        <iframe
          class="modal-movie"
          src="https://www.bilibili.com/video/av49023234/"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import MiXin from "@/assets/api/data";
import movieApi from "@/assets/api/detail";
export default {
  name: "Movie.vue",
  mixins: [MiXin],
  data() {
    return {
      starStar: 0,
      moviedetail: [],
      show: 1,
      showModal: false,
      bannerswiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      bannerswiper2Option: {
        slidesPerView: 1.2
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.getMovie();
   
  },
  methods: {
    listshow() {
      this.show = 1;
    },
    filmshow() {
      this.show = 2;
    },
    discusshow() {
      this.show = 3;
    },
    Moreshow() {
      this.show = 4;
    },
    modalhlien() {
      this.showModal = true;
    },
    closemodal() {
      this.showModal = false;
    },
    callback() {},
    getMovie() {
      axios
        .get(movieApi.in_theaters)
        .then(res => (this.moviedetail = res.data.data));
    }
  },
  computed: {
    intheatersList() {
      console.log(this.$route.params.id);

      if(this.moviedetail.length>0){
        // console.log('klasdjfsdf',this.moviedetail);
        return this.moviedetail.find(item => item.id == this.$route.params.id); 
      }else{
        // alert('ff')
        return {
          images:{},
          rating:{}
        }
      }

      // if (this.moviedetail) {
      //   return this.moviedetail.find(item => item.id == this.$route.params.id);
      // } else {
      //   var obj = {
          
      //     images: { large: "@/assets/imgs/icons/123.png" },
      //     rating: { average: "" },
      //     title: "",
      //     casts: { avatars: { large: "" }, name: "" }
      //   };
      //   return obj;
      // }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
 .Movie-main {
  position: relative;
  
  .banner-imgs {
     width: 100%;
    z-index: 999;
  }
  .headr {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 $basePadding;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .arr-left {
      width: 13px;
      height: 19px;
    }
    .arr-right {
      width: 19px;
      height: 19px;
    }
  }
  .banner {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    text-align: left;
    .banner-img {
      .banner-img-1 {
        width: 96px;
        height: 131px;
      }
      .banner-img-2 {
        margin-left: 100px;
      }
    }
    .banner-title {
      font-size: 20px;
      line-height: 30px;
      .ename {
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
      }
      .string {
        color: #fbc34a;
        font-size: 30px;
        letter-spacing: 2px;
      }
      .banner-icon {
        position: absolute;
        bottom: 0;
        right: 10px;
        img{
          margin-left: 15px;
        }
      }
    }
  }
  .container {
    margin-top: 100px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    overflow: hidden;
    .jianjie {
      margin-left: 0;
    }
    div {
      float: left;
      margin-left: 27px;
      font-size: 14px;
      color: #6e7176;
    }
    .active {
      color: #ffff;
      border-bottom: 3px solid pink;
    }
  }
  .movie-brief {
    margin-top: 10px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    color: #4d5156;
    .movie-more {
      font-size: 14px;
      color: #fbc34a;
    }
  }
  .subnav {
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    margin-top: 30px;
    .subnav-title {
      font-size: 18px;
      text-align: left;
    }
    .swiper-banner {
      margin-top: 15px;
      text-align: left;
      font-size: 12px;
      color: #898b8f;
      line-height: 18px;
      .movie{
        width: 250px;
        height: 150px;
      }
      .castsImg{
        width: 100px;
        height: 140px;
      }
    }
    .performer {
      margin-top: 15px;
      font-size: 14px;
      color: #fbc34a;
    }
    .box-office {
      margin-top: 17px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: #6e7176;
      .box-data {
        line-height: 20px;
        .box-data-title {
          font-size: 18px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .footer {
    margin-top: 22px;
    width: 100%;
    height: 44px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 44px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
  }

.mymodal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, .6);
    overflow: hidden;
    .close {
      position: absolute;
      top: 50px;
      right: 20px;
    }
    .modal {
      width: 300px;
      height: 200px;
      background-color: green;
      margin: 100px auto;
       .modal-movie{
        width: 100%;
        height: 100%;
      }
    }
    
  }
 }
</style>
