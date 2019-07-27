<!--  -->
<template>
<div class='pick-main'>
<ul class="seat-nav">
    <li class="seat-list" v-for="item in seatList" :key = "item">
        <input type="checkbox" class="input-active">
        <div class="box"></div>
    </li>
</ul>
<ul class="recommend-nav">
    <p class="moves">推荐座位</p>
    <li class="recommend-list" @click = "pick(1,$event)">
        1人
    </li>
    <li class="recommend-list" @click = "pick(2,$event)">
       2人
    </li>
    <li class="recommend-list" @click = "pick(3,$event)">
        3人
    </li>
    <li class="recommend-list" @click = "pick(4,$event)">
        4人
    </li>
</ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Pick',
components: {},
data() {
//这里存放数据
return {
    seatList:[]
};
},
methods: {
    seat(){
       for(var i = 0 ; i < 108 ; i ++){
           this.seatList.push(i)
       }
    },
    pick(num,e){
        // if(num == 4){
        var n=Math.floor(Math.random()*108+1)-num;
        
        for(var i = 0 ; i < num ; i ++){
        e.target.parentNode.previousElementSibling.children[n + i].children[0].checked = true
        }
    
    }
},
created(){
    this.seat()
}
}
</script>
<style lang='scss' scoped>
.seat-nav{
    width: 315px;
    margin: 0 auto;
    margin-top: 50px;
//      display: flex;  
//  justify-content: space-between;
//  align-items: center;
 background-color: orange;
    .seat-list{
        width: 20px;
        height: 20px;
        margin: 3px;
       position: relative;
        opacity: .7;
        float: left;
       
        .input-active{
            position: absolute;
            left: 0;
            top: 0;
             opacity: 0;
        }
        .box{
             background-color: #D8D8D8;
             width: 100%;
             height: 100%;
              border-radius:3px;
        }
        .input-active:checked+.box{
            background-color: red;
        }
    }
}
.recommend-nav{
    display: flex;  
    justify-content: space-between;
    align-items: center;
    width: 315px;
    margin: 0 auto;
    .moves{
     width:64px;
     height:22px;
     font-size:16px;
     margin-top: 20px;
     font-family:PingFangSC-Regular;
     font-weight:400;
     color:rgba(255,255,255,1);
     line-height:22px;       
    }
    .recommend-list{
        border: 1px solid rgba(151,151,151,1);
        line-height: 23px;
          margin-top: 20px;
          text-align: center;
        float: left;
        width: 52px;
        height: 23px;
    }
}
</style>