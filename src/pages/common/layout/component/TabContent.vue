<template>
  <transition name="fade">
    <Tabs type="card" class="content-wrapper" :style="{'padding':PageMode===1?'75px 15px 15px':'75px 15px 15px 255px'}" closable v-model="cruTab">
      <TabPane :label="tab.title" v-for="tab of tabList" :key="tab.name" :name="tab.name">
        <component :is="tab.name" :ref="tab.name"></component>
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
    ...mapState(['tabList', 'cruTab', 'PageMode'])
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
      console.log(this.$refs[this.cruTab])
    },
    tabList () {
      let _this = this
      _this.tabList.forEach(e => {
        if (_this.$options.components && !_this.$options.components[e.name]) {
          _this.$options.components[e.name] = e.component
        }
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
