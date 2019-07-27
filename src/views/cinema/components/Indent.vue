router-link<template> 
   <!-- 头部 -->
  <div class="Indent-main">
       <!-- 箭头 -->
     <span @click="$router.go(-1)" class="ico">
        <img src="@/assets/imgs/icons/arr-left.png" alt>
     </span>
     <div class="details-bar">
        <p class="laters">{{getTitle.title}}</p>
        <p class="datas">今天2月1日 17:10（原版2D)</p>
        <p class="site">耀莱成龙影城（建业店）</p>
        <p class="sites">3号激光厅 6排9座</p>
     </div>
     <div class="orders">
       <ul class="orders-ul">
           <li class="orders-li">
              <a class="sale" href="#">电影优惠券</a>
              <span>
                <p class="discounts">一张优惠券可用</p>
                  <img class="anarr" src="@/assets/imgs/icons/arrrig.png" alt>
              </span>
           </li>
              <li class="orders-li">
              <a class="sale" href="#">会员卡</a>
              <span>
                <p class="discounts">去使用</p>
                  <img class="anarr" src="@/assets/imgs/icons/arrrig.png" alt>
              </span>
           </li> 
           <li class="orders-li">
               <a class="moneys" href="#">票价总计</a>
               <p class="mones">33元</p>

           </li>
           <li class="orders-li">
               <p class="android">手机号</p>
               <p class="ticket">购票成功后将收到取票码</p>
               <p class="phones">13525333034</p>
           </li>
       </ul>
     </div>
     <div class="affirm">
        <div class="declare">
            <p class="wacths">查看退票、改签协议 </p>
            <img class="pic" src="@/assets/imgs/icons/arrd.png" alt>
        </div> 
         <div class="declares">
            <div class="wacthss">
                <p class="needs"> 还需支付:</p>   
               <p class="monesy"> 33元</p>
                </div>
            <img class="pics" src="@/assets/imgs/icons/arrd.png" alt>
        </div>
          <router-link tag="span" :to="{name:'success'}"  class="notarize">确认订单</router-link> 
     </div>
  </div>


</template>

<script>
import Axios from 'axios'
export default {
  name: 'Indent',

  data () {
    return {
      movieList:[]
    }
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
      console.log( this.movieList.find(item => item.id == this.$route.params.id))
      return this.movieList.find(item => item.id == this.$route.params.id)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
 .Indent-main{
   width: 100%;
   height: 253px;
   padding: 0 $basePadding;
   box-sizing: border-box; 
   background: url(~@/assets/imgs/movie/our.png) center center no-repeat;
   background-size: 100% 100%;
   .ico {
      display: block;
      width: 20px;
      height: 20px;
      img {
        padding-top: 10px;
        display: block;
        width: 10px;
        height: 18px;
      }
   }
   .details-bar{
    margin-top: 30px;
    width: 180px;
    height: 200px;
    // border: 1px solid red;
    .laters{
    //  width:120px;
     height:33px;
     font-size:20px;
     font-family:PingFangSC-Medium;
     font-weight:500;
     text-align: left;
     color:rgba(255,255,255,1);
     line-height:33px;
    } 
    .datas{
     width:180px;
     height:20px;
     font-size:14px;
     font-family:PingFangSC-Regular;
     font-weight:400;
      color:rgb(133, 119, 162);
   
     line-height:20px;
     margin-top: 10px;
    }
    .site{ 
     width:160px;
     height:20px;
     font-size:14px;
     font-family:PingFangSC-Regular;
     font-weight:400;
     color:rgb(168, 162, 162);
     line-height:20px; 
     margin-top: 10px;
    }
    .sites{
     width:114px;
     height:20px;
     font-size:14px;
     font-family:PingFangSC-Regular;
     font-weight:400;
     color:rgb(168, 162, 162);
     line-height:20px;  
     margin-top: 10px;  
    }  
   }
   .orders{
    width:335px;
    height:209px;
    background:rgba(51,54,61,1);
    border-radius:6px;
    .orders-ul{
      width: 100%;      
      .orders-li{
       position: relative;
       width: 100%;
       margin: 2px;
       height: 50px;  
        display: flex;
        justify-content:space-between;
        align-items:center;
        .sale{
         width:80px;
         height:22px;
         font-size:16px;
         text-align: left;
         font-family:PingFangSC-Regular;
         font-weight:400;
         color:rgba(255,255,255,1);
         line-height:22px; 
         text-decoration: none;
          margin-left: 10px;  
        } 
        .discounts{
          display: block;
          margin-right: 20px;
          width:100px;
          height:17px;
          font-size:12px;
          text-align: right;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(249,195,74,1);
          line-height:22px;
        }
        .anarr{
         position: absolute;
         top: 23px;
         right: 10px;
         width:10px;
         height:10px;
         margin-bottom: 20px;

        }
        .moneys{
         width:64px;
         height:22px;
         font-size:16px;
         font-family:PingFangSC-Regular;
         font-weight:400;
         color:rgba(255,255,255,1);
         line-height:22px; 
         text-decoration: none;
         margin-left: 10px;     
        }
        .mones{
         width:50px;
         height:28px;
         font-size:18px;
         font-family:PingFangSC-Medium;
         font-weight:500;
         color:rgba(194,19,19,1);
         line-height:28px; 
         margin-right: 8px;  
        }
        .android{
         position: absolute;
         top: 2px;
         left: 0;
         width:48px;
         height:22px;
         font-size:16px;
         font-family:PingFangSC-Regular;
         font-weight:400;
         color:rgba(255,255,255,1);
         margin-left: 8px;
        }
        .ticket{
          float: left;
          text-align: left;   
          width:160px;
          height:17px;
          font-size:12px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:22px;
          margin-left: 7px;
          margin-top: 3px;  
        }
        .phones{
          width:89px;
          height:20px;
          font-size:14px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:20px;
          margin-right: 5px;   
        }
      }  
    }  
   }
   .affirm{
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 145px;
    .declare{
     margin-top: 25px;
     position: relative;
     width: 150px;
     height: 17px;
     font-size: 12px;
     margin-left: 15px;
     .wacths{
      width:108px;
      height:17px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:17px;   
     }   
     .pic{
      position: absolute;
      top:8px;
      left: 120px;
      display: inline-block;
      width: 17px;
      height: 7px;   
     }  
    }
    .declares{
     position: absolute;
     top: -35px;
     right: 0;
     float: right;
     margin-top: 20px;
     position: relative;
     width: 150px;
     height: 17px;
     font-size: 12px;
     margin-left: 15px;
     .wacthss{
    //   display: inline-block;
      width:140px;
      height:17px;
      font-size:12px;
      font-size: 16px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:17px;
      .needs{
        display:inline-block;  
      } 
      .monesy{
        display:inline-block;
        font-size: 16px; 
        margin-left: 4px;
        color: crimson;

      }  
     }   
     .pics{
      position: absolute;
      top:8px;
      left: 125px;
      display: inline-block;
      width: 17px;
      height: 7px;   
     }  
    }
    .notarize {
      display: block;
      width: 100%;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
      margin-top: 40px;
      border-radius: 6px;
      background: linear-gradient(left, #f25b86, #f1ac5e);
    }
   }
 }
</style>
