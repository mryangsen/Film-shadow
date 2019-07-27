<template>
  <div class="buy-main">
    <div class="movie-banner">
      <span class="list-1">试试搜索影片</span>
      <img :src="require('@/assets/imgs/icons/go.png')" alt class="more">

      <span class="list-2">万达影城</span>
      <img :src="require('@/assets/imgs/icons/go.png')" alt class="more-1">
      <img :src="require('@/assets/imgs/icons/place.png')" alt class="place">

      <span class="list-3">5月9号</span>
      <span class="time">1:34pm</span>
      <img :src="require('@/assets/imgs/icons/go.png')" alt class="more-2">
      <span class="much">更多场次</span>

      <div class="pick" @click="ac">
        <img v-show="ad==true" :src="require('@/assets/imgs/icons/seek.png')" alt class="piao">
      </div>
      <span class="seek">特惠票</span>

      <div @click="ak" class="like2"></div>
      <div class="right">
        <img v-show="ck==false" :src="require('@/assets/imgs/icons/seek.png')" alt class="sest">
      </div>
      <span class="seep">推荐座位</span>
 
      <router-link tag="button" class="btn" :to="{name:'Details'}">购票</router-link>
      <p class="history">
        一条狗的使命&nbsp; 我不是药神 &nbsp;
        <span>清除历史</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buy",

  data() {
    return {
      ad: false,
      ck: false
    };
  },

  methods: {
    ak() {
      if (this.ck == true) {
        this.ck = false;
      } else {
        this.ck = true;
      }
    },
    ac() {
      if (this.ad == false) {
        this.ad = true;
      } else {
        this.ad = false;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.buy-main {
  .movie-banner {
    position: relative;
    width: 336px;
    height: 300px;
    background-color: #33363d;
    margin: 0 20px;
    .list-1 {
      position: absolute;
      left: 17px;
      top: 22px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #949699;
      line-height: 17px;
    }
    .more {
      position: absolute;
      right: 83px;
      top: 22px;
    }
    .list-2 {
      position: absolute;
      left: 17px;
      top: 59px;
      width: 64px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #d4d5d6;
      line-height: 22px;
    }
    .more-1 {
      position: absolute;
      right: 83px;
      top: 59px;
    }
    .place {
      position: absolute;
      right: 33px;
      top: 62px;
    }
    .list-3 {
      position: absolute;
      left: 17px;
      top: 101px;
      width: 64px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #f1f1f2;
      line-height: 22px;
    }
    .time {
      position: absolute;
      left: 79px;
      top: 105px;
      width: 40px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #eff0f0;
      line-height: 17px;
    }
    .much {
      position: absolute;
      right: 33px;
      top: 101px;
      color: #bcbdbf;
      font-size: 12px;
    }
    .more-2 {
      position: absolute;
      right: 83px;
      top: 101px;
    }
    .pick {
      position: absolute;
      top: 149px;
      left: 19px;
      width: 17px;
      height: 17px;
      border: 1px solid #979797;
      .piao {
        width: 18px;
        height: 18px;
      }
    }
    .seek {
      position: absolute;
      left: 43px;
      top: 149px;
      font-size: 12px;
      font-weight: 400;
      color: #cbccce;
      line-height: 17px;
    }
    .sest {
      position: absolute;
      top: 148px;
      right: 75px;
      width: 18px;
      height: 18px;
      // border: 1px solid #979797;
    }

    .seep {
      position: absolute;
      right: 17px;
      top: 149px;
      font-size: 12px;
      font-weight: 400;
      color: #cbccce;
      line-height: 17px;
    }

    .like2 {
      position: absolute;
      right: 75px;
      top: 148px;
      width: 17px;
      height: 17px;
      z-index: 999;
      // opacity: 0;
      border: 1px solid #979797;
    }
    .btn {
      margin-top: 196px;
      width: 302px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      font-size: 18px;
      color: #ffffff;
    }
    .history {
      margin-top: 25px;
      margin-right: 120px;
      font-size: 12px;
      color: #949699;
    }
  }
}
</style>
