<template>
  <!-- 设置页面  -->
  <div class="gear-main">
    <div class="header">
      <img @click="$router.go(-1)" src="@/assets/imgs/main/imgs/leftjt.png" alt>
      <h2>设置</h2>
    </div>
    <div class="banner">
      <div class="headpor"></div>
      <p>yujia1130</p>

      <div class="account">
        <div class="left">账号与安全</div>
        <div class="right">手机绑定与更换 ></div>
      </div>
      <span class="useless"></span>
      <ul class="ust">
        <li class="item">
          <div class="lef">被赞提醒</div>
          <div class="rig">
            <input type="checkbox" class="viewshow input">
            <div class="viewshow"></div>
          </div>
        </li>
        <li class="item">
          <div class="lef">影评/话题提醒</div>
          <div class="rig">
            <input type="checkbox" class="viewshow input">
            <div class="viewshow"></div>
          </div>
        </li>
        <li class="item">
          <div class="lef">系统通知</div>
          <div class="rig">
            <input type="checkbox" class="viewshow input">
            <div class="viewshow"></div>
          </div>
        </li>
        <li class="item">
          <div class="lef">系统通知</div>
          <div class="rig">
            <input type="checkbox" class="viewshow input">
            <div class="viewshow"></div>
          </div>
        </li>
      </ul>
      <span class="uselss"></span>
      <div class="acount">
        <div class="let">关于</div>
        <div class="rigt">></div>
      </div>
      <router-link tag='div' class="exit" :to="{name:'load'}">退出登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "gear",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.gear-main {
  .header {
    width: 335px;
    height: 25px;
    margin: 0 auto;
    margin-top: 20px;
    img {
      float: left;
      width: 20px;
      height: 20px;
      margin-top: 3px;
    }
    h2 {
      display: block;
      width: 40px;
      height: 25px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      margin-left: 145px;
    }
  }
  .banner {
    overflow: hidden;
    width: 375px;
    min-height: 300px;

    .headpor {
      width: 73px;
      height: 73px;
      margin-top: 35px;
      margin-left: 151px;
      border-radius: 50%;
      background-image: url("../../../assets/imgs/main/imgs/profile.png");
    }
    p {
      width: 68px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      margin: 0 auto;
      margin-top: 10px;
    }
    .account {
      width: 335px;
      height: 20px;
      margin: 0 auto;
      margin-top: 48px;
      .left {
        float: left;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
      .right {
        float: right;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
    }
    .useless {
      display: block;
      width: 375px;
      height: 6px;
      background: rgba(51, 54, 61, 1);
      margin-top: 10px;
    }
    .ust {
      overflow: hidden;
      width: 335px;
      height: 229px;
      margin: 0 auto;
      .item {
        width: 100%;
        height: 26px;
        margin-top: 25px;

        .lef {
          float: left;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 26px;
        }
        .rig {
          position: relative;
          // .input{
          //    position: absolute;
          //     background-color: red;
          //     right: 0;
          //     top: 0;
          //     opacity: 0;
          // }
          .viewshow {
            display: block;
            float: right;
            width: 43px;
            height: 26px;
            background-image: url("../../../assets/imgs/main/imgs/noshow.png");
            background-size: 100%;
            &.input {
              position: absolute;
              background-color: red;
              right: 0;
              top: 0;
              opacity: 0;
              &.input:checked + .viewshow {
                background-image: url("../../../assets/imgs/main/imgs/show.png");
               }
            }
          }
        }
      }
    }
    .uselss {
      display: block;
      width: 375px;
      height: 6px;
      background: rgba(51, 54, 61, 1);
      margin-top: -10px;
    }
    .acount {
      width: 335px;
      height: 20px;
      margin: 0 auto;
      margin-top: 20px;
      .let {
        float: left;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
      .rigt {
        float: right;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
    }
    .exit {
      width: 335px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      margin: 0 auto;
      margin-top: 20px;

      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
    }
  }
}
</style>
