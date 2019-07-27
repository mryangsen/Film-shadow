<template>
  <div class="atlas-main">
    <div class="header">
      	<img class="icon icon-back" @click="$router.go(-1)" src="@/assets/imgs/icons/back.png" alt>
      	<h2 class="title">影院地图</h2>
        <img class="icon icon-search" src="@/assets/imgs/icons/search.png" alt>
    </div>
	<mymap></mymap>
		<swiper class="cinema-swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
			<!-- slides -->
			<swiper-slide class="cinema-slide">
				<div class="slide-c">
					<img src="@/assets/imgs/cinema/cinema1.png" alt="">
					<div class="movie">
						<h2 class="cinema-name">耀莱成龙影城（建业店)</h2>
						<img src="@/assets/imgs/icons/share.png" alt="" class="share"/>
						<img src="@/assets/imgs/icons/phone.png" alt="" class="phone"/>
						<span class="dis">1.7km</span>
							<router-link class="check" tag="span" :to="{name:'Details'}">查看</router-link>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="cinema-slide">
				<div class="slide-c">
					<img src="@/assets/imgs/cinema/cinema2.png" alt="">
					<div class="movie">
						<h2 class="cinema-name">耀莱成龙影城（建业店)</h2>
						<img src="@/assets/imgs/icons/share.png" alt="" class="share"/>
						<img src="@/assets/imgs/icons/phone.png" alt="" class="phone"/>
						<span class="dis">1.7km</span>
							<router-link class="check" tag="span" :to="{name:'Details'}">查看</router-link>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="cinema-slide">
				<div class="slide-c">
					<img src="@/assets/imgs/cinema/cinema2.png" alt="">
					<div class="movie">
						<h2 class="cinema-name">耀莱成龙影城（建业店)</h2>
						<img src="@/assets/imgs/icons/share.png" alt="" class="share"/>
						<img src="@/assets/imgs/icons/phone.png" alt="" class="phone"/>
						<span class="dis">1.7km</span>
						<router-link class="check" tag="span" :to="{name:'Details'}">查看</router-link>
					</div>
				</div>
			</swiper-slide>
  		</swiper>
  </div>
</template>

<script>
import mymap from './MyMap'
// swiper样式
import 'swiper/dist/css/swiper.css'
// 组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	  name: "atlas",
	  components:{
		mymap,
		swiper,
    	swiperSlide
	  },
	data() {
		return {
			swiperOption: {
				slidesPerView: 1.6,
				spaceBetween: 18,
				centeredSlides: true,
        	}
		};
	},
 	methods: {
		callback(){
			
		}
	 },
	 
};
</script>
<style lang='scss' scoped>
@import '@/assets/style/common/common.scss';
.atlas-main{
		width: 100%;
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
			z-index: 9999;
		.icon-back {
			width: 17px;
			height: 17px;
			margin-top: 11px;
		}
		.title {
			font-size: 18px;
			line-height: 44px;
			color: #fff;
		}
		.icon-search {
			width: 17px;
			height: 17px;
			margin-top: 11px;
		}
	}
	.cinema-swiper{
		position: fixed;
		bottom: 36px;
		left: 0;
		width: 100%;
		// height: 194px;
		.cinema-slide{
			.slide-c{
				width: 203px;
				height: 194px;
				margin: 0 auto;
				background-color: rgba(51,54,61,1);
				box-shadow:0px 0px 9px 3px rgba(0,0,0,0.19);
				border-radius:6px;
				img{
					width: 202px;
					height: 131px;
				}
				.movie{
					position: relative;
					left: 0;
					top: 0;
					width: 202px;
					margin: 5px auto;
					box-sizing: border-box;
					padding: 0 10px;
					.cinema-name{
						font-size: 12px;
						line-height: 17px;
						text-align: left;
						color:rgba(255,255,255,1);
						margin-bottom: 7px;
					}
					.share{
						float: left;
						width: 15px;
						height: 15px;
					}
					.phone{
						float: left;
						width: 17px;
						height: 17px;
						text-align: left;
						margin-left: 14px;
					}
					.dis{
						// float: right;
						font-size: 12px;
						line-height: 17px;
						color:rgba(255,255,255,1);
					}
					.check{
						position: absolute;
						right: 7px;
						top: 15px;
						display: inline-block;
						width: 45px;
						height: 25px;
						line-height: 25px;
						background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
						box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
						border-radius:6px;
					}
				}
			}
		}
	}
}
</style>
