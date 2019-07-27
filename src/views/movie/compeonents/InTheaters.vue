<template>
  <div class="movie-main">
    <div class="banner-bar">
      <div class="circle" v-if="TopLoading"></div>
      <div class="banner">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="isMoreLoading"
          infinite-scroll-distance="10"
          :infinite-scroll-immediate-check="true"
          class="movie-lists"
        >
          <li v-for="movie in movieListCom" :key="movie.id" class="movieitem">
            <div class="movie-item-imgs fl"  @click="setMovie(movie.id)">
              <img :src="movUrl+movie.images.medium" alt class="item-img">
              <img :src="require('@/assets/imgs/icons/play.png')" alt class="movie-play-icon">
            </div>
            <div class="movie-deta-list fl">
              <p class="movie-deta-item movie-name">{{movie.title}} &nbsp; ({{movie.year}})</p>
              <p class="movie-deta-item movie-grade">
                萤火虫评分&nbsp;
                <span class="movie-grade-color">{{movie.rating.average}}</span>
              </p>
              <p class="movie-deta-item movie-pros movie-director">导演:{{movie.directorsStr}}</p>
              <p class="movie-deta-item movie-pros movie-actor">演员:{{movie.castsStr}}</p>
            </div>
            <router-link tag="div" class="movie-go fl" :to="{name:'Seat',params:{id:movie.id}}">购票</router-link>
          </li>
        </ul>
        <div class="loading-box" v-if="isLoading">
          <div class="dou1"></div>
          <div class="dou2"></div>
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
        </div>
        <div class="no-more" v-if="noMore">没有更多的了</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import doubanApi from "@/api/doubanApi";
export default {
  name: "Movie",
  data() {
    return {
      movieList: [],
      moreList: [],
      movUrl: "https://images.weserv.nl/?url=",
      type: 1,
      i: 0,
      isMoreLoading: false, // 加载更多中
      isLoading: false,
      noMore: false,
      TopLoading: false
    };
  },
  created() {
    this.getMovieList();
  },
  computed: {
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
      return rs;
    }
  },
  methods: {
    setMovie(itemid) {
      this.$router.push({
          name: "moveitem",
          params: {id:itemid}
        });
    },
    loadMore() {
      // this.loading = false;
      this.isMoreLoading = true; //加载更多
      this.isLoading = true;
      this.noMore = false;
      setTimeout(() => {
        var thte = this;
        axios.get(doubanApi.in_theaters).then(res => {
          console.log(res.data);
          //每次获取五个
          thte.i++;
          thte.moreList = res.data.data.slice(thte.i * 5, (thte.i + 1) * 5);
          //数据获取完之后就显示没有数据
          if (thte.moreList.length == 0) {
            thte.noMore = true;
            thte.isLoading = false;
            //没有数据之后,停止无限滚动,不然到底部会有bug
            thte.isMoreLoading = true;
          } else {
            //吧数据Push到主数组里,然后让loading消失
            thte.isLoading = false;
            thte.moreList.forEach(function(item) {
              thte.movieList.push(item);
            });
          }
        });

        this.noMore = false;
        this.isMoreLoading = false;
      }, 2000);
    },
    getMovieList() {
      let i = 0;
      this.TopLoading = true;
      axios
        .get(doubanApi.in_theaters)
        .then(res => {
          this.movieList = res.data.data.slice(i * 5, (i + 1) * 5);
          //吧数组传到vux
          // this.$store.commit("movie/insMov", res.data.data);
          console.log(this.movieList);
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
  .header-bar {
    background: #33363d;
    .header {
      padding: 0 $basePadding;
      margin: 0 auto;
      height: 44px;
      width: $baseCenterWidth;
      line-height: 44px;
      position: relative;
      .head-place {
        font-size: 14px;
        color: #dfdfdf;
      }
      .head-nav {
        height: 35px;
        width: 169px;
        position: absolute;
        top: 50%;
        margin-top: -17.5px;
        left: 50%;
        margin-left: -84.5px;
        border-radius: 6px 5px 5px 6px;
        border: 1px solid #f2697f;
        .nav-list {
          border-radius: 6px 5px 5px 6px;

          line-height: 33px;
          width: 50%;
          height: 33px;
          text-align: center;
        }
        .nav-list.active {
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
        }
      }
    }
  }
  .circle {
    width: 60px;
    height: 60px;
    border: 5px solid #ccc;
    border-bottom: 5px solid #000;
    border-radius: 50%;
    // margin: 50px auto;
    animation: mini 1.5s infinite linear;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    margin-left: -30px;
    margin-top: -30px;

  }

  @keyframes mini {
    0% {
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .banner {
    .movie-lists {
      // overflow-y:auto;
      overflow: hidden;
      // width: 100vh;
      height: 100%;
      // overflow-y: auto;
      width: $baseCenterWidth;
      padding: 0 $basePadding;
      .movieitem {
        background-color: #33363d;
        margin: 0 auto;
        width: 335px;
        height: 144px;
        margin: 25px 0;
        position: relative;
        border-radius: 5px;
        color: #fff;
        .movie-item-imgs {
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          .item-img {
            width: 105px;
              height: 100%;
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
            color: #fff;
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
          right: 25px;
          width: 54px;
          height: 25px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          line-height: 25px;
          text-align: center;
        }
      }
    }
    .loading-box {
      width: 150px;
      height: 55px;
      // background-color: #ed5565;
      // margin: 0 auto;
      position: relative;
      .dot {
        width: 10px;
        height: 10px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        left: 100px;
      }
      .dot1 {
        animation: xiaodoudou 1s 0.7s linear infinite;
      }
      .dot2 {
        animation: xiaodoudou 1s 0.4s linear infinite;
      }
      .dot3 {
        animation: xiaodoudou 1s 0.1s linear infinite;
      }
      .dou1,
      .dou2 {
        width: 0;
        height: 0;
        /* transparent  边框或者背景透明,可以看到被挡住的元素 */
        border-right: 25px solid transparent;
        border-top: 25px solid #fff;
        border-left: 25px solid #fff;
        border-bottom: 25px solid #fff;
        border-radius: 25px;
        top: 0;
        left: 0;
        z-index: 1;
        position: absolute;
      }
      .dou1 {
        animation: douup 0.4s infinite linear;
      }
      .dou2 {
        animation: douup2 0.4s infinite linear;
      }
      @keyframes douup {
        0% {
          transform: rotate(270deg);
        }
        50% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(270deg);
        }
      }
      @keyframes douup2 {
        0% {
          transform: rotate(90deg);
        }
        50% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(90deg);
        }
      }
      @keyframes xiaodoudou {
        60% {
          opacity: 0.3;
        }
        100% {
          transform: translate(-100px);
        }
      }
    }
    .no-more {
      font-size: 25px;
      color: #fff;
    }
  }
}
</style>
