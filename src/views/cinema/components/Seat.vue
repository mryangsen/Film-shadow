<template>
  <div class="Seat-main">
    <!-- 头部部分 -->
    <div class="header-main">
      <span @click="$router.go(-1)" class="ico">
        <img src="@/assets/imgs/icons/arr-left.png" alt>
      </span>
      <p>耀莱成龙影城（建业店）</p>
      <span class="icos">
        <img class="star" src="@/assets/imgs/icons/btn.png" alt>
      </span>
    </div>
    <!-- 内容部分 -->
    <div class="count-bar">
      <div class="all">
        <p class="my-movie">{{getTitle.title}}</p>
        <p class="datas">15:30—17:14</p>
        <p class="former">原版3D</p>
      </div>
      <ul class="colors">
        <li class="my-color">
          <a class="backs" href="#"></a>
          <p class="select">未选</p>
        </li>

        <li class="my-color">
          <a class="fishe" href="#"></a>
          <p class="select">已选</p>
        </li>
      </ul>
      <div class="movie-seat">3号激光厅荧幕</div>
      <!-- 座位部分 -->
      <div class="seat-bar">
        <!-- <Myseat> </Myseat>        -->
        <Pick></Pick>
      </div>
    </div>
      
    <div class="seating">
        <router-link tag="span" class="notarize" :to="{name:'Indent',params:{id:this.$route.params.id}}">确认订座</router-link> 
    </div>
  </div>
</template>
<script>
// import Myseat from './Myseat'
   import Pick from './Pick'
import Axios from 'axios'
export default {
  name: "Seat",
  components:{
    // Myseat,
    Pick
  },
  data() {
    return {
       detailImgs: [], 
       movieList:[]
    };
  },
  methods: { 
   getMovie(){
     Axios.get("http://59.110.138.169/api/douban/movie/in_theaters").then(res =>{
       this.movieList = res.data.data
     })
   }
     
   },
  created(){
    this.getMovie()
  },
  computed:{
    getTitle(){
   if(this.movieList){
     return this.movieList.find(item => item.id == this.$route.params.id)
   }else{
     var obj = {
       title:'test'
     }
     return obj
   }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.Seat-main {
  padding: 0 $basePadding;
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  background-color: aqua;
  background: url("../../../assets/imgs/movie/reds.png") no-repeat;
  background-size: 375px 200px;
  background-color: #0000;
  .header-main {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 22px;
    p {
      font-size: 16px;
    }
    .ico {
      display: block;
      width: 20px;
      height: 20px;
      img {
        // margin-top: 4px;
        display: block;
        width: 10px;
        height: 18px;
      }
    }
    .icos {
      width: 20px;
      height: 18px;
      .star {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .count-bar {
    .all {
      width: 100%;
      height: 70px;
      .my-movie {
        text-align: left;
        font-size: 16px;
        margin-top: 20px;
      }
      .datas {
        width: 99px;
        height: 23px;
        line-height: 23px;
        margin-top: 13px;
        display: inline-block;
        float: left;
        border-radius: 5px;
        background-color: #33363d;
      }
      .former {
        margin-top: 13px;
        margin-left: 6px;
        width: 61px;
        height: 23px;
        line-height: 23px;
        display: inline-block;
        float: left;
        border-radius: 5px;
        border: 1px solid #33363d;
        overflow: hidden;
      }
    }
    .colors {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      .my-color {
        width: 120px;
        height: 26px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .select {
          display: inline-block;
          line-height: 40px;
          margin-left: 10px;
        }
        .backs {
          display: inline-block;
          margin-left: 10px;
          width: 26px;
          height: 26px;
           background-color: #D8D8D8;
          box-shadow: 0px 2px 4px 0px rgba(76, 41, 49, 0.54);
          border-radius: 6px;
        }
        .blocks {
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-left: 30px;
          background-color:#000;
          box-shadow: 0px 2px 4px 0px rgba(76, 41, 49, 0.54);
          border-radius: 6px;
        }
        .fishe {
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-left: 45px;
          background-color: red;
          box-shadow: 0px 2px 4px 0px rgba(76, 41, 49, 0.54);
          border-radius: 6px;
        }
      }
    }
    .movie-seat {
      width: 120px;
      height: 20px;
      background-color: brown;
      margin: 28px auto;
      line-height: 20px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }

    //  选座部分
    .seat-bar {
      width: 100%;
      height: 300px;
      // border: 1px solid red;
      .inner-seat-wrapper {
        width: 100%;
        height: 200px;
        .seat {
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #909294;
          border-radius:3px;
          margin: 2.3px;
        }
      }
    }
  } //count结束

  //  确认订座
  .seating {
    width: 100%;
    height: 60px;
    // border: 1px solid red;
    .mend {
      width: 100%;
      text-align: left;
      margin-top: 30px;
      margin-left: 15px;
      button {
        width: 55px;
        height: 23px;
        margin-left: 6px;
        font-size: 14px;
        opacity: 0.529;
        border: 1px solid rgba(151, 151, 151, 1);
      }
      .comme {
        display: inline-block;
        font-size: 16px;
      }
    }
    .notarize {
      display: block;
      width: 100%;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
      margin-top: 20px;
      border-radius: 6px;
      background: linear-gradient(left, #f25b86, #f1ac5e);
    }
  }
}
</style>
