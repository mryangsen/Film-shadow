<template>
  <div class="movie-main">
    <div class="headr">
      <img @click="$router.go(-1)" class="arr-left" src="@/assets/imgs/icons/arr-left.png" alt>
      <img class="arr-right" src="@/assets/imgs/icons/share.png" alt>
    </div>
    <div class="banner">
      <div  @click="listshow;$router.go(-1)" :class="{active:show==1}" class="jianjie">
        <p>简介</p>
      </div>
      <div @click="filmshow" :class="{active:show==2}" class="film">
        <p>影评</p>
      </div>
      <div @click="discusshow" :class="{active:show==3}">
        <p>讨论</p>
      </div>
      <div @click="Moreshow" :class="{active:show==4}">
        <p>更多</p>
      </div>
    </div>
    <div class="continer">
      <p class="hot">观众热评</p>
      <p class="write">写影评</p>
    </div>
    <div v-show="flag==true" class="evaluate">
      <p @click="all" :class="{actives:shows==1}">全部</p>
      <p @click="all2" :class="{actives:shows==2}">最新</p>
      <p @click="all3" :class="{actives:shows==3}">好评</p>
      <p @click="all4" :class="{actives:shows==4}">差评</p>
    </div>
    <div>
      <img @click="btn" src="@assets/imgs/icons/down.png" alt>
    </div>
    <div class="slide" v-show="flag==true" v-for="m in detail" :key="m.id">
      <div class="detail">
        <img class="detail-img" :src="m.img" alt>
        <div class="name">
          <p>{{m.cname}}</p>
          <p class="string">{{m.string}}分</p>
        </div>
        <p class="ellipsis">...</p>
      </div>
      <p class="brief">{{m.text}}</p>
      <div class="time">
        <p>{{m.time}}</p>
        <div class="goods">
          <img src="@assets/imgs/icons/good.png" alt>
          <p>{{m.number}}</p>
          <img src="@assets/imgs/icons/comment.png" alt>
          <p>{{m.fraction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
import DetailImgapi from "@/assets/api/review";
export default {
  name: "Movie",

  data() {
    return {
      show: 2,
      shows: 1,
      flag: false,
      detail: []
    };
  },
  created() {
    this.test();
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
    all() {
      this.shows = 1;
    },
    all2() {
      this.shows = 2;
      for(var i = 1 ; i <= this.detail.length ; i ++){
        for(var j = 0; j < this.detail.length - i ; j ++){
          if( Date.parse(this.detail[i].time) > Date.parse(this.detail[j].time)){
            var temp = this.detail[i].time
            this.detail[i].time = this.detail[j].time
            this.detail[j].time = temp
          }
        }
      }
    },
    all3() {
      this.shows = 3;
      this.detail.sort((a, b) => b.string - a.string);
    },
    all4() {
      this.shows = 4;
      this.detail.sort((a, b) => a.string - b.string);
    },
    btn() {
      if (this.flag == false) {
        this.flag = true;
      } else if (this.flag == true) {
        this.flag = false;
      }
    },
    test() {
      DetailImgapi.getDetailimgs().then(res => {
        console.log(res);
        this.detail = res;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.movie-main {
  .headr {
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
    margin-top: 25px;
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
  .continer {
    margin-top: 36px;
    display: flex;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    .hot {
      display: inline-block;
      font-size: 18px;
    }
    .write {
      display: inline-block;
      width: 54px;
      height: 25px;
      border-radius: 100px;
      line-height: 25px;
      text-align: center;
      font-size: 12px;
      color: #ffff;
      letter-spacing: 2px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
    }
  }
  .evaluate {
    margin-top: 27px;
    display: flex;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    p {
      width: 44px;
      height: 22px;
      border-radius: 100px;
      background: rgba(0, 0, 0, 1);
      line-height: 22px;
      text-align: center;
      color: #6e7176;
    }
    .actives {
      color: #ffff;
    }
  }
  .slide {
    margin-top: 20px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    overflow: hidden;
    .detail {
      position: relative;
      line-height: 20px;
      .detail-img {
        float: left;
      }
      .name {
        margin-right: 200px;
        .string {
          color: yellow;
        }
      }
      .ellipsis {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 18px;
      }
    }
    .brief {
      text-align: left;
      margin-top: 20px;
      font-weight: 400;
      line-height: 18px;
      color: rgba(255, 255, 255, 1);
    }
    .time {
      margin-top: 11px;
      display: flex;
      justify-content: space-between;
      .goods {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
