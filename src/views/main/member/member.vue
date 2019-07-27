<template>
  <div class="main-main">
    <div class="head-top-bg">
      <div class="icon" @click="$router.go(-1)"></div>
      <div class="center">
        <div class="portrait"></div>
        <h1>
          yujia1130
          <span>
            <i></i>LV1
          </span>
        </h1>
        <p>同学有点懒，还没有写签名</p>
        <div class="button-bg">
          <div class="left-button">
            <div class="button">
              <p>想看</p>
              <p>12</p>
            </div>
          </div>
          <div class="left-button">
            <router-link tag="div" to="/News" class="button">
              <p>看过</p>
              <p>5</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="text">
        <h1>看过电影</h1>
      </div>

      <div class="container" v-for="n in kk" :key="n.id">
        <div class="content-1 content">
          <div class="container-head-top">
            <ul>
              <li v-for="k in n.zs" :key="k.id">
                <img src="../../../assets/imgs/indent/星复制 2.png" alt>
              </li>
              <li>{{n.rating.average}}分，{{getaverage(n.rating.average)}}</li>
            </ul>
          </div>
          <img :src="'https://images.weserv.nl/?url='+n.images.small" alt>
          <div class="content-text">
            <h1>{{n.title}}</h1>
            <p>{{n.ge}}</p>
            <p>中国/{{n.gs}}分钟</p>
            <p>购票时间 {{n.year}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <v-icon style="color:red;height:30px;" name="sync" spin></v-icon> -->
  </div>
</template>
<script>
import axios from "axios";

import Mock from 'mockjs';

var Random=Mock.Random;

export default {
  name: "member",
  data() {
    return {
      todo: [],
      fs:'',
    };
  },
  methods: {
    getaverage(average){
      if(average<3){
        return "差劲"
      }else if(average<7){
        return "一般"
      }else{
        return "很好"
      }
    }
  },
  components: {
      
  },
  created() {
    axios
      .get("http://www.bufantec.com/api/douban/movie/in_theaters/?start=3&limit=5")
      .then(res => {
        this.todo = res.data.data;
        // console.log(this.todo);
      });
  },
  computed: {
    kk() {
      var gg = this.todo.map(item => {
        item.ge = item.genres.reduce((a, b) => {
          var str = a + "/" + b;
          // console.log(str);
          return str;
        },'');
        item.zs=parseInt(item.rating.average);
        item.gs=Random.integer(60,120);
        // console.log(item.gs);
        // console.log(item.zs);
        

        item.ge=item.ge.substr(1);
        // console.log(item.ge);
        // console.log(gg);
        return item;


      });
      return gg;
      // console.log(gg);
      

    }
  }
};
</script>

<style lang="scss" scoped>
.head-top-bg {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 277px;
  background: linear-gradient(
    to right,
    rgba(242, 98, 132, 0.938),
    rgba(241, 163, 99, 0.925)
  );
  border-radius: 29px;
  .icon {
    margin-top: 58px;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    background-image: url("../../../assets/imgs/indent/返回-1.png");
    background-size: 100%;
    // background-color: darkblue;
  }
  .center {
    width: 336px;
    height: 185px;
    background-color: #33363d;
    margin: 45px auto 0;
    border-radius: 17px;
    .portrait {
      position: relative;
      width: 73px;
      height: 73px;
      background-color: saddlebrown;
      background: url("../../../assets/imgs/indent/点击查看源网页.png");
      background-size: 100%;
      border-radius: 50%;
      margin: 0 auto -25px;
      position: relative;
      top: -34px;
    }
    h1 {
      display: flex;
      justify-content: center;
      align-content: center;
      font-size: 18px;
      span {
        margin-left: 6px;
        display: inline-block;
        width: 50px;
        height: 18px;
        border-radius: 10px;
        border: 1px solid #fbc349;
        font-size: 10px;
        line-height: 18px;
        color: #fbc349;
        i {
          margin: 3px 0 0 6px;
          float: left;
          width: 12px;
          height: 12px;
          display: block;
          background-color: darkcyan;
          background: url("../../../assets/imgs/indent/会员.png");
        }
      }
    }
    p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.384);
      margin-top: 10px;
      letter-spacing: 2px;
    }
  }

  .button-bg {
    display: flex;
    overflow: hidden;
    .left-button {
      margin: 35px auto 0;
      background: linear-gradient(to right, #f26084, #f19f64);
      width: 134px;
      height: 37px;
      border-radius: 10px;
      &:nth-child(2) {
        background: linear-gradient(to right, #3c4cac, #c64597);
      }
    }
    .button {
      display: flex;
      margin: 1px auto;
      width: 98.5%;
      height: 35px;
      background-color: #33363d;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      p {
        margin-top: 0;
        line-height: 37px;
        color: #ffffff;
      }
    }
  }
  .text {
    margin-top: 30px;
    h1 {
      font-weight: 700;
      font-size: 18px;
      margin-left: 20px;
      text-align: start;
    }
  }
  .container {
    .content {
      overflow: inherit;
      position: relative;
      display: flex;
      margin: 38px auto;
      width: 335px;
      height: 120px;
      background-color: #33363d;
      border-radius: 10px;
      img {
        height: 100%;
        width: 94px;
      }
      .container-head-top {
        position: absolute;
        z-index: 999;
        top: -20px;
        ul {
          overflow: hidden;
          li {
            float: left;
            margin-right: 4px;
            color: #fbc34a;
            img {
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
    .content-text {
      text-align: left;
      overflow: hidden;
      margin: auto 20px;
      h1 {
        font-weight: 700;
        font-size: 16px;
        margin-top: 10px;
      }
      p {
        margin: 10px 0;
        font-size: 12px;
      }
    }
  }
}
</style>


