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
        fun: 'Car/reviewWarn',
        columns: [
          {key: 'company_name', title: '门店'},
          {key: 'plate_no', title: '车牌号'},
          {key: 'carVersion', title: '车型'},
          {key: 'days', title: '逾期天数'},
          {key: 'annual', title: '车审到期日期'},
          {key: 'license_annual', title: '证审到期日期'},
          {key: 'gastank_annual', title: '气罐审到期日期'}
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
