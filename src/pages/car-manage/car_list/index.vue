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
              <Button type="primary" size="large" @mouseout.native="iconType='md-arrow-dropdown'" @mouseover.native="iconType='md-arrow-dropup'">
                更多操作
                <Icon :type="iconType" />
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
        <paging-table :config="config"></paging-table>
      </div>
    </div>
</template>
<script type="text/jsx">
export default {
  data () {
    return {
      iconType: 'md-arrow-dropdown',
      config: {
        fun: 'Car/carList',
        columns: [
          {key: 'name', title: '门店'},
          {key: 'plate_no', title: '车牌'},
          {key: 'carVersion', title: '车型'},
          {key: 'expire_time', title: '保险到期时间'},
          {key: 'annual', title: '年审日期'},
          {key: 'status', title: '状态'},
          {
            key: 'caozuo',
            title: '操作',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="info" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'see')}>查看</i-button>
                <i-button class="table-btn" type="primary" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'editor')}>编辑</i-button>
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
  components: {
  },
  mounted () {

  },
  methods: {
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
      alert(`搜索条件：${JSON.stringify(this.searchData)}`)
    },
    refresh () {
      alert('刷新')
    },
    tableBtnClick (item, type) {
      switch (type) {
        case 'see':
          alert(`查看：${item.plate_no}`)
          break
        case 'editor':
          alert(`编辑：${item.plate_no}`)
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
