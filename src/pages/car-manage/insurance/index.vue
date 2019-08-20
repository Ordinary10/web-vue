<template>
    <div>
      <search>
        <div class="search-box">
          <Input class="search-input" v-model="searchData.plate_no" size="large" placeholder="请输入车牌" />
          <Select v-model="searchData.car_status" class="search-input" size="large" placeholder="请选择车辆状态">
            <Option value="">全部（车辆状态）</Option>
            <Option v-for="item in $common.pageInitInfo.car_status" :value="item.id" :key="'car_status'+item.id">{{ item.name }}</Option>
          </Select>
          <Select v-model="searchData.isbuy" class="search-input" size="large" placeholder="请选择是否购保">
            <Option value="">全部（是否购保）</Option>
            <Option :value="1" selected>是</Option>
            <Option :value="2">否</Option>
          </Select>
          <Input v-show="isShow" class="search-input" v-model="searchData.days" size="large" placeholder="请输入脱保天数" />
          <Select v-show="isShow" v-model="searchData.quote_time" class="search-input" size="large" placeholder="报价时间">
            <Option value="">全部（报价时间）</Option>
            <Option value="no">未报价</Option>
            <Option value="week">一周</Option>
            <Option value="month">一月</Option>
          </Select>
          <div class="search-submit">
            <Tooltip content="更多搜索条件" placement="bottom-start">
              <Button class="search-btn " size="large" icon="ios-options-outline" type="primary" @click.native="isShow=!isShow"></Button>
            </Tooltip>
            <Button class="search-btn " size="large" icon="md-search" type="primary" @click.native="search"></Button>
            <Button class="refresh-btn search-btn" size="large" icon="md-refresh" type="info" @click.native="refresh"></Button>
          </div>
          <!--更多操作-->
          <div class="redundant-btn" v-if="redundantList && redundantList.length>0">
            <Dropdown>
              <Button type="primary" size="large" @mouseout.native="iconType='md-arrow-dropdown'" @mouseover.native="iconType='md-arrow-dropup'">
                更多操作
                <Icon :type="iconType" />
              </Button>
              <DropdownMenu slot="list">
                <DropdownItem v-if="item.isShow === true" v-for="item in redundantList" :key="item.type" @click.native="redundant(item.type)">{{item.label}}</DropdownItem>
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
        fun: 'Car/insuranceWarn',
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
            title: '脱保天数',
            sortable: 'custom',
            render: (h, params) => {
              let d = params.row
              return d.is_overtime > 0
                ? <span class="warnText">{Math.abs(d.days)}</span>
                : <span class="normalText">{Math.abs(d.days)}</span>
            }
          },
          {key: 'etime', title: '商业险到期日'},
          {key: 'jqx_etime', title: '交强险到期日'},
          {key: 'quote_time', title: '报价时间', sortable: 'custom'},
          {
            key: 'caozuo',
            title: '操作',
            width: 240,
            align: 'center',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="info" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'see')}>查看</i-button>
                <i-button class="table-btn" type="primary" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'offer')}>报价</i-button>
                <i-button class="table-btn" type="success" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'upload')}>上传</i-button>
              </div>
            }
          }
        ]
      },
      searchData: {
        plate_no: '',
        car_status: '',
        days: '',
        isbuy: 1,
        quote_time: ''
      },
      startSearchData: {
        plate_no: '',
        car_status: '',
        days: '',
        isbuy: 1,
        quote_time: ''
      },
      redundantList: [
        {
          type: 'importPolicyList',
          label: '批量保单',
          isShow: true
        },
        {
          type: 'importQuotationList',
          label: '批量报价',
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
        case 'importPolicyList':
          alert('批量保单')
          break
        case 'importQuotationList':
          alert('批量报价')
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
        case 'see':
          alert(`查看：${item.id}`)
          break
        case 'offer':
          alert(`报价：${item.id}`)
          break
        case 'upload':
          alert(`上传：${item.id}`)
          break
      }
    }
  }
}
</script>
