<!--侧边栏-->
<template>
  <div class="sidebar-wrapper">
    <Menu theme="light">
      <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
    </Menu>
  </div>
</template>

<script>
import DynamicMenu from './dynamic-menu'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isCollapse: true
    }
  },
  computed: {
    ...mapState(['isSidebarNavCollapse']),
    ...mapState('permission', ['sidebarMenu', 'currentMenu'])
  },
  methods: {},
  components: {
    DynamicMenu
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/layout.scss";
</style>
