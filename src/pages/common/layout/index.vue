<template>
  <div>
    <TopAside @refresh="refresh"></TopAside>
    <mainContent :active="active"/>
  </div>
</template>

<script>
import mainContent from './component/content'
import TopAside from './component/top-aside'

export default {
  data () {
    return {
      active: true
    }
  },
  computed: {},
  components: {
    mainContent,
    TopAside
  },
  methods: {
    refresh (e) {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
