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
  }
}
