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
        fun: 'CarArchives/getCarArchives',
        columns: [
          {
            key: 'plate_no',
            title: '车牌',
            width: 100,
            render: (h, params) => {
              return <div>
                <license-plate row={params.row}></license-plate>
              </div>
            }
          },
          {key: 'company_name', title: '所属公司', width: 160},
          {
            title: '档案编号',
            width: 120,
            render: (h, params) => {
              let d = params.row.category_data
              return <span>{d.material_no || ''}</span>
            }
          },
          {
            title: '登记证书',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.register_certificate === 'N'
                ? <span style="color:red;">{d.register_certificate || ''}</span>
                : <span>{d.register_certificate || ''}</span>
            }
          },
          {
            title: '交强险保单',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.jqx_insurance === 'N'
                ? <span style="color:red;">{d.jqx_insurance || ''}</span>
                : <span>{d.jqx_insurance || ''}</span>
            }
          },
          {
            title: '商业险保单',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.syx_insurance === 'N'
                ? <span style="color:red;">{d.syx_insurance || ''}</span>
                : <span>{d.syx_insurance || ''}</span>
            }
          },
          {
            title: '营运险保单',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.yy_insurance === 'N'
                ? <span style="color:red;">{d.yy_insurance || ''}</span>
                : <span>{d.yy_insurance || ''}</span>
            }
          },
          {
            title: '保险批单',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.pd_insurance === 'N'
                ? <span style="color:red;">{d.pd_insurance || ''}</span>
                : <span>{d.pd_insurance || ''}</span>
            }
          },
          {
            title: '购车发票',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.buy_bill === 'N'
                ? <span style="color:red;">{d.buy_bill || ''}</span>
                : <span>{d.buy_bill || ''}</span>
            }
          },
          {
            title: '购车发票存根联',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.buy_bill_cgl === 'N'
                ? <span style="color:red;">{d.buy_bill_cgl || ''}</span>
                : <span>{d.buy_bill_cgl || ''}</span>
            }
          },
          {
            title: '购车发票记账联',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.buy_bill_jzl === 'N'
                ? <span style="color:red;">{d.buy_bill_jzl || ''}</span>
                : <span>{d.buy_bill_jzl || ''}</span>
            }
          },
          {title: '购车发票抵扣联',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.buy_bill_dkl === 'N'
                ? <span style="color:red;">{d.buy_bill_dkl || ''}</span>
                : <span>{d.buy_bill_dkl || ''}</span>
            }
          },
          {
            title: '购置税发票',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.buy_tax === 'N'
                ? <span style="color:red;">{d.buy_tax || ''}</span>
                : <span>{d.buy_tax || ''}</span>
            }
          },
          {
            title: '购置税正本',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.buy_tax_zb === 'N'
                ? <span style="color:red;">{d.buy_tax_zb || ''}</span>
                : <span>{d.buy_tax_zb || ''}</span>
            }
          },
          {
            title: '行驶证',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.license === 'N'
                ? <span style="color:red;">{d.license || ''}</span>
                : <span>{d.license || ''}</span>
            }
          },
          {
            title: '交车表',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.lift_car === 'N'
                ? <span style="color:red;">{d.lift_car || ''}</span>
                : <span>{d.lift_car || ''}</span>
            }
          },
          {
            title: '工本费发票',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.cost_bill === 'N'
                ? <span style="color:red;">{d.cost_bill || ''}</span>
                : <span>{d.cost_bill || ''}</span>
            }
          },
          {
            title: '车证',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.car_license === 'N'
                ? <span style="color:red;">{d.car_license || ''}</span>
                : <span>{d.car_license || ''}</span>
            }
          },
          {
            title: '保养维修协议',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.repair_agreement === 'N'
                ? <span style="color:red;">{d.repair_agreement || ''}</span>
                : <span>{d.repair_agreement || ''}</span>
            }
          },
          {
            title: '挂靠协议',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.rely_agreement === 'N'
                ? <span style="color:red;">{d.rely_agreement || ''}</span>
                : <span>{d.rely_agreement || ''}</span>
            }
          },
          {
            title: '租赁合同',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.rent_contract === 'N'
                ? <span style="color:red;">{d.rent_contract || ''}</span>
                : <span>{d.rent_contract || ''}</span>
            }
          },
          {
            title: '是否在借',
            align: 'center',
            render: (h, params) => {
              let d = params.row.category_data
              return d.is_borrow ? <span>是</span> : <span>否</span>
            }
          },
          {
            key: 'caozuo',
            title: '操作',
            width: 160,
            align: 'center',
            render: (h, params) => {
              return <div class="table-btn-box">
                <i-button class="table-btn" type="info" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'see')}>查看</i-button>
                <i-button class="table-btn" type="primary" size="small" nativeOnClick={this.tableBtnClick.bind(this, params.row, 'borrowed')}>借还</i-button>
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
        case 'borrowed':
          alert(`借还：${item.id}`)
          break
      }
    }
  }
}
</script>
