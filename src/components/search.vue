<template>
  <div class="search-wrapper" >
    <div class="search-input-wrapper">
      <slot></slot>
    </div>
    <template>
      <Breadcrumb>
        <BreadcrumbItem  v-for="(item,index) in crumbList" :key="item.path"
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
  name: 'search',
  computed: {
    ...mapState(['crumbList'])
  }
}
</script>

<style lang="scss"  scoped>
  .search-wrapper{
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 18px 0px rgba(0, 0, 0, 0.11);
    border-radius:15px;
    display: flex;
  /*url设置*/
  .ivu-breadcrumb{
    padding: 20px;
    color: inherit;
  .BreadcrumbItemLast{
    /*color: #ccc;*/
  }
  }
  .search-input-wrapper{
    flex: 1;
    display: flex;
    align-items: center;
  }
  }
</style>
