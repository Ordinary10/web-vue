<template>
   <div class="top-wrapper">top</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isSidebarNavCollapse'])
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/layout.scss";
</style>
