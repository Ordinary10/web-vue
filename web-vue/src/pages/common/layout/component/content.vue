<template>
<div class="content-wrapper">
  <div class="search-wrapper">
    <div class="search-input-wrapper">
    </div>
    <template>
      <Breadcrumb>
        <BreadcrumbItem :to="index?'':item.path||'/'" v-for="(item,index) in crumbList" :key="item.path"
                        :class="{'BreadcrumbItemLast':index === crumbList.length-1}">
          {{item.meta.name}}
        </BreadcrumbItem>
      </Breadcrumb>
    </template>
  </div>
  <router-view class="content" v-if="refresh"></router-view>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    // 刷新组件
    active: {
    }
  },
  data () {
    return {
      refresh: true
    }
  },
  mounted () {
  },
  computed: {
    ...mapState(['crumbList'])
  },
  watch: {
    // 刷新组件
    active () {
      this.refresh = false
      this.$nextTick(() => (this.refresh = true))
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-wrapper{
    margin: 20px;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 18px 0px rgba(0, 0, 0, 0.11);
    border-radius:15px;
    display: flex;
    /*url设置*/
   .ivu-breadcrumb{
      padding: 20px;
      color: inherit;
    }
    .search-input-wrapper{
      flex: 1;
    }
  }
  .content-wrapper{
    margin-top: 60px;
    overflow: hidden;
    background:rgba(240,244,249,1)
  }
  .content{
    margin: 0 20px 20px;
    min-height:764px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 18px 0px rgba(0, 0, 0, 0.11);
    border-radius:15px;
  }
</style>
