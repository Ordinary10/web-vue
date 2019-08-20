<template>
    <div>
      <search>
        <div class="search-box">
          <!--搜索输入框-->
          <Input class="search-input" v-model="searchData.plate_no" size="large" placeholder="请输入车牌" />
          <Select v-model="searchData.status" v-if="$common.pageInitInfo.car_status" class="search-input" size="large" placeholder="请选择车辆状态">
            <Option value="">全部（车辆状态）</Option>
            <Option v-for="item in $common.pageInitInfo.car_status" :value="item.id" :key="'car_status'+item.id">{{ item.name }}</Option>
          </Select>
          <Input  class="search-input" v-model="searchData.vin" size="large" placeholder="请输入车架号" />
          <Select v-show="isShow" v-model="searchData.type" v-if="$common.pageInitInfo.car_type" class="search-input" size="large" placeholder="请选择车辆类型">
            <Option value="">全部（车辆类型）</Option>
            <Option v-for="item in $common.pageInitInfo.car_type" :value="item.id" :key="'car_type'+item.id">{{ item.name }}</Option>
          </Select>
          <Select v-show="isShow" v-model="searchData.department" v-if="$common.pageInitInfo.company_info" class="search-input" size="large" placeholder="请选择门店">
            <Option value="">全部（门店）</Option>
            <Option v-for="item in $common.pageInitInfo.company_info" :value="item.id" :key="'company_info'+item.id">{{ item.name }}</Option>
          </Select>
          <Select v-show="isShow" v-model="searchData.carVersion" v-if="$common.pageInitInfo.car_version" class="search-input" size="large" placeholder="请选择车辆品牌">
            <Option value="">全部（车辆品牌）</Option>
            <Option v-for="item in $common.pageInitInfo.car_version" :value="item.id" :key="'car_version'+item.id">{{ item.name }}</Option>
          </Select>
          <!--搜索按钮-->
          <div class="search-submit">
            <Tooltip content="更多搜索条件" placement="bottom-start">
              <Button class="search-btn " size="large" icon="ios-options-outline" type="primary" @click.native="isShow=!isShow"></Button>
            </Tooltip>
            <Button class="search-btn " size="large" icon="md-search" type="primary" @click.native="search"></Button>
            <Button class="refresh-btn search-btn" size="large" icon="md-refresh" type="info" @click.native="refresh"></Button>
          </div>
          <!--更多操作-->
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
        <paging-table ref="pagingTable" :config="config" :searchData="searchData"></paging-table>
      </div>
    </div>
</template>
<script type="text/jsx">
export default {
  data () {
    /*
    * isShow: 用于折叠搜索框的显示隐藏
    * iconType： 用于更多操作的icon变化
    * config: table的配置
    * searchData： 搜索栏的数据存储对象
    * startSearchData： 存储searchData的初始值，用于重置table
    * */
    return {
      isShow: false,
      iconType: 'md-arrow-dropdown',
      config: {
        fun: 'Car/carList',
        columns: [
          {
            key: 'name',
            title: '门店'
          },
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
          {key: 'expire_time', title: '保险到期时间'},
          {key: 'annual', title: '年审日期'},
          {key: 'status', title: '状态'},
          {
            key: 'caozuo',
            title: '操作',
            width: 160,
            align: 'center',
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
        vin: '',
        status: '',
        type: '',
        department: '',
        carVersion: ''
      },
      startSearchData: {
        plate_no: '',
        vin: '',
        status: '',
        type: '',
        department: '',
        carVersion: ''
      }
    }
  },
  components: {
  },
  created () {
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
    /* 搜索按钮 */
    search () {
      this.$refs.pagingTable.search(this.searchData)
    },
    /* 刷新按钮 */
    refresh () {
      /* 注意：不能将searchData引用为startSearchData，否则后续刷新将失效——引用（指针）与内存空间的关系问题 */
      let obj = {}
      Object.keys(this.startSearchData).forEach(key => {
        obj[key] = this.startSearchData[key]
      })
      this.searchData = obj
      this.$refs.pagingTable.refresh(this.searchData)
    },
    /* table操作栏 */
    tableBtnClick (item, type) {
      switch (type) {
        case 'see':
          alert(`查看：${item.id}`)
          break
        case 'editor':
          alert(`编辑：${item.id}`)
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
