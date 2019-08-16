<template>
    <div>
      <search></search>
      <div class="content-block">
        <paging-table :config="config"></paging-table>
      </div>
    </div>
</template>
<script>
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
      }
    }
  },
  mounted () {

  }
}
</script>
