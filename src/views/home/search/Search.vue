<template>
  <div class="search-main">
  <TopBackBar>
      <template v-slot:img-left>
          <span></span>
        </template>
        <div class="search-header">
    <input :to="{name:'Search'}" class="header-search" type="text" placeholder="搜影片，影院，影人" v-model="searchText">
    <ul class="header-nav" v-show="searchShow">
      <router-link tag='li' class="header-list" v-for="item in getSearchList" :key="item.id" :to="{name:'moveitem',params:{id:item.id}}" @click.native="clearText()">
        <img  :src="'https://images.weserv.nl/?url='+item.images.medium"  alt  class="header-img">
              <span class="list-text">{{item.title}}</span>
              <br>
              <span  class="list-text">类型：<span v-for="geners in item.genres" :key="geners">{{geners}}</span></span >
              <br>
              <span  class="list-text">演员：<span v-for="casts in item.casts" :key="casts.id">{{casts.name}}</span></span >
              <br>
              <span  class="list-text">年份：{{item.year}}</span >
             
      </router-link>
    </ul>
    </div>
     <template v-slot:img-right>
          <span class="close" @click="$router.go(-1);clearText()">取消</span>
        </template>
  </TopBackBar>
  <div class="search-hot"><img src="@/assets/imgs/home/search_color.png" alt="" class="search-color">萤火虫热搜</div>
  <ul class="hot-nav">
    <li class="hot-list">一条狗的使命</li>
    <li class="hot-list">哥拉斯2：怪兽之王</li>
    <li class="hot-list">大鱼海棠</li>
    <li class="hot-list">下一任：前任</li>
    <li class="hot-list">人间.小团圆</li>
    <li class="hot-list">音乐家</li>
    <li class="hot-list">爱你直到世界尽头</li>
    <li class="hot-list search">更多热搜</li>
  </ul>
  </div>
</template>

<script>
import axios from "axios"
import TopBackBar from "@/components/TopBackBar";
export default {
  
  name: 'Search',
  components:{
    TopBackBar
  },
  data () {
    return {
        searchText:'',
        comingList:[],
        hotList:[],
        searchList:[],
        searchShow:false

    }
  },
  computed:{
    getSearchList(){
     
      console.log( this.hotList)
      if(this.searchText && this.hotList.length != 0){
        this.searchShow = true
      
        return this.hotList.filter(item =>{
            console.log(item.title.includes(this.searchText))
          return item.title.includes(this.searchText)
        })
      }else{
       return  this.searchShow = false
      }
    }
  },
  methods: {
    getHotMovies() {
      axios
        .get("http://59.110.138.169/api/douban/movie/in_theaters")
        .then(res => {
          this.hotList = res.data.data;
        });
    },
    clearText(){
      this.searchText = ""
    }
  },
  created(){
    this.getHotMovies()
  }
}
</script>

<style lang='scss' scoped>

  .search-header{
    width: 100%;
    position: relative;
    .header-nav{
      position: absolute;
      left: 0;
      top: 55px;
      width: 335px;
    // height: 300px;
    overflow: hidden;
   background:rgba(51,54,61,1);
    float: left;
    padding: 15px;
    // margin-left: -20px;
    border-radius: 10px;
    padding-top: 0;
    .header-list{
      width: 100%;
      height: 120px;;
      
      text-align: left;
      margin-top: 30px;
      .header-img{
        float: left;
        width: 90px;
        height: 122px;
      }
      .list-text{
        margin-left: 20px;
        line-height: 30px;
      }
    }
  }
  .header-search {
    width: 298px;
    height: 36px;
    float: left;
    border-radius: 18px;
    background: url(~@/assets/imgs/home/search.png) left center no-repeat rgba(51, 54, 61, 1);
    background-size: 17px 17px;
    background-position: 12px 9px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    margin-top: 12px;
    outline: none;
    border:none;
    font-size: 14px;
    color: #7A7A7A;
    line-height: 36px;
    text-indent: 40px;
  }
  }
  .close{
    font-size: 14px;
    line-height: 36px;
     margin-top: 12px;
  }
  .search-hot{
    margin-left: 24px;
    margin-top: 20px;
    text-align: left;
    font-size: 16px;
    color: #7A7A7A;
    line-height: 24px;
    text-indent: 10px;
    .search-color{
      width: 24px;
      height: 24px;
      float: left;
    }
  }
  .hot-nav{
    margin-top: 20px;
    width: 100%;
  
    .hot-list{
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      text-align: left;
      text-indent: 24px;
      margin: 10px auto;
      width: 50%;
      float: left;
      &.search{
color:orange;
      }
    }
  }
</style>
