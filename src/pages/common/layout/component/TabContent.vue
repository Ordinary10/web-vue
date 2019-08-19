<template>
  <transition name="fade">
    <Tabs type="card" class="content-wrapper" closable v-model="cruTab">
      <TabPane :label="tab.title" v-for="tab of tabList" :key="tab" :name="tab.name">
        <component :is="tab.name"></component>
      </TabPane>
    </Tabs>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
// 首页
import Home from '@/pages/common/home/index'
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
  computed: {
    ...mapState(['tabList', 'cruTab'])
  },
  components: {
  },
  mounted () {
    this.$store.commit('addTab', {name: 'home', title: '首页', component: Home})
    this.$store.commit('SetTab', 'home')
  },
  methods: {
  },
  watch: {
    // 刷新组件
    active () {
      this.refresh = false
      this.$nextTick(() => (this.refresh = true))
    },
    tabList () {
      this.tabList.forEach(e => {
        this.$options.components[e.name] = e.component
      })
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
    padding: 75px 15px 15px;
    height:100%;
    border-radius:15px;

    /*display: flex;*/
    /*flex-direction: column;*/
    /deep/ .ivu-tabs-content{
      height: calc(100% - 50px);
    }
    /deep/ .ivu-tabs-content>.ivu-tabs-tabpane>div{
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
