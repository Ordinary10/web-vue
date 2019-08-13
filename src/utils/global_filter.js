/* vue全局过滤器 */
const filters = {
  dateMonth: function (ctime) {
    return ctime.split(' ')[0]
  }
}
export default filters
