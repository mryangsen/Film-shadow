<template>
  <div class="movie-main">
    <div class="movie--header">
      <img
        @click="$router.go(-1)"
        :src="require('@/assets/imgs/icons/arr-left.png')"
        alt
        class="arrow"
      >

      <img :src="require('@/assets/imgs/icons/123.png')" alt class="shop">
      <span class="name">hi,znkk</span>
    </div>
    <Buy></Buy>
    <p class="title">
      特惠票
      <span class="much">更多优惠 ></span>
    </p>

    <div class="hezi" v-for="p in  ticketImgs" :key="p.id">
      <div class="time">
        <p class="time-1">{{p.time}}</p>
        <p class="time-2">{{p.time1}}散场</p>
      </div>
      <p class="head-1">{{p.title}}</p>
      <p class="head-2">{{p.title1}}</p>
      <p class="price">{{p.price}}元</p>
      <button class="btn">购票</button>
    </div>

    <!-- <div class="ji" v-for="p in  ticketImgs" :key="p.id">
      <p>{{p.title}}</p>
      <img :src="p.img" alt="">
    </div>-->
  </div>
</template>

<script>
import tickApi from "@/api/tick";
import Buy from "./components/Buy";
export default {
  name: "Movie",
  components: {
    Buy
  },
  data() {
    return {
      ticketImgs: []
    };
  },
  created() {
    this.getTicketImgs();
  },

  methods: {
    getTicketImgs() {
      tickApi.getTicketImgs().then(res => {
        this.ticketImgs = res;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.movie-main {
  .movie--header {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 $basePadding;
    height: 44px;
    font-size: 16px;
    color: #fff;
    align-items: center;
    margin-bottom: 20px;
    .arrow {
      line-height: 44px;
      width: 22px;
      height: 22px;
    }
    .shop {
      margin-left: 235px;
      width: 33px;
      height: 33px;
    }
    .name {
      font-size: 12px;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;

    padding: 0 $basePadding;
    margin-top: 29px;

    font-size: 16px;
    color: #ffffff;
  }
  .much {
    font-size: 12px;
    color: #949699;
  }
  .hezi {
    position: relative;
    margin-top: 20px;
    padding: 0 $basePadding;
    width: 336px;
    height: 70px;

    .time {
      position: absolute;
      top: 20px;
      left: 17px;
      .time-1 {
        font-size: 16px;
      }
      .time-2 {
        font-size: 6px;
      }
    }
    .head-1 {
      position: absolute;
      top: 14px;
      left: 71px;
      font-size: 16px;
    }
    .head-2 {
      position: absolute;
      top: 39px;
      left: 71px;
      font-size: 12px;
    }
    .price {
      position: absolute;
      right: 77px;
      top: 22px;
      font-size: 20px;
      color: #fbc34a;
    }
    .btn {
      position: absolute;
      right: 10px;
      top: 23px;
      width: 45px;
      height: 25px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
    }
  }
}
</style>
