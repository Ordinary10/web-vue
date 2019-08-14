<template>
    <div class="main-container">
      <Form ref="loginForm" :model="loginForm" id="loginForm">
        <FormItem prop="user">
          <Input type="text" v-model="loginForm.account" placeholder="请输入用户名">
            <i class="iconfont iconyonghu" slot="prepend"></i>
          </Input>
        </FormItem>
        <FormItem prop="pwd">
          <Input type="password" v-model="loginForm.pwd" placeholder="请输入密码">
            <i class="iconfont iconmima" slot="prepend"></i>
          </Input>
        </FormItem>
        <FormItem prop="code">
          <Input type="text" v-model="loginForm.code" placeholder="请输入验证码">
            <i class="iconfont iconyanzhengma" slot="prepend"></i>
          </Input>
          <img :src="codeImgSrc" alt="" @click="getCode">
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>
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
    handleSubmit () {
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
    #loginForm{
      width: 500px;
      margin: 0 auto;
    }
  }
</style>
