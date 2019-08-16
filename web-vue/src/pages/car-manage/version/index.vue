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
        fun: 'CarVersion/getCarModel',
        columns: [
          {key: 'id', title: '编号'},
          {key: 'brand', title: '品牌'},
          {key: 'car_model', title: '车型'},
          {key: 'car_number', title: '数量'},
          {key: 'guide_price', title: '指导价'},
          {key: 'result_status', title: '状态'}
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
