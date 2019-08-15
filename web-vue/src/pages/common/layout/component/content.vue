<template>
  <transition name="fade">
      <router-view class="content-wrapper" v-if="refresh"></router-view>
  </transition>
</template>

<script>
export default {
  props: {
    // 刷新组件
    active: {
    }
  },
  data () {
    return {
      refresh: true
    }
  },
  mounted () {
  },
  watch: {
    // 刷新组件
    active () {
      this.refresh = false
      this.$nextTick(() => (this.refresh = true))
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active{
    animation:bounce-in 0.3s;
  }
  .fade-leave-active{
    animation:bounce-in 0.3s reverse;
  }
  @keyframes bounce-in{
    /*0%{transform:scale(0);}*/
    /*50%{transform:scale(1.5);}*/
    /*100%{transform:scale(1);}*/
  }

  .content-wrapper{
    margin: 160px 20px 20px;
    height:750px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 18px 0px rgba(0, 0, 0, 0.11);
    border-radius:15px;
    /deep/ >div{
      height:750px;
      background-color: #f0f4f9;
      position: relative;
    }

  }
</style>
