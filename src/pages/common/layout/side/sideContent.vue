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
  }

  .content-wrapper{
    margin: 80px 20px 20px 260px;
    height:830px;
    border-radius:15px;
    /deep/ >div{
      height:830px;
      display: flex;
      flex-direction: column;
    }

  }
</style>
