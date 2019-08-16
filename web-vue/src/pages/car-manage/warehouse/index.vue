<template>
    <div>
      <search></search>
      <div class="content-block">
        <paging-table :config="config"></paging-table>
      </div>
    </div>
</template>
<script type="text/jsx">
export default {
  data () {
    return {
      config: {
        fun: 'Carstore/carStoreList',
        columns: [
          {key: 'name', title: '仓库'},
          {key: 'plate_no', title: '车牌'},
          {key: 'brand', title: '车型'},
          {
            key: 'status',
            title: '在库状态',
            render: (h, params) => {
              let d = params.row
              return <span>{d.status === 'in_dealing' ? '在库待处理' : '在库待销售'}</span>
            }}
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
<!--render中的元素样式不能加scoped-->
<style lang="scss">
</style>
<style scoped lang="scss">
  ul,li{
    list-style: none;
  }
</style>
