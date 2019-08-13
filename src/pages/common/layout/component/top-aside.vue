<template>
   <div class="top-wrapper">
     <template>
       <Breadcrumb>
         <BreadcrumbItem :to="index?'':item.path||'/'" v-for="(item,index) in crumbList" :key="item.path"
         :class="{'BreadcrumbItemLast':index === crumbList.length-1}">
           {{item.meta.name}}
         </BreadcrumbItem>
       </Breadcrumb>
     </template>
   </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isSidebarNavCollapse', 'crumbList'])
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
