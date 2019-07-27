<!--  -->
<template>
<div class='success-main'>
    <div class="header">
      <router-link tag="div" :to="{name:'main'}"  class="icons" >
      <img src="@/assets/imgs/icons/arr-left.png" alt class="icons icons-serch" >
      </router-link>
       <p>我的影票订单</p>
    </div>
    <div class="count-bar">
        <div class="count-box"  >
           <div class="box" v-for="m in detail" :key="m.id" >
             <p class="ours">{{m.title}}</p>
             <p class="datas">今天 5-8 12:00-13:56 （英语3D)</p> 
             <p class="site">耀莱成龙影城（建业店）</p> 
             <p class="site-c"> 1号激光厅 7排12座 7排13座</p>    
              <!-- <img class="pic" src="@/assets/imgs/movie/houlai.png" alt=""> -->
             <img class="pic" v-for="m in detail" :key="m.id" :src="'https://images.weserv.nl/?url='+m.images.small" alt> 
           </div>
          <span class="bead"></span>
        <span class="bead-c"></span>
          
    </div>
    <div class="code">
        <div class="source">
         <p class="code-c">取票码:</p>
         <p class="code-q">284856992589858F</p>
         <p class="code-t">33元</p>
        </div>
        <img class="pics" src="@/assets/imgs/movie/re.png" alt="">
        <p class="zouue">形状结合</p>
        <div class="adds">
           <div class="adds-c">
             <p class="bar">耀莱成龙影城（建业店）</p>  
             <p class="bars">13km</p>
           </div>
            <div class="adds-c">
               <p class="bar">地址：云龙区万达广场3层</p>  
               <img class="der" src="@/assets/imgs/icons/phones.png" alt>
           </div>
           
        </div>
      
    </div>
            

    </div>
    
  
</div>
</template>

<script>

 import Axios from "axios";
export default {
    name:"finally",

components: {},
data() {
//这里存放数据
return {
        detailImgs: []
};
},

  created() {
    Axios.get("http://59.110.138.169/api/douban/movie/in_theaters").then(
      res => {
        this.detailImgs = res.data.data;
      }
    );
  },

methods: {
},
 computed: {
    detail(){
      return this.detailImgs.splice(1,1);
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.success-main{
background:rgba(51,54,61,1);
.header{
  padding: 0 $basePadding;
  box-sizing: border-box;  
 //   position: fixed;
 // //   top: 0;
 //   left: 0;
  width: 100%;
  font-size: 20px;
  text-align: center;
  height: 80px;
  line-height: 40px;
  z-index: 9999;
  .icons {
      width: 11px;
      height: 18px;
      position: absolute;
      display: block;
      left: 16px;
      top: 10px;
    }
}
.count-bar{
    position: relative;
    background-color: aliceblue;
    width: 340px;
    height: 230px;
    margin:0 auto;
   .bead{
     position: absolute;
     left: -10px;
     bottom: -10px;
     border-radius: 50%;
     display: block;
     width: 20px;
     height: 20px;
    background:rgba(51,54,61,1);
   }
    .bead-c{
     position: absolute;
     right: -10px;
     bottom: -10px;
     border-radius: 50%;
     display: block;
     width: 20px;
     height: 20px;
     background:rgba(51,54,61,1);
   }
   .count-box{   
    position: relative;
    width: 100%;
    height: 230px;

    .box{
     text-align: left;
     width: 100%;
     height: 100%;
    //  background-color: aqua;
     overflow: hidden;
     .ours{
      margin-left: 15px;
      margin-top: 33px;
      width:90px;
      height:25px;
      font-size:18px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(58,58,58,1);
      line-height:25px;    
     }
     .datas{
       width:180px;
       height:17px;
       font-size:12px;
       font-family:PingFangSC-Regular;
       font-weight:400;
       color:rgba(58,58,58,1);
       line-height:20px;
       margin-left: 15px;  
     }
     .site{
       width:132px;
       height:17px;
       font-size:12px;
       font-family:PingFangSC-Regular;
       font-weight:400;
       color:rgba(58,58,58,1);
       line-height:25px;
       margin-left: 15px;   
     }
     .site-c{
      width:160px;
      height:17px;
      font-size:12px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(58,58,58,1);
      line-height:30px;
      margin-left: 15px;   
     }
    }
    .pic{
      position: absolute;
      top: 25px;
      right: 30px;
      width: 78px;
      height: 114px;
    
    }
   }
  
}   
.code{
  width: 100%;
  height: 280px;
  background-color: aliceblue;
  .source{
    width: 100%;
    height: 40px;  
    display: flex;
    justify-content:  space-between ;
    .code-c{
     width:46px;
     height:20px;
     font-size:14px;
     font-family:PingFangSC-Regular;
     font-weight:400;
     color:rgba(58,58,58,1);
     line-height:20px;
     margin-left: 20px;   
    }  
    .code-q{
     width:135px;
     height:20px;
     font-size:14px;
     font-family:PingFangSC-Regular;
     font-weight:400;
     color:rgba(58,58,58,1);
     line-height:20px;   
    }
    .code-t{
      width:31px;
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(58,58,58,1);
      line-height:20px;
      margin-right: 20px;  
    }
  }
   .pics{
    width: 144px;
    height: 144px;  
   }
   .zouue{
    font-size:10px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(58,58,58,1);
    line-height:14px;
    margin-top: 10px;

   }
   .adds{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    box-shadow:5px 5px 3px 4px rgba(51,54,61,1);
    .adds-c{
     width: 270px;
     margin: 0 auto;
     display: flex;
     margin-top: 15px;
     justify-content:  space-between ;
     .bar{
      font-size: 14px;
      color: black;
     }
     .bars{
       font-size: 16px;
       color: black;  
     }
     .der{
       width: 18px;
       height: 18px;
       margin-right: 14px;  
     }  
    }

   }
}  
}
</style>