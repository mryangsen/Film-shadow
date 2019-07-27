<template>
  <div class="coupons-main">
    <div class="icon" @click="$router.go(-1)"></div>
    <div class="coupons-title">
      <h1>优惠卷</h1>
    </div>
    <div class="coupons-hint">
      <p>你有2张优惠卷可用</p>
    </div>

    <div class="coupons-contet">
      <ul>
        <li @click="shows">
          <div class="coupons-contet-left">
            <h1>电影专享代金劵</h1>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>
          <div class="coupons-contet-right">
            <h1>
              <i>5</i>元
              <br>购票
            </h1>
            <!-- <h1>购票</h1> -->
          </div>
          <transition name="op">
            <div class="coupons-contet-bottom" v-show="show">
              <h1>
                马上去抢票 &gt;
              </h1>
            </div>
          </transition>
        </li>
        <li>
          <div class="coupons-contet-left">
            <h1>电影专享代金劵</h1>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>
          <div class="coupons-contet-right">
            <h1>
              <i>5</i>元
              <br>购票
            </h1>
            <!-- <h1>购票</h1> -->
          </div>
        </li>
        <li class="coupons-contet-past">
          <div class="coupons-contet-left">
            <h1>电影专享代金劵</h1>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>
          <div class="coupons-contet-right">
            <h1>
              <i>5</i>元
            </h1>
            <span></span>
            <!-- <h1>购票</h1> -->
          </div>
        </li>
        <li class="coupons-contet-past">
          <div class="coupons-contet-left">
            <h1>电影专享代金劵</h1>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>
          <div class="coupons-contet-right">
            <h1>
              <i>5</i>元
            </h1>
            <span></span>
            <!-- <h1>购票</h1> -->
          </div>
        </li>
        <li class="coupons-contet-past">
          <div class="coupons-contet-left">
            <h1>电影专享代金劵</h1>
            <p>购票即可抵扣 快去购票</p>
            <p>有效期至： 2018-04-11</p>
          </div>
          <div class="coupons-contet-right">
            <h1>
              <i>5</i>元
            </h1>
            <span></span>
            <!-- <h1>购票</h1> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="coupons-footer">
      <h1>
        去购票
        <span></span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "coupons",

  data() {
    return {
      show:false,
    };
  },

  methods: {
    shows(){
      this.show=!this.show;
    }
  }
};
</script>

<style lang='scss' scoped>
.coupons-main {
  .icon {
    margin-top: 58px;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    background-image: url("../../../assets/imgs/indent/返回-1.png");
    background-size: 100%;
  }
  .coupons-title {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    top: -16px;
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
    }
  }
  .coupons-hint {
    overflow: hidden;
    width: 100%;
    height: 30px;
    background-color: #2c2f36;
    p {
      margin: 9px auto 0;
      text-align: left;
      display: block;
      width: 87%;
      height: 100%;
    }
  }
  .coupons-contet {
    overflow: hidden;
    ul {
      overflow: hidden;
      li {
        z-index: 222;
        position: relative;
        overflow: hidden;
        margin: 13px auto 0;
        width: 335px;
        // height: 140px;
        background: url("../../../assets/imgs/coupons/矩形.png") no-repeat;
        background-size: 100%;
        .coupons-contet-bottom{
          position: relative;
          z-index: 1;
          float: left;
          height: 30px;
          width: 98%;
          margin: 0 0 0 4px;
          background-color: #2c2f36;
          // overflow: hidden;
            // margin-top: 10px;
          h1{
            line-height: 30px;
          }
        }
      }
    }
    .coupons-contet-left {
      float: left;
      width: 60%;
      height: 120px;
      // margin-bottom: 20px;
      h1 {
        font-weight: 500;
        font-size: 18px;
        //   line-height: 40px;
        margin: 26px 0 0;
      }
      p {
        margin: 15px 0;
        color: #ffffff56;
      }
    }
    .coupons-contet-right {
      // margin-bottom: 20px;
      //   line-height: 30px;
      float: left;
      width: 40%;
      height: 120px;
      h1 {
        margin-top: 25px;
        line-height: 35px;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
      }
      i {
        font-weight: 700;
        font-size: 24px;
      }
    }
    .coupons-contet-past {
      position: relative;
      background-image: url("../../../assets/imgs/coupons/矩形复制 2.png");
      .coupons-contet-right {
        h1 {
          color: #ffffff5e;
        }
      }
      span {
        width: 54px;
        height: 54px;
        background-image: url("../../../assets/imgs/coupons/已过期.png");
        position: absolute;
        bottom: 10px;
        right: 20px;
      }
    }
  }
  .coupons-footer {
    bottom: 0;
    position: fixed;
    height: 70px;
    width: 375px;
    background-color: #2c2f36;
    h1 {
      line-height: 70px;
      font-size: 18px;
      color: #ffffff;
      span {
        position: relative;
        top: 4px;
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("../../../assets/imgs/coupons/前进.png");
        background-size: 100%;
      }
    }
  }
  .op-enter-active{
    animation: ty 0.6s;
  }
  .op-leave-active{
    animation: ty 0.6s reverse;
  }
  @keyframes ty {
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    100%{
      z-index: 11;
      transform: translateY(0px);
    }
  }
}
</style>
