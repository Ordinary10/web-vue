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
        fun: 'CarArchives/getCarArchives',
        columns: [
          {key: 'plate_no', title: '车牌'},
          {key: 'company_name', title: '所属公司'},
          {title: '档案编号'},
          {title: '登记证书'},
          {title: '交强险保单'},
          {title: '商业险保单'},
          {title: '营运险保单'},
          {title: '保险批单'},
          {title: '购车发票'},
          {title: '购车发票存根联'},
          {title: '购车发票记账联'},
          {title: '购车发票抵扣联'},
          {title: '购置税发票'},
          {title: '购置税正本'},
          {title: '行驶证'},
          {title: '交车表'},
          {title: '工本费发票'},
          {title: '车证'},
          {title: '保养维修协议'},
          {title: '挂靠协议'},
          {title: '租赁合同'},
          {title: '是否在借'}
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
