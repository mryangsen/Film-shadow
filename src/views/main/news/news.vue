<template>
  <div class="News-main">
    <div class="news-icon" @click="$router.go(-1)"></div>
    <div class="news-title">
      <h1>消息中心</h1>
    </div>
    <div class="news-container">
      <ul>
        <li>
          <span></span>
          <div class="news-container-text-1">
            <h1>系统通知</h1>
            <p>哈皮巴斯得！祝你生日快乐！</p>
          </div>
          <div class="news-container-text-2">
            <p>一个月前</p>
          </div>
        </li>
        <li>
          <span></span>
          <div class="news-container-text-1">
            <h1>赞</h1>
            <p>一个赞都不给我！</p>
          </div>
          <div class="news-container-text-2">
            <p>一个月前</p>
          </div>
        </li>
        <li>
          <span></span>
          <div class="news-container-text-1">
            <h1>评论</h1>
            <p>暂时还没用收到评论</p>
          </div>
          <div class="news-container-text-2">
            <p>一个月前</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="news-private-text">
      <h1>全部私信</h1>
    </div>

    <div class="new-footer-private">
      <ul>
        <router-link tag='li' :to="{name:'chat'}">
          <img src="../../../assets/imgs/message-center/椭圆形复制 3.png" alt="">
          <div class="news-footer-text-1">
            <h1>Zeng Wen</h1>
            <p>暂时还没用收到评论</p>
          </div>
          <div class="news-footer-text-2">
            <p>一个月前</p>
            <i>1</i>
          </div>
        </router-link>
        <li>
          <img src="../../../assets/imgs/message-center/椭圆形复制 4.png" alt="">
          <div class="news-footer-text-1">
            <h1>Chikelu Obasea</h1>
            <p>暂时还没用收到评论</p>
          </div>
          <div class="news-footer-text-2">
            <p>一个月前</p>
            <i>2</i>
          </div>
        </li>
        <li>
          <img src="../../../assets/imgs/message-center/椭圆形复制 5.png" alt="">
          <div class="news-footer-text-1">
            <h1>Kimmy McIlmorie</h1>
            <p>暂时还没用收到评论</p>
          </div>
          <div class="news-footer-text-2">
            <p>一个月前</p>
            <i>3</i>
          </div>
        </li>
        <li>
          <img src="../../../assets/imgs/message-center/椭圆形复制 6.png" alt="">
          <div class="news-footer-text-1">
            <h1>Xu Jianhong</h1>
            <p>暂时还没用收到评论</p>
          </div>
          <div class="news-footer-text-2">
            <p>一个月前</p>
            <i>4</i>
          </div>
        </li>
        <li>
          <img src="../../../assets/imgs/message-center/椭圆形复制 7.png" alt="">
          <div class="news-footer-text-1">
            <h1>Kung Jiyeon</h1>
            <p>暂时还没用收到评论</p>
          </div>
          <div class="news-footer-text-2">
            <p>一个月前</p>
            <i>5</i>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.news-icon {
  margin-top: 58px;
  margin-left: 20px;
  width: 20px;
  height: 20px;
  background-image: url("../../../assets/imgs/indent/返回-1.png");
  background-size: 100%;
  display: block;
}
.news-title {
  margin: 0 auto;
  display: inline-block;
  position: relative;
  top: -16px;
  h1 {
    font-weight: 700;
    font-size: 16px;
  }
}
.news-container,.new-footer-private {
  // width: 335px;
  width: 90%;
  margin: 0 auto;
  ul {
    li {
      margin: 30px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:nth-child(2) span {
        background: #ef8833 url("../../../assets/imgs/message-center/点赞.png")
          no-repeat center;
      }
      &:nth-child(3) span {
        background: #6548a9 url("../../../assets/imgs/message-center/评论.png")
          no-repeat center;
      }
      span {
        width: 44px;
        height: 44px;
        background: #f9c34a url("../../../assets/imgs/message-center/通知.png")
          no-repeat center;
        display: block;
        border-radius: 50%;
      }
      .news-container-text {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .news-container-text-2,.news-footer-text-2 {
        float: right;
        i{
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #f9c34a;
          float: right;
          margin-top: 8px;
          color: #ffffff;
          line-height: 15px;
          text-align: center;
        }
      }
      .news-container-text-1,.news-footer-text-1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        width: 60%;
        h1 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 8px;
          font-size: 16px;
          font-weight: 700;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
          
        }
      }
    }
  }
}
.news-private-text {
  h1 {
    font-weight: 700;
    font-size: 18px;
    margin-left: 20px;
    text-align: start;
  }
}


.new-footer-private{
  ul{
    li{
      img{
        width: 44px;
        height: 44px;
      }
      h1{
        color: #f9c34a;
      }
    }
  }
}




</style>
