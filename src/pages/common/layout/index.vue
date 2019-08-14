<template>
  <div>
    <TopAside></TopAside>
    <mainContent/>
  </div>
</template>

<script>
import mainContent from './component/content'
import TopAside from './component/top-aside'

export default {
  data () {
    return {}
  },
  computed: {},
  components: {
    mainContent,
    TopAside
  }
}
</script>

<style lang="scss" scoped>

</style>
