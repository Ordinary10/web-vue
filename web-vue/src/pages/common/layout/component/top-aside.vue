<template>
   <div class="top-wrapper">
     <div class="sidebar-wrapper">
       <Menu mode="horizontal">
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
  .ivu-breadcrumb{
    color: inherit;
  }
  //最后一个url改成灰色的
  .BreadcrumbItemLast /deep/ span{
    color: #a0a0a0;
    font-weight: 300;
  }
}
</style>
