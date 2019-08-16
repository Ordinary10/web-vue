<template>
    <div class="paging-table" v-if="configs&&data">
      <Table
        stripe
        :columns="configs.columns"
        :data="data"></Table>
      <div class="paging-box">
        <Page
          class="paging"
          :total="total"
          show-elevator
          show-sizer
          show-total
          :page-size-opts="limits"
          :page-size="limit"
          @on-change="pageChange"
          @on-page-size-change="pageSizeChange"/>
      </div>
    </div>
</template>

<script>
import { tableRequest } from '@/utils/request'
export default {
  name: 'pagingTable',
  data () {
    return {
      configs: null,
      data: null,
      total: 0,
      params: null,
      limit: 20,
      page: 1,
      limits: [10, 20, 50, 100]
    }
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    searchData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  created () {
    this.configs = this.$props.config
    this.params = this.$props.searchData
    this.getTableData()
  },
  methods: {
    getTableData () {
      let options = {
        page: this.page,
        limit: this.limit,
        fun: this.configs.fun
      }
      tableRequest(options, this.params).then(res => {
        this.data = res.data
        this.total = res.count
      }).catch(err => {
        console.log(err)
      })
    },
    pageChange (page) {
      this.page = page
      this.getTableData()
    },
    pageSizeChange (limit) {
      this.limit = limit
      this.getTableData()
    }
  },
  computed: {
  },
  watch: {
    searchData: {
      deep: true,
      handler (newVal, oldVal) {
        this.params = newVal
        this.getTableData()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.paging-table{
  height: 100%;
  position: relative;
  .paging-box{
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid #E8EAEC;
  }
}
</style>
