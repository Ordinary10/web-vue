<template>
    <div class="main-container">
      <div class="login-form">
        <div class="login-face">
        </div>
        <form action="" ref="form" class="form">
          <div class="form-item">
            <span class="form-label">用户名</span>
            <input class="form-input" type="text" v-model="loginForm.account" placeholder="">
          </div>
          <div class="form-item">
            <span class="form-label">密码</span>
            <input class="form-input" type="password" v-model="loginForm.pwd" placeholder="">
          </div>
          <div class="form-item">
            <span class="form-label">验证码</span>
            <input class="form-input" type="text" v-model="loginForm.code" placeholder="">
            <img class="code-img" :src="codeImgSrc" alt="" @click="getCode">
          </div>
          <div class="form-item">
            <button type="button" class="login-btn" @click="login">登录</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      codeImgSrc: '',
      loginForm: {
        account: '',
        pwd: '',
        code: '',
        loginRandom: ''
      }
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    login () {
      const _this = this
      _this.$axios('login/doLogin', _this.loginForm).then(res => {
        console.log(res)
        this.$store.commit('LOGIN_IN', res.data)
        this.$router.replace('/')
      })
    },
    getCode () {
      const _this = this
      let randomNo = Math.random()
      let norand = _this.MathRand()
      _this.loginForm.loginRandom = norand
      _this.codeImgSrc = `${_this.$common.API_PATH}?fun=login/captcha&random=${randomNo}&loginRandom=${norand}`
    },
    MathRand () {
      let Num = ''
      for (var i = 0; i < 6; i++) {
        Num += Math.floor(Math.random() * 10)
      }
      return Num
    }
  }
}
</script>

<style scoped lang="scss">
  .main-container{
    height: 100%;
    background: url("../../../../static/images/login_bg.jpg") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    #loginForm{
      width: 500px;
      margin: 0 auto;
    }
    .login-form{
      padding: 0 20px;
      width: 300px;
      height: 335px;
      position: absolute;
      left: 80%;
      top: 50%;
      margin: -150px 0 0 -150px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -o-box-sizing: border-box;
      box-sizing: border-box;
      background: #fff;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      box-shadow: 0 0 50px #009688;
      .login-face{
        background: url("../../../../static/images/face.jpg") no-repeat center center;
        background-size: 100% 100%;
        width: 110px;
        height: 110px;
        position: absolute;
        border-radius: 50%;
        box-shadow: 0 0 30px #009688;
        border: 5px solid #fff;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
      }
      .form{
        margin-top: 76px;
        .form-item{
          height: 38px;
          margin-bottom: 16px;
          position: relative;
          .form-input{
            width: 100%;
            padding-left: 10px;
            border: 1px solid #e6e6e6;
            height: 38px;
            line-height: 1.3;
            border-radius: 2px;
            &:hover{
              border-color: #D2D2D2;
            }
          }
          .code-img{
            position: absolute;
            width: 50%;
            height: 36px;
            right: 1px;
            top: 1px;
          }
          .form-label{
            position: absolute;
            color: #757575;
            left: 10px;
            top: -10px;
            line-height: 20px;
            background: #fff;
            padding: 0 5px;
            font-size: 14px;
            cursor: text;
          }
          .login-btn{
            width: 100%;
            display: inline-block;
            height: 38px;
            line-height: 38px;
            padding: 0 18px;
            background-color: #009688;
            color: #fff;
            white-space: nowrap;
            text-align: center;
            font-size: 14px;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            &:hover{
              opacity: .8;
              color: #fff;
              border: none !important;
            }
          }
        }
      }
    }
  }
</style>
