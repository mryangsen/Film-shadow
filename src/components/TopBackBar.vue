<template>
  <div class="top-back-bar-main" :style="topBar">
     <slot name="img-left">
    <img @click="$router.go(-1)" class="icon icon-goback" :src="require('@/assets/imgs/icons/arr-left.png')" alt="">
      </slot>
    <span class="title">
      <slot></slot>
    </span>
    <slot name="img-right">
      <img class="icon icon-share" :src="require('@/assets/imgs/icons/share.png')" alt="">
    </slot>

  </div>
</template>

<script>
export default {
  name: 'TopBackBar',
  props:{
      bgColor:{
          type: String,
          default: 'transparent'
      }
  },
  data () {
    return {
        topBar:{
            backgroundColor: this.bgColor
        }
    }
  },

  methods: {}
}
</script>
<style lang='scss' scoped>
@import "../assets/style/common/common.scss";
    .top-back-bar-main{
        display: flex;
        justify-content: space-between;
        padding: 0 $basePadding;
        height: 44px;
        font-size: 16px;
        color: #fff;
        align-items: center;
        .icon{
          width: 22px;
          height: 22px;
        }
    }
</style>
