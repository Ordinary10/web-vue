<template>
    <div>
        <router-view></router-view>
        <Charts/>
    </div>
</template>

<script>
import Charts from './component/charts'

export default {
  data () {
    return {}
  },
  mounted () {

  },
  components: {

    Charts
  }
}
</script>
