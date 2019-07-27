<template>
  <div class="main-main">
    <!-- <v-icon style="color:red;height:30px;" name="sync" spin></v-icon>    -->

    <!-- <img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt=""> -->
    <div class="header">
      <div class="guide">
        <router-link class="left" tag="div" :to="{name:'gear'}"></router-link>
        <!-- <div class="left"></div> -->
        <router-link tag='div' :to="{name:'news'}" class="right"></router-link>
      </div>
      <div class="profile"></div>
      <router-link tag="div" :to="{name:'member'}" class="userif">
        <p>yujiao1134</p>
        <p class="p1">V8王者会员></p>
      </router-link>
      <div class="boult"></div>
    </div>
    <div class="banner">
      <div class="left">
        <p>会员中心</p>
      </div>
      <span class="cutrule"></span>
      <div class="right">
        <p>会员中心</p>
        <p class="p2">50元通兑券天天送</p>
      </div>
      <div class="redpack"></div>
    </div>
    <div class="content">
      <div class="order">
        <router-link tag="div" class="indent" :to="{name:'indent'}">
          <!-- <div class="indent"> -->
          <div class="left">
            <p>我的订单</p>
          </div>
          <span>全部 ></span>
        </router-link>
        <!-- </div> -->
        <ul class="unit">
          <router-link tag="li" class="list" :to="{name:'allorder'}">
            <img class="pice" src="@/assets/imgs/main/imgs/one.png" alt>
            <p>未消费</p>
          </router-link>
          <router-link tag="li" class="list" :to="{name:'obligation'}">
            <img class="pice" src="@/assets/imgs/main/imgs/two.png" alt>
            <p>待付款</p>
          </router-link>
          <router-link tag="li" class="list" :to="{name:'evaluated'}">
            <img class="pice" src="@/assets/imgs/main/imgs/three.png" alt>
            <p>待评价</p>
          </router-link>

          <router-link tag="li" class="list" :to="{name:'refund'}">
            <img class="pice" src="@/assets/imgs/main/imgs/four.png" alt>
            <p>退款</p>
          </router-link>
        </ul>
      </div>
      <div class="minute">
        <router-link tag="li" :to="{name:'member'}" class="item">
          <p>影城会员卡</p>
          <span>></span>
        </router-link>
        <router-link tag="li" :to="{name:'coupons'}" class="item">
          <p>优惠券</p>
          <span>></span>
        </router-link>
        <li class="item">
          <p>我的收藏</p>
          <span>></span>
        </li>
        <li class="item">
          <p>帮助与反馈</p>
          <span>></span>
        </li>

        <!-- <div class="club"></div>
        <div class="discount"></div>
        <div class="favar"></div>
        <div class="help"></div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  components: {}
};
</script>
<style lang="scss" scoped>
.main-main {
  * {
    list-style: none;
  }
  .header {
    overflow: hidden;
    width: 100%;
    height: 210px;
    background: linear-gradient(
      123deg,
      rgba(242, 94, 133, 1) 0%,
      rgba(241, 166, 97, 1) 100%
    );
    border-radius: 29px;
    opacity: 0.9029;
    .guide {
      width: 50px;
      height: 19px;
      //   background-color: aqua;
      margin-top: 50px;
      margin-left: 304px;
      .left {
        float: left;
        width: 19px;
        height: 19px;
        background-image: url("../../assets/imgs/main/imgs/chilun.png");
        background-size: 100%;
      }
      .right {
        float: right;
        width: 19px;
        height: 19px;
        background-image: url("../../assets/imgs/main/imgs/xiaoxi.png");
        background-size: 100%;
      }
    }
    .profile {
      float: left;
      width: 73px;
      height: 73px;
      margin-left: 20px;
      background-color: aqua;
      margin-top: 23px;
      background-image: url("../../assets/imgs/main/imgs/profile.png");
      border-radius: 50%;
      background-size: 100%;
    }
    .userif {
      float: left;
      margin-left: 20px;
      margin-top: 23px;
      width: 200px;
      height: 73px;
      text-align: left;
      p {
        margin-top: 10px;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: 33363d;
        line-height: 25px;
        &.p1 {
          margin-top: 5px;
          width: 100px;
          font-size: 14px;
          background: rgba(51, 54, 61, 1);
          border-radius: 5px;
          color: 33363d;
          opacity: 0.7293999999999999;
          text-align: center;
        }
      }
    }
    .boult {
      float: right;
      margin-right: 20px;
      width: 20px;
      height: 20px;
      background-image: url("../../assets/imgs/main/imgs/rightjt.png");
      background-size: 100%;
      margin-top: 35px;
    }
  }
  .banner {
    overflow: hidden;
    position: relative;
    width: 336px;
    height: 68px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    border-radius: 17px;
    margin: 0 auto;
    margin-top: -27px;
    .left {
      float: left;
      width: 72px;
      height: 25px;
      margin-left: 36px;
      margin-top: 22px;
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: 33363d;
      line-height: 25px;
    }
    .right {
      float: left;
      width: 120px;
      height: 100%;
      //   background-color: antiquewhite;
      margin-left: 16px;
      p {
        margin-top: 16px;
        text-align: left;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: 33363d;
        line-height: 17px;
        &.p2 {
          margin-top: 7px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: 33363d;

          line-height: 17px;
        }
      }
    }
    .cutrule {
      float: left;
      background-color: #979797;
      width: 1px;
      height: 47px;
      margin-left: 11px;
      margin-top: 12px;
    }
    .redpack {
      float: right;
      width: 32px;
      height: 34px;
      background-image: url("../../assets/imgs/main/imgs/redpack.png");
      background-size: 100%;
      margin-right: 20px;
      margin-top: 17px;
    }
  }
  .content {
    .order {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 137px;
      background-color: #33363d;
      margin-top: 23px;
      .indent {
        width: 335px;
        height: 25px;
        margin: 0 auto;
        margin-top: 10px;

        .left {
          float: left;
          width: 72px;
          height: 25px;
          p {
            font-size: 18px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 25px;
          }
        }
        span {
          float: right;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 20px;
        }
      }
      .unit {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        .list {
          float: left;
          margin-left: 39.5px;
          width: 44px;
          height: 102px;
          .pice {
            display: block;
            margin: 0 auto;
            margin-top: 30px;
            width: 24px;
            height: 24px;
            background-size: 100%;
          }
          p {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;

            color: 33363d;
            line-height: 20px;
            margin-top: 15px;
          }
        }
      }
    }
  }
  .minute {
    overflow: hidden;
    width: 375px;
    height: 215px;
    margin-top: 20px;
    background-color: #33363d;
    .item {
      height: 30px;
      width: 334px;
      margin-left: 22px;
      margin: 19px;
      margin-top: 19px;
      p {
        float: left;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: 33363d;
        line-height: 22px;
      }
      span {
        float: right;
        width: 5px;
        height: 8px;
        line-height: 22px;
      }
    }
  }
}
</style>





