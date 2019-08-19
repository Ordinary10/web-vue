<template>
   <div class="top-wrapper">
     <div class="user_info">
       <div class="refresh" @click.stop="refresh"><Icon type="md-refresh" /></div>
       <Dropdown placement="bottom">
         <div class="Dropdown">
           <span class="user_img"></span>
           {{company_name}}
           <Icon type="ios-arrow-down"></Icon>
         </div>
         <DropdownMenu slot="list">
           <DropdownItem>
             <Icon type="md-color-filter" />更换公司
           </DropdownItem>
           <DropdownItem  @click.native="changeMode">
             <Icon type="md-color-filter"/>更换模式
           </DropdownItem>
           <DropdownItem>
             <Icon type="ios-build-outline" />修改密码
           </DropdownItem>
           <DropdownItem @click.native="loginOut">
             <Icon type="ios-power" />退出
           </DropdownItem>
         </DropdownMenu>
       </Dropdown>
     </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['isSidebarNavCollapse', 'loginData', 'crumbList']),
    ...mapState('permission', ['sidebarMenu', 'currentMenu']),
    company_name () {
      if (this.loginData) {
        return this.loginData.userInfo.company_name
      } else {
        return ''
      }
    }
  },
  methods: {
    loginOut () {
      this.$store.dispatch('LOGIN_OUT').then(() => {
        this.$router.push('/login')
      })
    },
    refresh () {
      // window.location.reload()
      this.$emit('refresh')
    },
    changeMode () {
      this.$store.commit('changeMode')
    }
  },
  components: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.top-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background:rgba(76,124,243,1);
  margin-left: 240px;
  z-index: 9999;
  .user_info{
    float: right;
    display: flex;
    margin-right: 10px;
    .refresh{
      height: 100%;
      padding: 13px;
      text-align: center;
      .ivu-icon-md-refresh{
        color: #fff;
        font-size: 34px;
        cursor: pointer;
      }
    }
    .refresh:hover{
      background-color:#054ff5;
    }
    /*下拉框*/
    .ivu-dropdown{
      flex: 1;
      height: 100%;
    }
    .Dropdown{
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      text-align: center;
      font-size: 17px;
      .ivu-icon-ios-arrow-down{
        margin-left: 5px;
        transition: transform .2s ease-in-out;
      }
      &:hover{
        .ivu-icon-ios-arrow-down{
          transform: rotate(180deg);
        }
      }
      .user_img{
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url("../../../../../static/images/face.jpg") no-repeat center center;
        border-radius: 50%;
        background-size: 30px 30px;
        margin: 5px 10px;
      }
    }
    .ivu-dropdown-menu{
      .ivu-icon{
        font-size: 16px !important;
        color: #515a6e;
        margin: 0 5px;
      }
    }
  }
}
</style>
