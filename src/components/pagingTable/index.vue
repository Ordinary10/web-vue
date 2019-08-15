<template>
    <div class="paging-table" v-if="config&&data">
      <Table
        stripe
        :columns="config.columns"
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
import configs from './config'
export default {
  name: 'pagingTable',
  data () {
    return {
      config: null,
      data: null,
      total: 0,
      limit: 20,
      page: 1,
      limits: [10, 20, 50, 100]
    }
  },
  /*
  * configName: 用于获取对应的config，详见config.js文件
  *  */
  props: {
    configName: {
      type: String
    }
  },
  created () {
    this.config = configs[this.$props.configName]
    this.getTableData()
  },
  methods: {
    getTableData () {
      let options = {
        page: this.page,
        limit: this.limit,
        fun: this.config.fun
      }
      tableRequest(options, {}).then(res => {
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
