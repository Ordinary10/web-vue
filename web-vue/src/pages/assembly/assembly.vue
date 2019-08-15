<template>
  <Row>
    <Col span="8">
        <div class="card-body">
          <div class="card">
            <Row class="ma-lr">
              <div class="ma-nomb-spacing">
                <div class="bt-top">
                  表格标题
                </div>
              </div>
              <div class="ma-nomb-spacing">
                <Table :columns="columns1" :data="data1"></Table>
              </div>
            </Row>
          </div>
        </div>
    </Col>
    <Col span="8">
      <div class="card-body">
        <div class="card">
          <Row class="ma-lr">
            <div class="ma-nomb-spacing">
              <div class="bt-top">
                表格标题
              </div>
            </div>
            <Form :model="formLeft" label-position="right" :label-width="80">
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="姓名">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
            </Form>
          </Row>
        </div>
      </div>
    </Col>
    <Col span="8">
      <div class="card-body">
        <div class="card">
          <Row class="ma-lr">
            <div class="ma-nomb-spacing">
              <div class="bt-top">
                表格标题
              </div>
            </div>
            <Form class="l-form-label" :model="formLeft" label-position="right" :label-width="80">
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem  prop="user">
                    <Input type="text"  placeholder="Username">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
            </Form>
          </Row>
        </div>
      </div>
    </Col>

    <Col span="8">
      <div class="card-body">
        <div class="card">
          <Row class="ma-lr">
            <div class="ma-nomb-spacing">
              <div class="bt-top">
                表格标题
              </div>
            </div>
            <Form :model="formLeft" label-position="top"  >
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="姓名">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="12">
                <div class="ma-nomb-spacing">
                  <FormItem label="年龄">
                    <Input v-model="formLeft.input1"></Input>
                  </FormItem>
                </div>
              </Col>
            </Form>
          </Row>
        </div>
      </div>
    </Col>

  </Row>

</template>
<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        formLeft: {
          input1: '',
          input2: '',
          input3: ''
        },
      }
    },
  }
</script>
<style scoped lang="scss">
  body{
    font-size: 14px;
  }
  .main-container{
    height: 100%;
    background-size: 100% 100%;
    #loginForm{
      width: 500px;
      margin: 0 auto;
    }
  }
  .ivu-form .ivu-form-item-label{
      width: 110px;
      padding: 8px 15px;
      height: 38px;
      line-height: 20px;
      border-width: 1px;
      border-style: solid;
      border-radius: 2px 0 0 2px;
      text-align: center;
      background-color: #fff;
      overflow: hidden;
      box-sizing: border-box;
      float: left;
      display: block;
  }
  .bt-top{
    font-size: 16px;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
  }
  .card-body{
    border: 1px solid rgba(211, 210, 210, 1);
    border-radius: 4px;
    position: relative;
    padding-left: 7px;
    padding-right: 7px;
    margin-left: 7px;
    margin-right: 7px;
    padding-bottom: 10px;
    .card{
      border: 0;
      word-wrap: break-word;
      background-clip: border-box;
      margin-left: 7px;
      margin-right: 7px;
      margin-bottom: 10px;
      position: relative;
      .card-body-tb{
        padding-top: 10px;
      }
    }
  }
  .ma-lr{
    margin-left: -10px;
    margin-right: -10px;
  }
  @mixin clearfix {
    &:after{
      content:".";
      display:block;
      height:0;
      clear:both;
      visibility:hidden;
    }
  }
  .ma-nomb-spacing{
    position: relative;
    zoom: 1;
    margin-right: 10px;
    margin-left: 10px;
    @include clearfix;
  }
  .bt-no-top{
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    /*float: left;*/
  }
  .ma-spacing{
    position: relative;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    @include clearfix;
  }
  .ivu-form-item-label{
    font-size: 14px;
  }

</style>
