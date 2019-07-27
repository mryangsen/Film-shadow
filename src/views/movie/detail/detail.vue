<template>
  <div class="detail-main">
    <img class="banner" src="@/assets/imgs/kind/banner2.png" alt>
    <div class="headr clearfix">
      <img @click="$router.go(-1)" class="arr-left" src="@/assets/imgs/icons/arr-left.png" alt>
      <div class="detail">
        <img class="head" :src="$route.query.img" alt>
        <p class="detail-name">{{$route.query.name}}</p>
        <p>Satomi lshihara</p>
        <p class="detail-guanzhu">关注</p>
        <p>138585人关注</p>
      </div>
      <div class="brief">
        <p class="brief-title">简介</p>
        <p class="brief-main">
          2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱 情电影《小岛之恋》上映；4月5日，参演的喜剧电影《我的爷爷 》上映，在片中饰演五代家的独生女五代珠子，她则凭借该片获 得了第27届日本…
          <i
            class="brief-more"
          >查看更多></i>
        </p>
      </div>
    </div>
    <div class="container">
      <p class="container-title">个人作品</p>
      <div class="contant-detail" v-for="n in moviedetail" :key="n.id">
        <img :src="movUrl+n.images.large" alt>
        <div class="introduce">
          <p class="title">{{n.title}}</p>
          <p>评分{{n.rating.average}}</p>
          <p>演员:{{$route.query.name}}</p>
          <p>上映时间:{{n.year}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="footer-title">相册</p>
      <div class="footer-Album">
        <div class="footer-Album1">
          <div class="footer-Album1-fist">
            <img :src="movUrl+moviedetail[0].images.small" alt>
          </div>
          <div class="footer-Album1-list">
            <img class="footer-Album1-list-1" :src="movUrl+moviedetail[2].images.large" alt>
            <img class="footer-Album1-list-2" :src="movUrl+moviedetail[3].images.large" alt>
          </div>
        </div>
        <div class="footer-Album2">
          <img :src="movUrl+moviedetail[10].images.large" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DetailImgapi from "@/assets/api/review";
import movieApi from "@/assets/api/detail"
export default {
  name: "detail.vue",

  data() {
    return {
      detail: [],
      moviedetail:[],
      movUrl: "https://images.weserv.nl/?url="
    };
  },
  created() {
    this.test();
    this.getMovie();
  },
  methods: {
    test() {
      DetailImgapi.getDetailimgs().then(res => {
        this.detail = res;
      });
    },
    getMovie(){
      axios.get(movieApi.in_theaters)
      .then(res=>
        this.moviedetail=res.data.data,
      
      
      )}
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.detail-main {
  .banner {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -2;
  }
  .headr {
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    overflow: hidden;
    .arr-left {
      float: left;
      width: 13px;
      height: 19px;
    }
    .detail {
      margin-top: 50px;
      line-height: 30px;

      .head {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        opacity: 1;
      }
      .detail-name {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
      }
      .detail-guanzhu {
        display: block;
        width: 48px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        margin: 0 auto;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        border-radius: 100px;
      }
    }
    .brief {
      width: 100%;
      text-align: left;
      margin-top: 27px;
      .brief-title {
        font-size: 16px;
      }
      .brief-main {
        margin-top: 10px;
        line-height: 20px;
        color: #5e5e61;
        .brief-more {
          font-size: 14px;
          color: #fbc34a;
        }
      }
    }
  }
  .container {
    margin-top: 30px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;

    .container-title {
      text-align: left;
      font-size: 16px;
    }
    .contant-detail {
      margin-top: 10px;
      overflow: auto;
      img {
        width: 100px;
        height: 140px;
        float: left;
      }
      .introduce {
        line-height: 30px;
        font-size: 14px;
        text-align: left;
        margin-left: 150px;
        .title {
          font-size: 18px;
        }
      }
    }
  }
  .footer {
    margin-top: 30px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    .footer-title {
      text-align: left;
      font-size: 16px;
    }
    .footer-Album {
      width: 100%;
      height: 230px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .footer-Album1 {
        width: 192px;
        .footer-Album1-fist {
          width: 100%;
          height: 110px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .footer-Album1-list {
          margin-top: 10px;
          width: 100%;
          height: 110px;
          display: flex;
          justify-content: space-between;
          .footer-Album1-list-1 {
            width: 94px;
            height: 100%;
          }
          .footer-Album1-list-2 {
            width: 94px;
            height: 100%;
          }
        }
      }
      .footer-Album2 {
        width: 138px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>