/* 全局方法对象 */
const common = {
  // 日期格式  获取现在或者几天后的时间字符串格式
  /**
   * day 几天后 number
   * */
  getNowFormatDate: function (day) {
    var date = new Date()
    if (day && typeof day === 'number') date.setDate(date.getDate() + day)
    var seperator1 = '-'
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    return year + seperator1 + month + seperator1 + strDate
  }
}

export default common
