<template>
  <div class="allorder-main">
    <div class="head">
      <!-- <h2>这是全部订单.vue页面</h2>  -->
      <div class="film" v-for="m in somemovies" :key="m.id">
        <span class="tit">
          <p class="p1">万达影院 ></p>
          <p class="p2">已完成</p>
        </span>
        <div class="pice"> 
         <img class="left" :src=" 'https://images.weserv.nl/?url='+m.images.small" alt="">
          <!-- <img class="left" src="@/assets/imgs/main/imgs/profile.png" alt> -->
          <div class="right">
            <p class="name">{{m.title}}</p>
            <p class="num">2张</p>
            <p class="time">{{m.year}}</p>
            <p class="hall">五号厅 5排14座</p>
          </div>
        </div>
        <p class="price">总价: 88元</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allorder",
  data() {
    return {
      movies: [] 
    };
  },
  created() {
    axios
      .get("http://www.bufantec.com/api/douban/movie/in_theaters")
      .then(res => {
        this.movies = res.data.data;
        // this.movies.push(movie);
        console.log( this.movies )
        console.log( this.movies[0].title )
      });

    // 还需要加入时间 价格 之类的
  },
  methods: {},
  computed: {
    somemovies(){
      return this.movies.slice(2,10)
    }
  }
};
</script>

<style lang='scss' scoped>
.allorder-main {
  .head {
    overflow: hidden;
    width: 335px;
    min-height: 200px;
    margin-top: 20px;
   
    .film {
      margin-top: 10px;
      width: 100%;
      height: 161px;
       background-color: #33363D ;
      border-radius: 6px;
      .tit {
        display: block;
        width: 307px;
        height: 20px;
        margin: 0 auto;

        p {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;
          &.p1 {
            float: left;
          }
          &.p2 {
            float: right;
          }
        }
      }
      .pice {
        width: 307px;
        height: 81px;
        margin: 0 auto;

        margin-top: 15px;
        .left {
          float: left;
          width: 70px;
          height: 100%;
        }
        .right {
          overflow: hidden;
          width: 190px;
          height: 100%;

          margin-left: 80px;
          .name {
            margin-top: 16px;
            display: block;
            width: 120px;
            height: 14px;
            float: left;
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
            text-align: left ;
          }
          .num {
            margin-top: 16px;
            display: block;
            width: 28px;
            height: 14px;
            float: right;
            margin-right: 30px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
          }
          .time {
            float: left;
            margin-top: 35px;
            margin-left: -120px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
          }
          .hall {
            float: left;
            margin-top: 25px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
            margin-left: -25px;
          }
        }
      }
      .price {
        width: 100px;
        height: 20px;
        margin-top: 15px;
        float: left;
        text-align: left;
        margin-left: 20px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 12px;
      }
    }
  }
}
</style>
