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
        fun: 'Car/insuranceWarn',
        columns: [
          {key: 'company_name', title: '门店'},
          {key: 'plate_no', title: '车牌号'},
          {key: 'carVersion', title: '车型'},
          {key: 'days', title: '脱保天数'},
          {key: 'etime', title: '商业险到期日'},
          {key: 'jqx_etime', title: '交强险到期日'},
          {key: 'quote_time', title: '报价时间'}
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
