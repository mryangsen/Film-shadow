<template>
    <div class="monday-goods-main">
        <div class="img-gallery" v-gallery>
            <img class="img-item" v-for="(m,index) in imgs" :src="m.url" :key="index" alt="">
        </div>
    </div>
</template>

<script>
import imgsMixin from './data.js'
import { setInterval } from 'timers';
export default {
    name: 'MondayGoods',
    components:{
       
    },
    mixins:[imgsMixin],
    data() {
      return {
        
      }
    },
    methods:{
        callback(){
        }
    },
    directives:{
        gallery(el,binding){
            var step = -1;
            setInterval(()=>{
                var leader = el.offsetLeft;
                leader += step;
                el.style.left =  leader + 'px';
                if(Math.abs(leader)==el.parentNode.offsetWidth){
                     el.style.left = 0;
                 }
            },17)
        }
    }

}
</script>

<style lang="scss" scoped>
    .monday-goods-main{
        position: relative;
        width: 100%;
        height: 400px;
        background: pink;
        overflow: hidden;
        .img-gallery{
            position: absolute;
            left: 0;
            top: 0;
            height: 190px;
            width: 100%;
            .img-item{
                display: block;
                float: left;
                width: 80px;
                height: 80px;
                margin:4px;
            }
        }
    }
    @keyframes move {
        0%{
            left: 0;
        }
        100%{
            left:-100%;
        }
    }
</style>
