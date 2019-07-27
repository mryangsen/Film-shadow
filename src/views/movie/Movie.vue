<template>
  <div class="movie-main">
    <div class="header-bar">
      <div class="header">
        <div class="head-place" icon="back" >
          <router-link :to="{name:'city'}" tag="div">
            郑州
          <img :src="require('@/assets/imgs/icons/dow.png')" alt class="head-dow" >
          </router-link>
          
          <router-link tag = 'img' :to="{name:'Search'}" :src="require('@/assets/imgs/icons/search.svg')" alt class="head-search"> </router-link>
        </div>

        <div class="head-nav">
          <!-- <div :class="['nav-list','fl',{'active': type === 1}]" @click="getMovieList(1)">正在热映</div> -->
          <router-link
            :class="['nav-list','fl',{'active': isColor == true}]"
            to="inTheaters"
            @click.native="active(true)">正在热映</router-link>
          <router-link
            :class="['nav-list','fl',{'active': isColor == false}]"
            to="comingSoon"    @click.native="active(false)"
            >即将上映</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
      loading: true,
      movUrl: "https://images.weserv.nl/?url=",
      type: 1,
      isColor:true
    };
  },
  created() {
    // this.getMovieList();
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
    loadMore() {
      this.loading = false;
    },
    getMovieList(type) {
      this.type = type;
      if (this.type === 1) {
        this.$router.push({
          name: "inTheaters",
          params: {}
        });
      } else if (this.type === 2) {
        console.log("这是top250");
        this.$router.push({
          name: "comingSoon",
          params: {}
        });
      }
    },
    active(flag){
      this.isColor = flag
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
        .head-search {
        width: 17px;
        height: 17px;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -8.5px;
      }
      .head-dow {
        width: 17px;
        height: 17px;
        position: absolute;
        top: 50%;
        margin-top: -8.5px;
        left: 50px;
      }
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
          display: block;
          color: #969393;
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
          color: #fff;
        }
      }
    }
  }
  .banner {
    .movie-lists {
      // width: 100vh;
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
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          line-height: 25px;
          text-align: center;
        }
      }
    }
  }
}
</style>
