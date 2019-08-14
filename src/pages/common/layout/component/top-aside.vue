<template>
   <div class="top-wrapper">
     <div class="title">
       <Icon type="ios-car-outline" />
       <span>租车管家</span>
     </div>
     <div class="sidebar-wrapper">
       <Menu mode="horizontal" theme="primary ">
         <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
       </Menu>
     </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
import DynamicMenu from './dynamic-menu'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isSidebarNavCollapse', 'crumbList']),
    ...mapState('permission', ['sidebarMenu', 'currentMenu'])
  },
  methods: {
  },
  components: {
    DynamicMenu
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";
.top-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background:rgba(76,124,243,1);
  .sidebar-wrapper{
    margin-left: 200px;
  }
  .title{
    position: absolute;
    left: 0;
    width: 200px;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    .ivu-icon-ios-car-outline{
      margin: 0 10px;
      font-size: 30px;
    }
  }
}
</style>
