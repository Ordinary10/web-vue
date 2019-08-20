<template>
    <Tabs type="card" class="content-wrapper" :style="{'padding':PageMode===1?'75px 15px 15px':'75px 15px 15px 255px'}" closable v-model="cruTab"  @on-click="changeTab" @on-tab-remove="removeTab">
      <TabPane :label="tab.title" v-for="(tab,index) in tabList" :key="tab.name" :name="tab.name">
        <transition name="fade">
        <component :is="tab.name" :ref="tab.name" v-if="tabIndex[index]"></component>
        </transition>
      </TabPane>
    </Tabs>
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
      tabIndex: []
    }
  },
  computed: {
    ...mapState(['tabList', 'cruTab', 'PageMode']),
    cruTab: {
      get () {
        return this.$store.state.cruTab
      },
      set (val) {
        this.$store.state.cruTab = val
      }
    }
  },
  components: {
  },
  mounted () {
    this.$store.commit('SetTabList', [{name: 'home', title: '首页', component: Home}])
    this.$store.commit('SetTab', 'home')
    this.tabIndex = this.tabListIndex()
  },
  methods: {
    changeTab (name) {
      // this.$router.push({ name })
      this.$store.commit('CruTab', name)
    },
    removeTab(name){
      this.$store.commit('RemoveTab', name)
    },
    // 生成tab索引布尔表 用于刷新
    tabListIndex () {
      let res = []
      this.tabList.forEach(e => {
        res.push(true)
      })
      return res
    }
  },
  watch: {
    // 刷新组件
    active () {
      let cruIndex
      this.tabList.forEach((e, index) => {
        if (e.name === this.cruTab) {
          cruIndex = index
        }
      })
      let obj = []
      this.tabIndex.forEach(e => {
        obj.push(e)
      })
      obj[cruIndex] = false
      this.tabIndex = obj
      this.$nextTick(() => {
        this.tabIndex = this.tabListIndex()
      })
      // console.log(this.tabList)
      // this.$store.commit('SetTabList', this.tabList)
      // let newTabList = this.tabList
    },
    tabList () {
      let _this = this
      _this.tabList.forEach(e => {
        if (_this.$options.components && !_this.$options.components[e.name]) {
          _this.$options.components[e.name] = e.component
        }
      })
      this.tabIndex = this.tabListIndex()
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
