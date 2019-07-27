<!--  -->
<template>
  <div class="citye-main">
    <div class="city-nav1" ref="foodsWrapper">
      <ul class="box">
        <div class="content">
          <div class="nowcity">
            <p class="title">定位城市</p>
            <div  class="cityname active"  @click="setCityName(item.name);$router.go(-1)">郑州</div>
          </div>
          <div class="lookcity">
            <p class="title">历史访问城市</p>
            <div   @click="setCityName(item)"  class="cityname" v-for="item in hostoryCity" :key="item">{{item}}</div>
          </div>
          <div class="hotcity">
            <p class="title">热门城市</p>
            <div   @click="setCityName(item.name);$router.go(-1)" class="cityname" v-for="item in cityList.hot" :key="item.id">{{item.name}}</div>
          </div>
        </div>
        <p class="title">A</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.A" :key="item.id">{{item.name}}</div>

        <p class="title">B</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.B" :key="item.id">{{item.name}}</div>

        <p class="title">C</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.C" :key="item.id">{{item.name}}</div>

        <p class="title">D</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.D" :key="item.id">{{item.name}}</div>

        <p class="title">E</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.E" :key="item.id">{{item.name}}</div>

        <p class="title">F</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.F" :key="item.id">{{item.name}}</div>

        <p class="title">G</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.G" :key="item.id">{{item.name}}</div>

        <p class="title">H</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.H" :key="item.id">{{item.name}}</div>

        <p class="title">I</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.I" :key="item.id">{{item.name}}</div>

        <p class="title">J</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.J" :key="item.id">{{item.name}}</div>

        <p class="title">K</p>
        <div   @click="setCityName(item.name);$router.go(-1)"  class="ecity" v-for="item in cityList.K" :key="item.id">{{item.name}}</div>

        <p class="title">L</p>
        <div   @click="setCityName(item.name);$router.go(-1);$router.go(-1)" class="ecity" v-for="item in cityList.L" :key="item.id">{{item.name}}</div>
        <p class="title">M</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.M" :key="item.id">{{item.name}}</div>
        <p class="title">N</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.N" :key="item.id">{{item.name}}</div>
        <p class="title">O</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.O" :key="item.id">{{item.name}}</div>
        <p class="title">P</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.P" :key="item.id">{{item.name}}</div>
        <p class="title">Q</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.Q" :key="item.id">{{item.name}}</div>
        <p class="title">R</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.R" :key="item.id">{{item.name}}</div>
        <p class="title">S</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.S" :key="item.id">{{item.name}}</div>
        <p class="title">T</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.T" :key="item.id">{{item.name}}</div>
        <p class="title">U</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.U" :key="item.id">{{item.name}}</div>
        <p class="title">V</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.V" :key="item.id">{{item.name}}</div>
        <p class="title">W</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.W" :key="item.id">{{item.name}}</div>
        <p class="title">X</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.X" :key="item.id">{{item.name}}</div>
        <p class="title">Y</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.Y" :key="item.id">{{item.name}}</div>
        <p class="title">Z</p>
        <div   @click="setCityName(item.name);$router.go(-1)" class="ecity" v-for="item in cityList.Z" :key="item.id">{{item.name}}</div>
      </ul>
    </div>
    <div class="box2">
      <ul class="city-nav" @touchstart.stop="goThouch" @touchmove.prevent="goThouchMove">
        <li class="city-list text" index="0">定位</li>
        <li class="city-list text" index="1">历史</li>
        <li class="city-list text" index="2">热门</li>
        <li v-for="(item,index) in cityE" :key="item" class="city-list" :index="index+3">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";
import axios from "axios";
import { parse } from "path";
export default {
  name: "CityE",
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      cityList: [],
      cityE: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      touchY: {
        // 写一个对象，里面有刚开始的坐标和刚开始的Y，都为空，触摸时改变
        goIndex: 0,
        touchScrolly: 0,
        touchScrolly2: 0
      }
    };
  },

  computed:{
    hostoryCity(){
      return this.$store.state.City.hostoryCity
    }
  },
  methods: {
    initScroll() {
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        // 使用better后div无法生效了，所以需要写上click:true
        click: true,
        probeType: 3
      });
      this.foodsScroll.on("scroll", pos => {
        //y轴坐标
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    selectMenu(i) {
      // 获取左侧城市的title选取相应的位置
      var foodList = this.$refs.foodsWrapper.getElementsByClassName("title");
      var el = foodList[i];
      // 滚动到当前
      this.foodsScroll.scrollToElement(el, 300);
    },
    getCity() {
      axios.get("/cityData.json").then(res => {
        this.cityList = res.data;
      });
    },
    //     滑动首先获取第一次触摸时的pageY和index然后获取触摸之后每次滑动时的pageY两个pageY相减就可以知道它滑动的距离滑动的距离再除以每个字母列表的高度，得到滑动了多少个字母然后将第一次触摸获取的index加上滑动字母的个数，就可以算出滑到了哪个字母。最后调用srcoll的srcollToElement方法滑动到对应的元素上。因为滑动事件需要用到第一次触摸事件时得到的index和pageY，所以我们在creaded生命钩子中设一个this.touch = {}空对象，存储获取的index和pageY。
    goThouch(e) {
      //第一次点击进来可以获取下标   获取当前鼠标的Y坐标   获取每个Li的高度
      this.touchY.goIndex = e.target.getAttribute("index");
      this.touchY.touchScrolly = e.touches[0].pageY;
      this.selectMenu(this.touchY.goIndex);
    },
    goThouchMove(e) {
      var liH = e.target.offsetHeight;
      this.touchY.touchScrolly2 = e.touches[0].pageY;
      // test是滚动距离减去初始距离除以Li高度
      var test =
        Math.floor(
          Math.abs(this.touchY.touchScrolly2 - this.touchY.touchScrolly) / liH
        ) ;
      if (test > 29) {
        test = 29;
      } else if (test < 0) {
        test = 0;
      }
     
      this.selectMenu(test);
    },
    setCityName(name){
      this.$store.commit("City/setName",name)
      this.$store.commit("City/hostoryName",name)
    }
  },
  created() {
    this.getCity();
    setTimeout(() => {
      this.initScroll();
    }, 20);
  }
};
</script>
<style lang='scss' scoped>
.city-nav1 {
  margin-top: 30px;
  height: 500px;
  width: 100%;
  overflow: hidden;
  .box {
    // height: 100%;
    width: 100%;
  }

  .title {
    width: 100%;
    display: block;
    font-size: 12px;
    color: #f7f7f7;
    text-align: left;
    text-indent: 20px;
    margin-top: 20px;
  }
  .ecity {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    text-indent: 20px;
    font-size: 14px;
  }
}

.city-nav {
  position: fixed;
  top:110px;
  right: 20px;
  width: 24px;
  // background-color: #fff;
  font-size: 12px;
  height: 100%;
  text-align: center;
  .city-list {
    width: 30px;
    height: 18px;
    // padding: 5px;
    color: #828282;
    &.text {
      color: #f1a363;
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    display: block;
    font-size: 12px;
    color: #f7f7f7;
    text-align: left;
    text-indent: 20px;
    margin-top: 20px;
  }
  .cityname {
    margin-top: 20px;
    width: 90px;
    height: 30px;
    background: rgba(51, 54, 61, 1);
    line-height: 30px;
    text-align: center;
    margin-left: 20px;
    box-sizing: border-box;
    // float: left;
    &.active {
      border: 2px solid rgba(249, 195, 74, 1);
      
    }
  }

   .lookcity,.hotcity {
    height: 100%;
    overflow: auto;
    .cityname {
      float: left;
    }
  }
  .ecity {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    text-indent: 20px;
    font-size: 14px;
  }
}
</style>