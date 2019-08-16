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
        fun: 'Carstore/carStoreList',
        columns: [
          {key: 'name', title: '仓库'},
          {
            key: 'plate_no',
            title: '车牌',
            render: (h, params) => {
              return <div>
                <license-plate row={params.row}></license-plate>
              </div>
            }
          },
          {key: 'brand', title: '车型'},
          {
            key: 'status',
            title: '在库状态',
            render: (h, params) => {
              let d = params.row
              return <span>{d.status === 'in_dealing' ? '在库待处理' : '在库待销售'}</span>
            }
          },
          {
            key: 'caozuo',
            title: '操作',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="info" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'seeIllegal')}>违章记录</i-button>
                <i-button class="table-btn" type="primary" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'seeLease')}>租赁记录</i-button>
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
        case 'seeIllegal':
          alert(`查看违章：${item.id}`)
          break
        case 'seeLease':
          alert(`查看租赁：${item.id}`)
          break
      }
    }
  }
}
</script>
<!--render中的元素样式不能加scoped-->
<style lang="scss">
</style>
<style scoped lang="scss">
</style>
