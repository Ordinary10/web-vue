<template>
    <div>
      <search>
        <div class="search-box">
          <Input class="search-input" v-model="searchData.plate_no" size="large" placeholder="请输入车牌" />
          <Input class="search-input" v-model="searchData.days" size="large" placeholder="请输入天数(0-90天)" />
          <div class="search-submit">
<!--            <Tooltip content="更多搜索条件" placement="bottom-start">-->
<!--              <Button class="search-btn " size="large" icon="ios-options-outline" type="primary" @click.native="isShow=!isShow"></Button>-->
<!--            </Tooltip>-->
            <Button class="search-btn " size="large" icon="md-search" type="primary" @click.native="search"></Button>
            <Button class="refresh-btn search-btn" size="large" icon="md-refresh" type="info" @click.native="refresh"></Button>
          </div>
          <div class="redundant-btn" v-if="redundantList && redundantList.length>0">
            <Dropdown>
              <Button type="primary" size="large">
                更多操作
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem v-if="item.isShow === true" v-for="item in redundantList" :key="item.type" @click.native="redundant(item.type)">{{item.label}}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </search>
      <div class="content-block">
        <paging-table ref="pagingTable" :config="config" :searchData="searchData" ></paging-table>
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
        fun: 'Car/reviewWarn',
        columns: [
          {key: 'company_name', title: '门店'},
          {
            key: 'plate_no',
            title: '车牌',
            width: 250,
            render: (h, params) => {
              return <div>
                <license-plate row={params.row}></license-plate>
              </div>
            }
          },
          {key: 'carVersion', title: '车型'},
          {
            key: 'days',
            title: '逾期天数',
            render: (h, params) => {
              let d = params.row
              return d.is_overtime > 0
                ? <span class="warnText">{Math.abs(d.days)}</span>
                : <span class="normalText">{Math.abs(d.days)}</span>
            }
          },
          {key: 'annual', title: '车审到期日期', sortable: 'custom'},
          {key: 'license_annual', title: '证审到期日期', sortable: 'custom'},
          {key: 'gastank_annual', title: '气罐审到期日期', sortable: 'custom'},
          {
            key: 'caozuo',
            title: '操作',
            width: 160,
            align: 'center',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="primary" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'editor')}>编辑</i-button>
              </div>
            }
          }
        ]
      },
      searchData: {
        plate_no: '',
        days: ''
      },
      startSearchData: {
        plate_no: '',
        days: ''
      },
      redundantList: [
        {
          type: 'importAuditList',
          label: '导入年审',
          isShow: true
        },
        {
          type: 'exportList',
          label: '导出列表',
          isShow: true
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    /* 更多操作 */
    redundant (type) {
      switch (type) {
        case 'importAuditList':
          alert('导入年审')
          break
        case 'exportList':
          alert('导出列表')
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
        case 'editor':
          alert(`编辑：${item.id}`)
          break
      }
    }
  }
}
</script>
