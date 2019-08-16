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
        fun: 'CarUpkeep/getCarUpkeep',
        columns: [
          {key: 'company_name', title: '门店'},
          {key: 'plate_no', title: '车牌'},
          {key: 'name', title: '姓名'},
          {key: 'mobile', title: '手机'},
          {key: 'type_name', title: '类型'},
          {key: 'editor_name', title: '录入员'},
          {key: 'do_time', title: '日期'},
          {key: 'mile', title: '公里数'},
          {key: 'content', title: '内容'}
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
