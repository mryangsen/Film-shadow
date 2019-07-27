<template>
  <div class="Moviegrade.vue">
    <div class="heade">
      <img :src="require('@/assets/imgs/icons/arr-left.png')" alt class="head-bak fl">
      <p class="movie-grade">电影评分</p>
      <img :src="require('@/assets/imgs/icons/share.png')" alt class="head-share fl">
    </div>
    <div class="banner">
      <div class="banner-movie-box">
        <p class="movie-title">《傲慢与偏见》</p>
        <p class="movie-star">
          ★★★★★
          <span class="movie-star-num">9.9</span>分
        </p>
        <p class="movie-moreperson">999万人评分</p>
      </div>
      <div class="movie-histogram clearfix">
        <div class="movie-histogram-box fl">
          <p class="histogram-num">53%</p>
          <div class="movie-histogram-item"></div>
          <p class="movie-hist-person-num">1-10</p>
        </div>
        <div class="movie-histogram-box fl">
          <p class="histogram-num">53%</p>
          <div class="movie-histogram-item"></div>
          <p class="movie-hist-person-num">1-10</p>
        </div>
        <div class="movie-histogram-box fl">
          <p class="histogram-num">53%</p>
          <div class="movie-histogram-item"></div>
          <p class="movie-hist-person-num">1-10</p>
        </div>
        <div class="movie-histogram-box fl">
          <p class="histogram-num">53%</p>
          <div class="movie-histogram-item"></div>
          <p class="movie-hist-person-num">1-10</p>
        </div>
        <div class="movie-histogram-box fl">
          <p class="histogram-num">53%</p>
          <div class="movie-histogram-item"></div>
          <p class="movie-hist-person-num">1-10</p>
        </div>
      </div>
      <div class="real-time">
        <span class="movie-dot">·</span>
        以上数据实时更新
      </div>
      <div class="banner-bootom"></div>
      <div class="audience-grad clearfix">
        <p class="audience-grad-title">观众评分</p>
        <div class="men-women fl">
          <div class="men fl">
            <img :src="require('@/assets/imgs/icons/man-1.png')" alt class="men-icont">
            <p class="men-txt">男性观众</p>
            <span>9.9分</span>
          </div>
          <p class="man-vs-women fl">VS</p>
          <div class="men women fl">
            <img :src="require('@/assets/imgs/icons/women-1.png')" alt class="men-icont">
            <p class="men-txt">女性观众</p>
            <span>9.9分</span>
          </div>
        </div>
      </div>
      <div class="audience-year">
        <div class="audience-year-item clearfix">
          <p class="audience-age fl">95后</p>
          <div class="audience-lin fl"></div>
          <p class="movie-num fl">100分</p>
        </div>
        <div class="audience-year-item clearfix">
          <p class="audience-age fl">95后</p>
          <div class="audience-lin fl"></div>
          <p class="movie-num fl">100分</p>
        </div>
        <div class="audience-year-item clearfix">
          <p class="audience-age fl">95后</p>
          <div class="audience-lin fl"></div>
          <p class="movie-num fl">100分</p>
        </div>
      </div>
        <div class="real-time">
          <span class="movie-dot">·</span>
          以上数据实时更新
        </div>
      <div class="foot-lin"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Moviegrade.vue",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.heade {
  padding: 0 $basePadding;
  height: 44px;
  width: $baseCenterWidth;
  // background-color: pink;
  margin: 0 auto;
  position: relative;
  line-height: 44px;
  .movie-grade {
    font-size: 16px;
  }
  .head-bak {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 50%;
    margin-top: -8.5px;
    left: 0;
  }
  .head-share {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 50%;
    margin-top: -8.5px;
    right: 0;
  }
}
.banner {
  .banner-movie-box {
    .movie-title {
      font-size: 18px;
    }
    .movie-star {
      color: #fbc34a;
      padding: 10px 0;
      .movie-star-num {
        vertical-align: middle;
        font-size: 22px;
        color: #fbc34a;
        .movie-moreperson {
          color: #6b6c6e;
          font-stretch: 12px;
        }
      }
    }
  }
  .movie-histogram {
    margin-left: 71px;
    margin-top: 20px;
    .movie-histogram-item {
      width: 22px;
      height: 100px;
      background-color: pink;
      margin-right: 32px;
      background: linear-gradient(
        180deg,
        rgba(241, 162, 99, 1) 0%,
        rgba(242, 94, 132, 1) 100%
      );
      border-radius: 5px;
    }
    .histogram-num {
      margin-bottom: 5px;
      margin-left: -30px;

      color: #fbc34a;
    }
    .movie-hist-person-num {
      margin-top: 5px;
      margin-left: -30px;
      color: #43474d;
    }
  }
  .real-time {
    margin-top: 12px;
    margin-bottom: 15px;
    color: #43474d;
  }
  .banner-bootom {
    width: 100%;
    height: 6px;
    background-color: #33363d;
    margin-bottom: 20px;
  }
  .audience-grad {
    .audience-grad-title {
      margin-bottom: 20px;
      font-size: 16px;
    }
    .men-women {
      margin-left: 32px;
      .men {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 138px;
        height: 36px;
        background-color: #33363d;
        .men-icont {
          width: 20px;
          height: 20px;
        }
      }
      .man-vs-women {
        margin: 12px 7px;
      }
    }
  }
  .audience-year {
    margin-top: 27px;
    margin-left: 38px;
    .audience-year-item {
      margin-bottom: 30px;
      .audience-age {
        font-size: 14px;
        color: #7a7d81;
      }
      .audience-lin {
        margin-left: 10px;
        margin-right: 20px;
        border-radius: 5px;
        width: 135px;
        height: 12px;
        background: linear-gradient(
          180deg,
          rgba(241, 162, 99, 1) 0%,
          rgba(242, 94, 132, 1) 100%
        );
      }
      .movie-num {
        color: #ad8b40;
        font-size: 14px;
      }
    }
  }
  .foot-lin {
    width: 134px;
    height: 5px;
    background-color: #64676c;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 21px;
  }
}
</style>
