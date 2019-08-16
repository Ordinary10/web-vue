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
        <paging-table :config="config"></paging-table>
      </div>
    </div>
</template>
<script type="text/jsx">
export default {
  data () {
    return {
      config: {
        fun: 'IllegalSearch/getAutoList',
        columns: [
          {key: 'company_name', title: '门店'},
          {key: 'ctname', title: '姓名'},
          {key: 'plate_no', title: '车牌号'},
          {key: 'ig_nums', title: '违章次数'},
          {key: 'ig_score', title: '违章分数'},
          {key: 'ig_fine', title: '违章罚金'},
          {key: 'query_time', title: '更新日期'},
          {key: 'is_error', title: '查询结果'}
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
    }
  }
}
</script>
