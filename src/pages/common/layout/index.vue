<template>
  <div style="height: 100%;">
    <Top @refresh="refresh" v-if="PageMode===1"></Top>
    <mainContent :active="active" :PageMode="PageMode"/>
    <sideTop @refresh="refresh" v-if="PageMode!==1"></sideTop>
    <side v-if="PageMode!==1"></side>
  </div>
</template>

<script>
import mainContent from './component/content'
import Top from './component/top-aside'
import sideTop from './side/top'
import side from './side/side'
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
