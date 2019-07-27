<template>
    <div class="foot-bar-main">
        <router-link class="foot-bar-link home" to="/home"></router-link>
        <router-link class="foot-bar-link movie" to="/movie"></router-link>
        <router-link @click.native="handleAn" @animationend.native="handleAnEnd" class="foot-bar-link ticket" to="/ticket"></router-link>
        <router-link class="foot-bar-link cinema" to="/cinema"></router-link>
        <router-link class="foot-bar-link main" to="/main"></router-link>
    </div>
</template>
<script>
export default {
    name: 'FootBar',
    data(){
        return{
            
        }
    },
    methods:{
        handleAn(e){
            var target = e.target;
            target.classList.add('animated');
            target.classList.add('rubberBand');
            
        },
        handleAnEnd(e){
            var target = e.target;
            target.classList.remove('animated');
                target.classList.remove('rubberBand');
        }
    }


}
</script>
<style lang="scss" scoped>

    .foot-bar-main{
        display: flex;
        position: fixed;
        align-items: flex-end;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 99px;
        background: #fff;
        z-index: 999;
        background: url('../assets/imgs/icons/footer-bar-bg.png') no-repeat center;
        background-size: 100% 100%;
        .foot-bar-link{
            height: 70px;
            flex-grow: 1;
            background-repeat: no-repeat;
            background-size: 30px 30px;
            background-position: center 12px;
            text-decoration: none;
            background-position: center;
            background-size: 40px 40px;
            // transition: all ease .4s;
            .text{
                display: block;
                margin-top: 50px;
                color: #999;
            }
            &.router-link-active .text{
                color: #1C4B47;
            }
            &.home{
                background-image: url('../assets/imgs/icons/home.png');
            }
            &.router-link-active.home{
                background-image: url('../assets/imgs/icons/home-active.png');
            } 
            &.movie{
                background-image: url('../assets/imgs/icons/movie.png');
            }
            &.router-link-active.movie{
                background-image: url('../assets/imgs/icons/movie-active.png');
            } 
            &.ticket{
                align-self: flex-start;
                background-image: url('../assets/imgs/icons/ticket-active.png');
                background-size: 72px 72px;
                margin-top: 2px;
                animation-duration: .8s;
            }
            &.router-link-active.ticket{
            }
                
            &.cinema{
                background-image: url('../assets/imgs/icons/cinema.png');
            }
            &.router-link-active.cinema{
                background-image: url('../assets/imgs/icons/cinema-active.png');
            } 
            &.main{
                background-image: url('../assets/imgs/icons/main.png');
            }
            &.router-link-active.main{
                background-image: url('../assets/imgs/icons/main-active.png');
            } 
        }

    }
    
</style>

