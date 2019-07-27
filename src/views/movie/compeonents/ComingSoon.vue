<template>
  <div class="movie-main">
    <div class="banner-title">
      <p class="banner-title-adv">热门预告片</p>
      <div class="my-swp">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <swiper-slide>
            <div class="my-swp-box">
              <videoPlayer
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
              ></videoPlayer>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="my-swp-box">
              <videoPlayer
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="catPlayerOptions"
              ></videoPlayer>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="my-swp-box">
              <videoPlayer
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="outerPlayerOptions"
              ></videoPlayer>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <p class="banner-title-adv">即将上映</p>
      <div class="you-swp">
        <swiper :options="youSwiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <swiper-slide>
            <div :class="['my-swp-box', {'active':flage===1}]" @click="sereen1994(1)">1994</div>
          </swiper-slide>
          <swiper-slide>
            <div :class="['my-swp-box', {'active':flage===2}]" @click="sereen1994(2)">2014</div>
          </swiper-slide>
          <swiper-slide>
            <div :class="['my-swp-box', {'active':flage===3}]" @click="sereen1994(3)">2008</div>
          </swiper-slide>
          <swiper-slide>
            <div :class="['my-swp-box', {'active':flage===4}]" @click="sereen1994(4)">1997</div>
          </swiper-slide>
          <swiper-slide>
            <div :class="['my-swp-box', {'active':flage===5}]" @click="sereen1994(5)">1995</div>
          </swiper-slide>
          <swiper-slide>
            <div :class="['my-swp-box', {'active':flage===6}]" @click="sereen1994(6)">2010</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="banner-bar">
      <div class="banner">
        <div class="circle" v-if="TopLoading"></div>
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="2"
          class="movie-lists"
        >
          <li v-for="movie in movieListCom" :key="movie.id" class="movieitem">
            <div class="movie-item-imgs fl">
              <img :src="movUrl+movie.images.medium" alt class="item-img">
              <img :src="require('@/assets/imgs/icons/play.png')" alt class="movie-play-icon">
            </div>
            <div class="movie-deta-list fl">
              <p class="movie-deta-item movie-name">{{movie.title}} &nbsp; ({{movie.year}})</p>
              <p class="movie-deta-item movie-grade">
                想看&nbsp;
                <span class="movie-grade-color">999+</span>
              </p>
              <p class="movie-deta-item movie-pros movie-director">导演:{{movie.directorsStr}}</p>
              <p class="movie-deta-item movie-pros movie-actor">演员:{{movie.castsStr}}</p>
            </div>
            <div class="movie-go fl">预售</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import doubanApi from "@/api/doubanApi";
import "swiper/dist/css/swiper.css";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { filter } from "minimatch";
import { videoPlayer } from "vue-video-player";
export default {
  name: "Movie",
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: require("@/assets/video/xingji.mp4")
            // "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的视频地址（必填）
          }
        ],
        // poster: "swiper-1.png", //你的封面地址
        poster: require("@/assets/imgs/movie/xingji.webp"), //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      catPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: require("@/assets/video/longmao.mp4")
            // "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的视频地址（必填）
          }
        ],
        // poster: "swiper-1.png", //你的封面地址
        poster: require("@/assets/imgs/movie/longmao.webp"), //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      outerPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: require("@/assets/video/taikongmanyou.mp4")
            // "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的视频地址（必填）
          }
        ],
        // poster: "swiper-1.png", //你的封面地址
        poster: require("@/assets/imgs/movie/taikongmanyou.webp"), //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      TopLoading: false,
      swiperOption: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        on: {
          // 使用es6的箭头函数，使this指向vue对象
          slideChange: () => {
            // 通过$refs获取对应的swiper对象
            // let swiper = this.$refs.mySwiper.swiper;
            // let i = swiper.activeIndex;
            // let flag = this.imgList[i];
            // location.href = flag.url;
            console.log("触发轮播");
            // this.playerOptions.player =false
          }
        }
      },
      youSwiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 1,
        freeMode: true
      },
      movieList: [],
      loading: true,
      movUrl: "https://images.weserv.nl/?url=",
      type: 1,
      flage: 0,
      data1: [],
      data2: []
    };
  },
  components: {
    swiper,
    swiperSlide,
    videoPlayer
  },
  created() {
    this.getMovieList();
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    movieListCom() {
      //   console.log(this.movieList)

      var rs = this.movieList.map(item => {
        item.directorsStr = item.directors.reduce((a, b) => {
          var str = a + "," + b.name;
          return str;
        }, "");
        item.directorsStr = item.directorsStr.substr(1);

        item.castsStr = item.casts.reduce((a, b) => {
          var str = a + "," + b.name;
          return str;
        }, "");
        item.castsStr = item.castsStr.substr(1);

        item.coverImg = "https://images.weserv.nl/?url=" + item.images.small;
        return item;
      });
      switch (this.flage) {
        case 1:
          // filter 过滤数组,返回符合条件的数组
          return this.movieList.filter(item => item.year == "1994");
          break;
        case 2:
          return this.movieList.filter(item => item.year == "2014");
          break;
        case 3:
          return this.movieList.filter(item => item.year == "2008");
          break;
        case 4:
          return this.movieList.filter(item => item.year == "1997");
          break;
        case 5:
          return this.movieList.filter(item => item.year == "1995");
          break;
        case 6:
          return this.movieList.filter(item => item.year == "2010");
          break;
        default:
          return this.movieList;
      }
    }
  },
  methods: {
    slideChange: function() {
      alert("改变了");
    },
    onPlayerPlay(player) {
      // alert("play");
      console.log("开始播放");
    },
    onPlayerPause(player) {
      console.log("暂停播放");
    },
    sereen1994(flage) {
      if (this.flage == flage) {
        this.flage = 0;
      } else {
        this.flage = flage;
      }
      console.log(this.flage);
    },
    callback2() {},
    callback() {
      alert("改变了");
    },
    loadMore() {
      this.loading = false;
    },
    getMovieList() {
      this.TopLoading = true;
      axios
        .get(doubanApi.top250)
        .then(res => {
          this.movieList = res.data.data;
          this.TopLoading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";

.movie-main {
  text-align: left;
  .banner-title {
    .banner-title-adv {
      font-size: 18px;
      font-weight: 500;
      color: rgba(223, 223, 223, 1);
      line-height: 18px;
      margin-top: 30px;
      margin-left: 20px;
      margin-bottom: 20px;
    }

    .my-swp {
      height: 185px;
      .my-swp-box {
        height: 185px;
        width: 318px;
        // background-color: pink;
        ::v-deep .vjs-poster {
          height: 212px;
        }
      }
    }
    .you-swp {
      .my-swp-box {
        line-height: 24px;
        text-align: center;
        width: 82px;
        height: 26px;
        border-radius: 13px;
        border: 1px solid rgba(151, 151, 151, 1);
      }
      .active {
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
      }
    }
  }


  .banner {
    
  .circle {
    width: 60px;
    height: 60px;
    border: 5px solid #ccc;
    border-bottom: 5px solid #000;
    border-radius: 50%;
    margin: 50px auto;
    animation: mini 1.5s infinite linear;
    // position: fixed;
    // top: 50%;
    // left: 50%;
    z-index: 999;
    // margin-left: -30px;
    // margin-top: -30px;
  }

  @keyframes mini {
    0% {
    }

    100% {
      transform: rotate(360deg);
    }
  }
    .movie-lists {
      width: $baseCenterWidth;
      padding: 0 $basePadding;
      .movieitem {
        background-color: #33363d;
        margin: 0 auto;
        width: 335px;
        height: 144px;
        margin: 25px 0;
        position: relative;
        .movie-item-imgs {
          position: absolute;
          bottom: 0;
          left: 0;
          .item-img {
            width: 105px;
            height: 156px;
          }
          .movie-play-icon {
            position: absolute;
            top: 53px;
            left: 28px;
          }
        }
        .movie-deta-list {
          margin-left: 113px;
          .movie-name {
            margin-top: 15px;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 16px;
          }
          .movie-grade {
            margin: 12px 0;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
            .movie-grade-color {
              color: yellow;
            }
          }
          .movie-pros {
            font-size: 12px;
            font-weight: 400;
            color: #000;
            line-height: 20px;
            white-space: nowrap;
            width: 112px;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .movie-go {
          position: absolute;
          top: 50%;
          margin-top: -17.5px;
          right: 14px;
          width: 54px;
          height: 25px;
          background: linear-gradient(
            150deg,
            rgba(98,75,163,1) 0%,
            rgba(203,68,152,1) 100%
          );
          line-height: 25px;
          text-align: center;
        }
      }
    }
  }
}
</style>
