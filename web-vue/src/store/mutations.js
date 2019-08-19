export default {
  LOGIN_IN (state, loginData) {
    state.loginData = loginData
    state.UserToken = loginData.token
  },
  LOGIN_OUT (state) {
    state.loginData = ''
    state.UserToken = ''
  },
  toggleNavCollapse (state) {
    state.isSidebarNavCollapse = !state.isSidebarNavCollapse
  },
  setCrumbList (state, list) {
    state.crumbList = list
  },
  changeMode (state) {
    state.PageMode = state.PageMode === 1 ? 0 : 1
  },
  addTab (state, data) {
    state.tabList.push(data)
  },
  clearTab (state) {
    state.tabList = []
  },
  SetTab (state, data) {
    state.cruTab = data
  },
  changeTab (state) {
    state.TabPage = state.TabPage === 1 ? 0 : 1
    state.tabList = []
  }
}
