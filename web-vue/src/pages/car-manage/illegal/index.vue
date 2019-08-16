<template>
    <div>
      <search></search>
      <div class="content-block">
        <paging-table :config="config"></paging-table>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      config: {
        fun: 'IllegalSearch/getAutoList',
        columns: [
          {key: 'company_name', title: '门店'},
          {key: 'ctname', title: '姓名'},
          {key: 'plate_no', title: '车牌号'},
          {key: 'ig_nums', title: '违章次数'},
          {key: 'ig_score', title: '违章分数'},
          {key: 'ig_fine', title: '违章罚金'},
          {key: 'query_time', title: '更新日期'},
          {key: 'is_error', title: '查询结果'}
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
