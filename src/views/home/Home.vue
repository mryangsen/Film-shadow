<template>
  <div class="home-main">
    <div class="header">
      <TopBackBar>
          <template v-slot:img-left>
          <!-- 具名插槽  这里实现相关右上角按钮  默认显示分享
          如需隐藏 设置空  span-->
          <router-link tag ='div' :to="{name:'city'}" class="header-left">
              <span>{{cityName}}</span>
          <img src="@/assets/imgs/home/bottom.png" alt="" class="header-right">
          </router-link>
        </template>
        <router-link tag='input' :to="{name:'Search'}" class="header-search" type="text" placeholder="搜影片，影院，影人"></router-link>
        <template v-slot:img-right>
          <!-- 具名插槽  这里实现相关右上角按钮  默认显示分享
          如需隐藏 设置空  span-->
          <router-link :to="{name:'sign'}"><img src="@/assets/imgs/home/play.png" alt="" class="header-right"></router-link>
          
        </template>
      </TopBackBar>
    </div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide>
          <img src="@/assets/imgs/home/banner-swiper2.png" alt class="banner-swiper">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/imgs/home/banner-swiper.png" alt class="banner-swiper">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/imgs/home/banner-swiper3.png" alt class="banner-swiper">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content">
      <div class="hot-movie">
        <div class="title">
          <span class="left-shu"></span>
          <h1 class="title-text">热映影片</h1>
          <router-link tag='div' class="right" :to="{name:'inTheaters'}">
            全部
            <img src="@/assets/imgs/home/right.png" alt>
          </router-link>
          <swiper :options="swiperOptiontwo" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="item in hotList" :key="item.id" >
              <router-link tag='div' class="banner-swiper" :to="{name:'moveitem',params:{id:item.id}}">
                <img
                  :src="'https://images.weserv.nl/?url='+item.images.medium"
                  alt
                  class="banner-swiper"
                >
                <span class="average">影火虫评分{{item.rating.average}}</span>
              </router-link>
              <p>{{item.title}}</p>
              <router-link tag='p' class="gobuy" :to="{name:'Seat',params:{id:item.id}}" >购票</router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="coming-movie">
        <div class="title">
          <span class="left-shu"></span>
          <h1 class="title-text">即将上映</h1>
          <router-link tag='div' class="right" :to="{name:'comingSoon'}">
            全部
            <img src="@/assets/imgs/home/right.png" alt>
          </router-link>
          <swiper :options="swiperOptionthree" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="item in comingList" :key="item.id">
              <div class="banner-swiper">
                <img
                  :src="'https://images.weserv.nl/?url='+item.images.medium"
                  alt
                  class="banner-swiper"
                >
                <span class="average">影火虫评分{{item.rating.average}}</span>
              </div>
              <p>{{item.title}}</p>
              <p class="year">{{item.year}}</p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="herald">
        <div class="title">
          <span class="left-shu"></span>
          <h1 class="title-text">精选预告</h1>
          <div class="right">
            更多
            <img src="@/assets/imgs/home/right.png" alt>
          </div>
          <swiper :options="swiperOptionfour" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>
              <div class="banner-swiper">
                <img src="@/assets/imgs/home/banner-swiper2.png" alt class="banner-swiper">
              </div>
              <p>《大护法》是一部能够体现反专制、反乌托邦</p>
            </swiper-slide>
            <swiper-slide>
              <div class="banner-swiper">
                <img src="@/assets/imgs/home/banner-swiper.png" alt class="banner-swiper">
              </div>
              <p>《大护法》是一部能够体现反专制、反乌托邦</p>
            </swiper-slide>
            <swiper-slide>
              <div class="banner-swiper">
                <img src="@/assets/imgs/home/banner-swiper3.png" alt class="banner-swiper">
              </div>
              <p>《大护法》是一部能够体现反专制、反乌托邦</p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import TopBackBar from "@/components/TopBackBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    TopBackBar
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 1.2,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination"
        }
        //  slidesPerView: 'auto',
      },
      swiperOptiontwo: {
        slidesPerView: 3.5
      },
      swiperOptionthree: {
        slidesPerView: 2.7
      },
      swiperOptionfour: {
        slidesPerView: 1.2
      },
      hotList: [],
      comingList: []
    };
  },
  methods: {
    callback() {},
    getHotMovies() {
      axios
        .get("http://59.110.138.169/api/douban/movie/in_theaters")
        .then(res => {
          this.hotList = res.data.data;
        });
    },
    getComingMovies(){
      axios
        .get("http://59.110.138.169/api/douban/movie/coming_soon")
        .then(res => {
          console.log(res.data.data)
          this.comingList = res.data.data;
        });
    }
  },
  created() {
    this.getHotMovies();
    this.getComingMovies();
  },
  
  computed:{
    cityName(){
      return this.$store.getters["City/CityName"]
    }
  }
};
</script>

<style lang="scss" >
// 如果需要修改swiper自定义样式的话需要删除style的scoped，否则加不上
.header {
    height: 60px;
    width: 100%;
    overflow: hidden;
  .header-search {
    width: 259px;
    height: 36px;
    border-radius: 18px;
    background: url(~@/assets/imgs/home/search.png) left center no-repeat rgba(51, 54, 61, 1);
    background-size: 17px 17px;
    background-position: 12px 9px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    margin-bottom: 12px;
    margin-top: 12px;
    outline: none;
    border:none;
    font-size: 14px;
    color: #7A7A7A;
    line-height: 36px;
    text-indent: 40px;
  }
  .header-right{
      width: 20px;
      height: 20px;
  }
  .header-left{
      font-size: 14px;
      color:rgba(223,223,223,1);
   
        img{
            width: 12px;
            height: 6px;
        }  
      }
}
.banner {
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
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
        width: 335px;
        height: 145px;
      }
    }
    .swiper-slide:not(.swiper-slide-active) {
      transform: scale(0.8);
    }
    .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
      background: rgba(178, 178, 178, 1);
      border-radius: 2px;
    }
    .swiper-pagination-bullet-active {
      width: 14px;
      height: 3px;
      background: #fff;
    }
  }
}
.content {
  width: 100%;
  // overflow: hidden;
  .hot-movie {
    width: 100%;
    .title {
      width: 100%;
      padding-left: 20px;
      text-align: left;
      position: relative;
      .left-shu {
        position: absolute;
        left: 20px;
        display: block;
        width: 4px;
        height: 17px;
        background: linear-gradient(
          90deg,
          rgba(242, 97, 130, 1) 0%,
          rgba(241, 160, 100, 1) 100%
        );
      }
      .title-text {
        text-indent: 10px;
        font-size: 18px;
      }
      .right {
        position: absolute;
        right: 20px;
        top: 0;
        line-height: 18px;
        img {
          width: 6px;
          height: 10px;
        }
      }
      .swiper-container {
        margin-top: 10px;
        width: 100%;
        .swiper-slide {
          float: left;
          .banner-swiper {
            width: 90px;
            height: 122px;
            margin-bottom: 10px;
            position: relative;
            font-size: 12px;
            .average {
              position: absolute;
              left: 8px;
              bottom: 6px;
              font-size: 9px;
            }
          }
          .gobuy {
            width: 50px;
            height: 22px;
            background: linear-gradient(
              150deg,
              rgba(242, 91, 134, 1) 0%,
              rgba(241, 172, 94, 1) 100%
            );
            box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
            border-radius: 11px;
            text-align: center;
            line-height: 22px;
            font-size: 12px;
            margin-top: 6px;
          }
        }
      }
    }
  }
  .coming-movie {
    margin-top: 30px;
    width: 100%;
    .title {
      width: 100%;
      padding-left: 20px;
      text-align: left;
      position: relative;
      .left-shu {
        position: absolute;
        left: 20px;
        display: block;
        width: 4px;
        height: 17px;
        background: linear-gradient(
          90deg,
          rgba(242, 97, 130, 1) 0%,
          rgba(241, 160, 100, 1) 100%
        );
      }
      .title-text {
        text-indent: 10px;
        font-size: 18px;
      }
      .right {
        position: absolute;
        right: 20px;
        top: 0;
        line-height: 18px;
        img {
          width: 6px;
          height: 10px;
        }
      }
      .swiper-container {
        margin-top: 10px;
        width: 100%;
        .swiper-slide {
          float: left;
          .banner-swiper {
            width: 120px;
            height: 162px;
            margin-bottom: 10px;
            position: relative;
            font-size: 12px;
            .average {
              position: absolute;
              left: 8px;
              bottom: 6px;
              font-size: 9px;
            }
          }
          .year {
            margin-top: 5px;
            color: rgba(223, 223, 223, 1);
          }
        }
      }
    }
  }
  .herald {
    margin-top: 30px;
    width: 100%;
    margin-bottom: 115px;
    .title {
      width: 100%;
      padding-left: 20px;
      text-align: left;
      position: relative;
      .left-shu {
        position: absolute;
        left: 20px;
        display: block;
        width: 4px;
        height: 17px;
        background: linear-gradient(
          90deg,
          rgba(242, 97, 130, 1) 0%,
          rgba(241, 160, 100, 1) 100%
        );
      }
      .title-text {
        text-indent: 10px;
        font-size: 18px;
      }
      .right {
        position: absolute;
        right: 20px;
        top: 0;
        line-height: 18px;
        img {
          width: 6px;
          height: 10px;
        }
      }
      .swiper-container {
        margin-top: 10px;
        width: 100%;

        .swiper-slide {
          float: left;

          .banner-swiper {
            width: 295px;
            height: 162px;
            margin-bottom: 10px;
            position: relative;
            font-size: 12px;

            .average {
              position: absolute;
              left: 8px;
              bottom: 6px;
              font-size: 9px;
            }
          }
        }
      }
    }
  }
}
</style>


