/* table配置文件 */
export default {
  /* 车辆列表 */
  'carList': {
    fun: 'Car/carList',
    columns: [
      {
        key: 'name',
        title: '门店'
      },
      {
        key: 'plate_no',
        title: '车牌'
      },
      {
        key: 'carVersion',
        title: '车型'
      },
      {
        key: 'expire_time',
        title: '保险到期时间'
      },
      {
        key: 'annual',
        title: '年审日期'
      },
      {
        key: 'status',
        title: '状态'
      }
    ]
  },
  /* 保单列表 */
  'insuranceList': {
    fun: 'Car/insuranceWarn',
    columns: [
      {
        key: 'company_name',
        title: '门店'
      },
      {
        key: 'plate_no',
        title: '车牌号'
      },
      {
        key: 'carVersion',
        title: '车型'
      },
      {
        key: 'days',
        title: '脱保天数'
      },
      {
        key: 'etime',
        title: '商业险到期日'
      },
      {
        key: 'jqx_etime',
        title: '交强险到期日'
      },
      {
        key: 'quote_time',
        title: '报价时间'
      }]
  }
}
