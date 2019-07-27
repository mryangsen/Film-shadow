<template>
  <div class="load-main">
    <div class="header">
      <img
        @click="$router.go(-1)"
        :src="require('@/assets/imgs/icons/arr-left.png')"
        alt
        class="arrow"
      >
    </div>
    <div class="logo">
      <img :src="require('@/assets/imgs/icons/logo.png')" alt>
    </div>
    <div class="phone">
      <img class="one" :src="require('@/assets/imgs/icons/po.png')" alt>
      <input type="text" class="num" placeholder="请输入手机号" autofocus="autofocus">
    </div>
    <div class="password">
      <img class="mi" :src="require('@/assets/imgs/icons/mi.png')" alt>
      <input type="text" class="pass" placeholder="请输入密码" autofocus="autofocus">
    </div>
    <button class="btn">登录</button>
    <div class="ming">
      <a href="https://ssl.zc.qq.com/v3/index-chs.html">注册</a>
    </div>
    <div class="forget">
      <a
        href="https://aq.qq.com/v2/uv_aq/html/reset_pwd/pc_reset_pwd_input_account.html?v=3.0&old_ver_account="
      >忘记密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "load",

  data() {
    return {};
  },

  methods: {}
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
.load-main {
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 $basePadding;
    height: 44px;
    font-size: 16px;
    color: #fff;
    align-items: center;

    .arrow {
      width: 22px;
      height: 22px;
    }
  }
  .logo {
    padding: 0 $basePadding;
    width: 103px;
    height: 92px;
    margin-top: 77px;
    margin-left: 105px;
  }
  .phone {
    position: relative;
    margin-top: 33px;
    margin-left: 61px;
    width: 254px;
    height: 40px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 11px;

    .num {
      position: absolute;
      top: 12px;
      left: 49px;
      width: 96px;
      height: 16px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      border: 0;
      background-color: rgba(51, 54, 61, 1);
      color: rgba(255, 255, 255, 1);
      line-height: 16px;
    }
    .one {
      position: absolute;
      top: 11px;
      left: 27px;
    }
  }
  .password {
    position: relative;
    margin-top: 33px;
    margin-left: 61px;
    width: 254px;
    height: 40px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 11px;
    .pass {
      position: absolute;
      top: 12px;
      left: 49px;
      width: 96px;
      height: 16px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      border: 0;
      background-color: rgba(51, 54, 61, 1);
      color: rgba(255, 255, 255, 1);
      line-height: 16px;
    }
    .mi {
      position: absolute;
      top: 13px;
      left: 27px;
    }
  }
  .btn {
    margin-top: 68px;
    width: 254px;
    height: 40px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.57);
    border-radius: 11px;
    font-size: 20px;
    color: #ffffff;
  }
  .ming {
    margin-left: 60px;
    margin-top: 15px;
    width: 28px;
    height: 14px;

    font-family: PingFangSC-Regular;
    font-weight: 400;

    line-height: 14px;
    a {
      color: #949699;
      font-size: 14px;
    }
  }
  .forget {
    margin-left: 258px;
    margin-top: -14px;
    width: 56px;
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 14px;
    a {
      color: #949699;
      font-size: 14px;
    }
  }
}
</style>
