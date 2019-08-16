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
        fun: 'Car/carList',
        columns: [
          {key: 'name', title: '门店'},
          {key: 'plate_no', title: '车牌'},
          {key: 'carVersion', title: '车型'},
          {key: 'expire_time', title: '保险到期时间'},
          {key: 'annual', title: '年审日期'},
          {key: 'status', title: '状态'}
        ]
      }
    }
  },
  components: {
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>

</style>
