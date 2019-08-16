<template>
    <div>
      <search>
        <div class="search-box">
          <Input class="search-input" v-model="searchData.plate_no" size="large" placeholder="请输入车牌" />
          <Select v-model="searchData.status" class="search-input" size="large" placeholder="请选择状态">
            <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <div class="search-submit">
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
                <DropdownItem @click.native="uploadList">批量导入</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </search>
      <div class="content-block">
        <paging-table :config="config" :searchData="searchData"></paging-table>
      </div>
    </div>
</template>
<script type="text/jsx">
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
          {key: 'result_status', title: '状态'},
          {
            key: 'caozuo',
            title: '操作',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="info" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'see')}>查看</i-button>
                <i-button class="table-btn" type="primary" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'editor')}>编辑</i-button>
                <i-button class="table-btn" type="error" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'delisting')}>下市</i-button>
              </div>
            }
          }
        ]
      },
      searchData: {
        plate_no: '',
        status: ''
      },
      statusList: [
        {
          value: 1,
          label: '状态1'
        },
        {
          value: 2,
          label: '状态2'
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    uploadList () {
      alert('批量导入')
    },
    search () {
      alert(`搜索条件：${JSON.stringify(this.searchData)}`)
    },
    refresh () {
      alert('刷新')
    },
    tableBtnClick (item, type) {
      switch (type) {
        case 'see':
          alert(`查看：${item.id}`)
          break
        case 'editor':
          alert(`编辑：${item.id}`)
          break
        case 'delisting':
          alert(`下市：${item.id}`)
          break
      }
    }
  }
}
</script>
