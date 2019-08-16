<template>
  <div style="height: 100%">
    <Top @refresh="refresh" v-if="PageMode===1"></Top>
    <mainContent :active="active" v-if="PageMode===1"/>
    <sideTop v-if="PageMode!==1"></sideTop>
    <side v-if="PageMode!==1"></side>
    <sideContent v-if="PageMode!==1"></sideContent>
  </div>
</template>

<script>
import mainContent from './component/content'
import Top from './component/top-aside'
import sideTop from './side/top'
import side from './side/side'
import sideContent from './side/sideContent'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      active: true
    }
  },
  computed: {
    ...mapState(['PageMode'])
  },
  components: {
    mainContent,
    Top,
    sideTop,
    side,
    sideContent
  },
  methods: {
    refresh (e) {
      this.active = !this.active
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
