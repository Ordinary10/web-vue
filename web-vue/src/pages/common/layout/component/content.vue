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
  <router-view class="content"></router-view>
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
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/layout.scss";
  .search-wrapper{
    margin: 20px;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 18px 0px rgba(0, 0, 0, 0.11);
    border-radius:15px;
    display: flex;
    /*url设置*/
   .ivu-breadcrumb{
      min-width: 13%;
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
