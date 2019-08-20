<template>
    <div>
      <search>
        <div class="search-box">
          <Input class="search-input" v-model="searchData.plate_no" size="large" placeholder="请输入车牌" />
          <Input class="search-input" v-model="searchData.editor_name" size="large" placeholder="请输入录入员" />
          <Select v-model="searchData.type" class="search-input" size="large" placeholder="请选择类型">
            <Option value="">全部（类型）</Option>
            <Option value="1">保养</Option>
            <Option value="2">维修</Option>
          </Select>
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
                <DropdownItem v-for="item in redundantList" :key="item.type" @click.native="redundant(item.type)">{{item.label}}</DropdownItem>
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
        fun: 'CarUpkeep/getCarUpkeep',
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
          {key: 'name', title: '姓名'},
          {key: 'mobile', title: '手机'},
          {key: 'type_name', title: '类型'},
          {key: 'editor_name', title: '录入员'},
          {key: 'do_time', title: '日期'},
          {key: 'mile', title: '公里数'},
          {key: 'content', title: '内容'},
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
        editor_name: '',
        type: ''
      },
      startSearchData: {
        plate_no: '',
        editor_name: '',
        type: ''
      },
      redundantList: [
        {
          type: 'addUpkeep',
          label: '新增保养',
          isShow: true
        },
        {
          type: 'addMaintain',
          label: '新增维修',
          isShow: true
        },
        {
          type: 'addUpkeepList',
          label: '批量保养',
          isShow: true
        },
        {
          type: 'addMaintainList',
          label: '批量维修',
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
        case 'addUpkeep':
          alert('新增保养')
          break
        case 'addMaintain':
          alert('新增维修')
          break
        case 'exportList':
          alert('导出列表')
          break
        case 'addUpkeepList':
          alert('批量保养')
          break
        case 'addMaintainList':
          alert('批量维修')
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
