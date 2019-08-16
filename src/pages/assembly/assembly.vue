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
    <Col span="9">
      <div class="card-body-nob">
        <div class="card">
          <Row class="vehicle-text vehicle-bg">
            <Row class="vehile-ma-l">
              <Col span="8">
                <div class="ma-nomb-spacing">
                  车型：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="ma-nomb-spacing">
                  车牌：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="ma-nomb-spacing">
                  门店：<span class=""></span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l">
              <Col span="8">
                <div class=" underline">
                  车型：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class=" underline">
                  车牌：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class=" underline">
                  门店：<span class=""></span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l">
              <Col span="8">
                <div class="underline">
                  车型：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="underline">
                  车牌：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="underline">
                  门店：<span class=""></span>
                </div>
              </Col>
            </Row>
          </Row>
          <div class="vehicle-iconbg">
            <div class="vehicle-icon">
              <i class="iconfont iconcheliangxinxi fs-28"></i>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81px" height="82px">
              <defs>
                <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="81px" height="82px">
                  <feOffset in="SourceAlpha" dx="0" dy="4"></feOffset>
                  <feGaussianBlur result="blurOut" stdDeviation="3"></feGaussianBlur>
                  <feFlood flood-color="rgb(0, 0, 0)" result="floodOut"></feFlood>
                  <feComposite operator="atop" in="floodOut" in2="blurOut"></feComposite>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.19"></feFuncA>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#Filter_0)">
                <path fill-rule="evenodd" fill="rgb(18, 105, 219)" d="M5.000,69.987 L5.000,9.000 C5.000,6.791 6.791,5.000 9.000,5.000 L69.000,5.000 C69.000,5.000 69.000,5.000 69.000,5.000 C69.000,40.564 40.437,69.452 5.000,69.987 Z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Col>
    <Col span="9">
      <div class="card-body-nob">
        <div class="card">
          <Row class="vehicle-text vehicle-bg user-top">
            <Row class="vehile-ma-l">
              <Col span="8">
                <div class="ma-nomb-spacing">
                  车型：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="ma-nomb-spacing">
                  车牌：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="ma-nomb-spacing">
                  门店：<span class=""></span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l">
              <Col span="8">
                <div class=" underline">
                  车型：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class=" underline">
                  车牌：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class=" underline">
                  门店：<span class=""></span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l">
              <Col span="8">
                <div class="underline">
                  车型：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="underline">
                  车牌：<span class=""></span>
                </div>
              </Col>
              <Col span="8">
                <div class="underline">
                  门店：<span class=""></span>
                </div>
              </Col>
            </Row>
          </Row>
          <div class="vehicle-iconbg">
            <div class="vehicle-icon">
              <i class="iconfont iconyonghu fs-24"></i>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81px" height="82px">
              <defs>
                <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="81px" height="82px">
                  <feOffset in="SourceAlpha" dx="0" dy="4"></feOffset>
                  <feGaussianBlur result="blurOut" stdDeviation="3"></feGaussianBlur>
                  <feFlood flood-color="rgb(0, 0, 0)" result="floodOut"></feFlood>
                  <feComposite operator="atop" in="floodOut" in2="blurOut"></feComposite>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.19"></feFuncA>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#Filter_0)">
                <path fill-rule="evenodd" fill="rgb(252, 97, 128)" d="M5.000,69.987 L5.000,9.000 C5.000,6.791 6.791,5.000 9.000,5.000 L69.000,5.000 C69.000,5.000 69.000,5.000 69.000,5.000 C69.000,40.564 40.437,69.452 5.000,69.987 Z"></path>
              </g>
            </svg>
          </div>
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
  @mixin clearfix {
    &:after{
      content:".";
      display:block;
      height:0;
      clear:both;
      visibility:hidden;
    }
  }
  @mixin card{
    border: 0;
    word-wrap: break-word;
    background-clip: border-box;
    margin-left: 7px;
    margin-right: 7px;
    position: relative;
  }
  @mixin vehicle-text{
    margin-left: -14px !important;
    margin-right: -14px !important;
    border-radius: 4px 4px 0 0;
  }
  @mixin no-underline{
    padding: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @mixin ma-nomb-spacing{
    position: relative;
    zoom: 1;
    margin-right: 10px;
    margin-left: 10px;
    @include clearfix;
  }
  @mixin fs-28{
    font-size: 28px;
  }
  @mixin fs-21{
    font-size: 21px;
  }
  @mixin fs-24{
    font-size: 24px;
  }
  .ma-nomb-spacing{
    position: relative;
    zoom: 1;
    margin-right: 10px;
    margin-left: 10px;
    @include clearfix;
  }
  .card-body-tb{
    padding-top: 10px;
  }
  .card-body-nob{
    border: 1px solid rgba(211, 210, 210, 1);
    border-radius: 4px;
    position: relative;
    padding-left: 7px;
    padding-right: 7px;
    margin-left: 7px;
    margin-right: 7px;
    .card{
      .vehicle-bg{
        padding: 14px 0;
      }
      .vehicle-text{
        @include vehicle-text;
        .underline{
          @include no-underline;
          @include ma-nomb-spacing;
        }
      }
      .vehicle-text:nth-child(n+3){
        .underline{
          border-top: 1px solid #dcdee2;
        }
      }
      @include card;
    }
  }
  body{
    font-size: 14px;
  }
  .fs-28{
    @include fs-28
  }
  .fs-24{
    @include fs-24
  }
  .fs-21{
    @include fs-21
  }
  /*表头*/
  .vehicle-icon{
    /*float: left;*/
    position: absolute;
    color: #fff;
    left: 17px;
    top: 7px;
  }


  .vehile-ma-l{

    margin-right: 24px;
    margin-left: 64px
  }
  .vehicle-iconbg{
    position: absolute;
    float: left;
    top: -5px;
    left: -20px;
  }
  .vehicle-body{
    margin-left: 43px;
  }

  .vehicle-bg{
    background: linear-gradient(90deg, rgba(74, 145, 237, 1), rgba(18, 105, 219, 1));
    color: #fff;
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
      @include card;
      margin-bottom: 10px;
    }
  }
  .user-top{
    background: linear-gradient(90deg, rgba(252, 97, 128, 0.7),rgba(252, 97, 128, 1) );
  }

  .ma-lr{
    margin-left: -10px;
    margin-right: -10px;
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
