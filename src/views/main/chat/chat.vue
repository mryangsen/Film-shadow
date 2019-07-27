<template>
  <div class="chat-main">
    <div class="chat-head-top">
      <div class="chat-head-top-left">
        <div class="chat-icon" @click="$router.go(-1)"></div>
        <div class="chat-portrait">
          <img src="../../../assets/imgs/message-center/椭圆形复制 3.png" alt>
        </div>
        <h1>Zeng Wen</h1>
      </div>
      <div class="chat-head-top-right">
        <img src="../../../assets/imgs/Chat/编组.png" alt>
      </div>
    </div>

    <div class="chat-content-dialogue">
      <ul>
        <li>
          <h1>你好</h1>
        </li>
        <li class="li-to-right">
          <!-- <h1>你好</h1> -->
        </li>
        <li class="li-to-left">
          <h1>2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人选拔，获得最佳新人“完…</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.chat-main {
  .chat-head-top {
    margin: 59px auto 28px;
    width: 335px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .chat-icon {
      width: 20px;
      height: 20px;
      background-image: url("../../../../src/assets/imgs/indent/返回-1.png");
      background-size: 100%;
    }
    .chat-head-top-left {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .chat-portrait {
        img {
          width: 100%;
          height: 100%;
        }
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: darkblue;
        margin: 0 8px 0 13px;
      }
      h1 {
        font-size: 14px;
      }
    }
  }
  .chat-content-dialogue {
    width: 335px;
    margin: 0 auto;
    text-align: center;
    ul {
      overflow: hidden;
      li {
        margin: 15px 0;
        width: 90px;
        height: 32px;
        background-image: url("../../../assets/imgs/Chat/编组 2复制 2.png");
        background-size: 100%;
        h1 {
          line-height: 32px;
        }
      }
      .li-to-right {
        background-image: url("../../../assets/imgs/Chat/编组 2复制.png");
        //   float: right;
        margin-left: 240px;
      }
      .li-to-left {
          overflow: hidden;
        margin: 50px 0;
        width: 234px;
        height: 85px;
        background-image: url("../../../assets/imgs/Chat/编组 2复制 2.png");
        h1 {
          width: 191px;
          height: 60px;
          margin: 15px 0 0 30px;
          display: block;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
