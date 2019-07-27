<template>
  <div class="Office-main">
    <div class="header">
      <img @click="$router.go(-1)" class="arr-left" src="@/assets/imgs/icons/arr-left.png" alt>
      <p class="header-title">{{moviedetail[0].title}}</p>
    </div>
    <div class="menu">
      <div class="menu-title">
        <p class="number">2</p>
        <p>今日票房排行</p>
      </div>
      <div class="menu-title">
        <p class="number number-c">暂无</p>
        <p>首周票房（万）</p>
      </div>
      <div class="menu-title">
        <p class="number">2660</p>
        <p>今日票房排行</p>
      </div>
    </div>
    <span class="line"></span>

    <div class="subnav">
      <p class="subnav-title">总票房</p>
      <div class="box-office">
        <div class="box-data">
          <p class="box-data-title">地区</p>
          <p>中国</p>
        </div>
        <div class="box-data">
          <p class="box-data-title">每周末票房</p>
          <p>暂无数据</p>
        </div>
        <div class="box-data">
          <p class="box-data-title">总票房</p>
          <p>501万元</p>
        </div>
      </div>
    </div>
    <span class="line"></span>

    <div class="submenu">
      <p class="submenu-detail">日票房明细</p>
      <p>单位：万元</p>
    </div>
    <div class="submenu-2">
      <p>日期</p>
      <div class="submenu-2-a">
        <p>当日票房</p>
        <p>票房占比</p>
        <p>拍片占比</p>
        <p>场次人次</p>
      </div>
    </div>
    <div class="submenu-3">
      <div class="submenu-3-title">
        <p>2018-05-18</p>
        <p>周六上映首日</p>
      </div>
      <div class="submenu-3-data">
        <p>538.6</p>
        <p>8.3%</p>
        <p>21.3%</p>
        <p>3</p>
      </div>
    </div>
    <div class="submenu-3">
      <div class="submenu-3-title">
        <p>2018-05-17</p>
        <p>周五零点场</p>
      </div>
      <div class="submenu-3-data">
        <p>- -</p>
        <p>- -</p>
        <p>0.0%</p>
        <p>0</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import movieApi from "@/assets/api/detail";
export default {
  name: "Office.vue",

  data() {
    return {
      moviedetail: []
    };
  },
  created() {
    this.getMovie();
  },
  methods: {
    getMovie() {
      axios
        .get(movieApi.in_theaters)
        .then(res => (this.moviedetail = res.data.data));
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.Office-main {
  .header {
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    .arr-left {
      float: left;
      width: 13px;
      height: 19px;
    }
    .header-title {
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  .menu {
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    color: #6e7176;
    .menu-title {
      line-height: 25px;
      .number {
        font-size: 18px;
        color: #fbc34a;
      }
      .number-c {
        color: #ffffff;
      }
    }
  }
  .line {
    display: block;
    width: 100%;
    height: 6px;
    margin-top: 10px;
    background: rgba(51, 54, 61, 1);
  }
  .subnav {
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    margin-top: 30px;
    .subnav-title {
      font-size: 16px;
      text-align: left;
    }
    .box-office {
      margin-top: 17px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: rgba(255, 255, 255, 1);
      .box-data {
        line-height: 30px;
        .box-data-title {
          font-size: 12px;
          font-weight: 500;
          color: #6e7176;
        }
      }
    }
  }
  .submenu {
    margin-top: 20px;
    width: 100%;
    padding: 0 $basePadding;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    color: #6e7176;
    .submenu-detail {
      font-size: 16px;
    }
  }
  .submenu-2 {
    margin-top: 30px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .submenu-2-a {
      width: 252px;
      display: flex;
      justify-content: space-between;
    }
  }
  .submenu-3 {
    margin-top: 20px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: left;
    .submenu-3-title{
        line-height: 15px;
    }
    .submenu-3-data {
      width: 240px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
