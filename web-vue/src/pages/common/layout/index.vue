<template>
  <div>
    <sidebarNav class="sidebar"/>
    <TopAside></TopAside>
    <mainContent/>
  </div>
</template>

<script>
import sidebarNav from './component/sidebar-nav'
import mainContent from './component/content'
import TopAside from './component/top-aside'

export default {
  data () {
    return {}
  },
  computed: {},
  components: {
    sidebarNav,
    mainContent,
    TopAside
  }
}
</script>

<style lang="scss" scoped>

</style>
