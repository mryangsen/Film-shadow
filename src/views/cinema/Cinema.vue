<template>
  <div class="cinema-main">
    <div class="header">
        <router-link tag ='div' :to="{name:'city'}" class="header-left">
            <span>{{cityName}}</span>
            <img src="@/assets/imgs/home/bottom.png" alt="" class="header-right">
        </router-link>
        <h2 class="title">影院</h2>
        <router-link tag ='div' class="search" :to="{name:'Search'}">
            <img class="icon icon-search" src="@/assets/imgs/icons/search.png" alt>
        </router-link>
    </div>
    <div class="site-c">
        <img class="icon icon-site" src="@/assets/imgs/icons/site.png" alt>
        <p class="site-p">我在: 金水区绿地新都会</p> 
    </div>
    <div class="cinema-list"> 
        <router-link tag="div" :to="{name:'atlas',params:{id:movie.id,name:movie.name,dis:movie.dis}}" class="cinema-card" v-for="movie in getCinema" :key="movie.id">
            <div class="item-title">
                <span class="name">{{movie.name}}</span>
                <span class="price"><span class="money">{{movie.price}}元</span>起</span>
            </div>
            <div class="item-site">
                <span class="place">{{movie.site}}</span>
                <span class="distance">{{movie.dis}}km</span>
            </div>
            <ul class="discounts">
                <li class="item-discounts">
                    <span class="benefit">惠</span>
                    <span class="lock">{{movie.pes2}}</span>
                </li>
                <li class="item-discounts">
                    <span class="promote">促</span>
                    <span class="lock">{{movie.pes3}}</span>
                </li>
                <li class="item-discounts">
                    <span class="cal">卡</span>
                    <span class="lock">{{movie.pes4}}</span>
                </li>
            </ul>
        </router-link>
    </div>
  </div>
</template>

<script>
import cinemaApi from '@/api/cinema/cinema'
export default {
    name: "Movie",

    data() {
        return {
            getCinema:[]
        };
    },
    created(){
        this.getLook()
    },
    methods: {
        getLook(){
            cinemaApi.getCinema()
            .then(res => {
                this.getCinema = res;
            })
        }
    },
    computed:{
    cityName(){
      return this.$store.getters["City/CityName"]
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.cinema-main {
  background-color: $baseBgLightColor;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 0 $basePadding;
    display: flex;
    justify-content: space-between;
    background-color: rgba(51,54,61,1);
    z-index: 99999;
    .header-left{
        margin: 18px;
        font-size: 14px;
        color:rgba(223,223,223,1);
        img{
            margin-left: 4px;
            width: 12px;
            height: 6px;
        }  
    }
    .title {
        position: absolute;
       width: 40px;
       text-align: center;
        left:50%;
        margin-left: -20px;
      font-size: 18px;
      line-height: 44px;
      color: #fff;
    }
    .search {
      width: 17px;
      height: 17px;
      margin-top: 11px;
      .icon-search {
        width: 100%;
        height: 100%;
      }
    }
  }
  .site-c{
        position: absolute;
        top:44px;
        left: 0;
        width: 100%;
        height: 30px;
        margin: 12px 0;
        background-color: rgba(51,54,61,1);
        box-sizing: border-box;
        padding: 0 40px;
        text-align: left;
        z-index: 9999;
        .icon-site{
            position: absolute;
            left: 20px;
            top: 7px;
            width: 13px;
            height: 16px;
            line-height: 30px
        }
        .site-p{
            display: inline-block;
            font-size: 12px;
            color: $baseFontColor;
            line-height: 30px;
        }
    }
    .cinema-list{
        position: absolute;
        top: 98px;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 0 $basePadding 90px;
        .cinema-card{
            width: 100%;
            height: 146px;
            box-sizing: border-box;
            padding: 9px 12px 0;
            margin-bottom: 15px;
            background:rgba(51,54,61,1);
            border-radius:6px;
            .item-title{
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                text-align: left;
                font-size:14px;
                line-height:20px;
                .name{
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
                .price{
                    position: absolute;
                    right: 0;
                    top: 0;
                    color: #d4d4d4;
                    .money{
                        font-weight:700;
                        color:rgba(251,195,74,1);
                    }
                }
            }
            .item-site{
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                margin-top: 3px;
                color: #d4d4d4;
                font-size: 12px;
                line-height:17px;
                text-align: left;
                font-weight: 400;
                .distance{
                    position: absolute;right: 0;
                    top: 0;
                }
            }
            .discounts{
                width: 100%;
                .item-discounts{
                   margin-top: 11px;
                   text-align: left;
                   .benefit{
                       display: inline-block;
                       width: 18px;
                       height: 19px;
                       background:linear-gradient(135deg,rgba(235,110,117,1) 0%,rgba(247,166,83,1) 100%);
                       border-radius: 4px;
                       text-align: center;
                       line-height: 19px;
                    }
                    .promote{
                        display: inline-block;
                        width: 18px;
                        height: 19px;
                        background:linear-gradient(135deg,rgba(176,70,157,1) 0%,rgba(97,72,170,1) 100%);
                        border-radius: 4px;
                        text-align: center;
                        line-height: 19px;
                    }
                    .cal{
                        display: inline-block;
                        width: 18px;
                        height: 19px;
                        background:linear-gradient(135deg,rgba(50,36,149,1) 0%,rgba(49,56,172,1) 100%);
                        border-radius: 4px;
                        text-align: center;
                        line-height: 19px;
                    }
                   .lock{
                       margin-left: 9px;
                       width: 200px;
                       overflow: hidden;
                       white-space: nowrap;
                       text-overflow: ellipsis;
                       font-size:12px;
                        font-weight:400;
                        color: #d4d4d4;
                        line-height:17px
                    }
                }
            }
        }
    }
}
</style>