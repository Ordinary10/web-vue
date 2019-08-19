<template>
    <div>
      <search>
        <div class="search-box">
          <Input class="search-input" v-model="searchData.plate_no" size="large" placeholder="请输入车牌" />
          <div class="search-submit">
            <Tooltip content="更多搜索条件" placement="bottom-start">
              <Button class="search-btn " size="large" icon="ios-options-outline" type="primary" @click.native="isShow=!isShow"></Button>
            </Tooltip>
            <Button class="search-btn " size="large" icon="md-search" type="primary" @click.native="search"></Button>
            <Button class="refresh-btn search-btn" size="large" icon="md-refresh" type="info" @click.native="refresh"></Button>
          </div>
          <div class="redundant-btn">
            <Dropdown>
              <Button type="primary" size="large">
                更多操作
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem @click.native="redundant('addCar')">添加车辆</DropdownItem>
                <DropdownItem @click.native="redundant('addCarList')">导入车辆</DropdownItem>
                <DropdownItem @click.native="redundant('exportList')">导出列表</DropdownItem>
                <DropdownItem @click.native="redundant('carBack')">退车入库</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </search>
      <div class="content-block">
        <paging-table ref="pagingTable" :config="config" :searchData="searchData"></paging-table>
      </div>
    </div>
</template>
<script type="text/jsx">
export default {
  data () {
    return {
      isShow: false,
      iconType: 'md-arrow-dropdown',
      config: {
        fun: 'IllegalSearch/getAutoList',
        columns: [
          {key: 'company_name', title: '门店'},
          {key: 'ctname', title: '姓名'},
          {
            key: 'plate_no',
            title: '车牌',
            render: (h, params) => {
              return <div>
                <license-plate row={params.row}></license-plate>
              </div>
            }
          },
          {key: 'ig_nums', title: '违章次数'},
          {key: 'ig_score', title: '违章分数'},
          {key: 'ig_fine', title: '违章罚金'},
          {key: 'query_time', title: '更新日期'},
          {key: 'is_error', title: '查询结果'},
          {
            key: 'caozuo',
            title: '操作',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="info" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'see')}>查看</i-button>
              </div>
            }
          }
        ]
      },
      searchData: {
        plate_no: '',
        status: ''
      },
      startSearchData: {
        plate_no: '',
        status: ''
      }
    }
  },
  mounted () {

  },
  methods: {
    /* 更多操作 */
    redundant (type) {
      switch (type) {
        case 'addCar':
          alert('添加车辆')
          break
        case 'addCarList':
          alert('导入车辆')
          break
        case 'exportList':
          alert('导出列表')
          break
        case 'carBack':
          alert('退车入库')
          break
      }
    },
    search () {
      this.$refs.pagingTable.search(this.searchData)
    },
    refresh () {
      /* 注意：不能将searchData引用为startSearchData，否则后续刷新将失效——引用（指针）与内存空间的关系问题 */
      let obj = {}
      Object.keys(this.startSearchData).forEach(key => {
        obj[key] = this.startSearchData[key]
      })
      this.searchData = obj
      this.$refs.pagingTable.refresh(this.searchData)
    },
    tableBtnClick (item, type) {
      switch (type) {
        case 'see':
          alert(`查看：${item.id}`)
          break
      }
    }
  }
}
</script>
