<template>
  <Row>
    <Col span="12">
      <div class="card-body-nob">
        <div class="card">
          <Row class="vehicle-text vehicle-bg">
            <Row class="vehile-ma-l">
              <Col span="8" v-for="(value,name) in toplist" :key="value.id">
                <div class="ma-nomb-spacing">
                  {{name}}：<span class="">{{value}}</span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l" >
              <Col span="8" v-for="(list,index) in addlist" :key="list.id">
                <div class="underline">
                  {{list.name}}：<span class="">{{list.value}}</span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l" >
              <Col span="8" v-for="(value,name,index) in addlist_surplus" :key="value.id">
                <div class="underline">
                  {{name}}：<span class="">{{value}}</span>
                </div>
              </Col>
            </Row>
          </Row>
          <div class="vehicle-iconbg">
            <div class="vehicle-icon">
              <i class="iconfont iconcheliangxinxi fs-28"></i>
            </div>
          </div>
          <p class="data-btn vehicle-btn"
          >展<br>开<br>资<br>料<br></p>
        </div>
      </div>
    </Col>
    <Col span="12">
      <div class="card-body-nob">
        <div class="card">
          <Row class="vehicle-text vehicle-bg user-top">
            <Row class="vehile-ma-l">
              <Col span="8" v-for="(value,name) in topuser" :key="value.id">
                <div class="ma-nomb-spacing">
                  {{name}}：<span class="">{{value}}</span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l">
              <Col span="8" v-for="(value,name) in userlist" :key="value.id">
                <div class=" underline">
                  {{name}}：<span class="">{{value}}</span>
                </div>
              </Col>
            </Row>
          </Row>
          <Row class="vehicle-text">
            <Row class="vehile-ma-l">
              <Col span="8" v-for="(list,name) in userlist_surplus" :key="list.id">
                <div class="underline">
                  {{list.name}}：<span class="">{{list.value}}</span>
                </div>
              </Col>
            </Row>
          </Row>
          <div class="vehicle-iconbg">
            <div class="vehicle-icon">
              <i class="iconfont iconyonghu fs-24"></i>
            </div>
          </div>
          <p class="data-btn vehicle-btn">展<br>开<br>资<br>料<br></p>
        </div>
      </div>
    </Col>
  </Row>


</template>

<script>
  export default {
    name: 'userVehicleHead',
    props:{
      param:{
      }
    },
    data:function(){
      return {
        addData:'',
        dis_no:false
      }
    },
    created(){
      this.getlinst()
    },
    computed:{
      addlist:function () {
        var addlist_data = {'车辆':'car_status','违章':'illegal_info','保单':'insurance_etime_day','车审':'annual','证审':'license_annual','气罐':'is_gas'}
        return this.cleans(addlist_data,this.addData)
      },
      //清洗数据
      addlist_surplus:function () {
        var addlist_data = {'车架号':'vin'}
        return this.clean(addlist_data,this.addData)
      },
      toplist:function () {
        var toplist_data = {'车型':'brand','车牌':'plate_no','门店':'company'}
        return this.clean(toplist_data,this.addData)
      },
      topuser:function () {
        var toplist_data = {'姓名':'name','电话':'mobile','司管':'driver_manage'}
        return this.clean(toplist_data,this.addData)
      },
      userlist:function () {
        var userlist_data = {'月供(元)':'monthly_fee','期限(月)':'periods','产品类型':'type_name','还款状态':'status','履约保证金':'deposit_fee','挂账':'on_account_fee'}
        return this.clean(userlist_data,this.addData)
      },
      userlist_surplus:function () {
        var userlist_data = {'紧急联系人':'customer_contact','地址':'address','评分':'driver_star'}
        return this.cleans(userlist_data,this.addData)
      },
    },
    methods:{
       async getlinst() {
         const _this = this
         var res  = await _this.$axios('Common/getCommonalityHead',{plate_no:this.param})
         for (let k in res.data){
           if (!res.data[k]){
             res.data[k]='暂无'
           }
         }
         console.log(res.data)
         this.addData  = res.data
      },
      clean(list,data){
        for (let key in list){
          for (let k in data){
            if (k ==list[key]) {
              list[key] = data[k]
            }
          }
        }
        return list
      },
      cleans(list,data){
        var newarray = []
        let state = 0, //0默认状态，1红色，2绿色，3蓝色
            violationState,
            hover_text,
            value;
        //先清洗数据，与传过来的值对比，交集则留下
        for (let key in list){
          for (let k in data){
            if (k ==list[key]) {
              value = data[k]
              //循环判断是否有违章
              if (k =='illegal_info') {
                for (let s in data[k]) {
                  if (data[k][s] != 0) {
                    violationState = 1
                    break
                  }
                }
                violation(violationState, data[k])
              }
              //车辆有违章信息进行渲染
              function violation(violationState, data) {
                if (violationState == '1') { //判断有违章
                  value = `${data.ig_fine}元/${data.ig_score}分/${data.ig_nums}条`
                  state = 1
                } else {
                  value = `无违章`
                }
              }
              //紧急联系人判断
              if (k=='customer_contact'){
                if (data[k].length>0){
                  var address
                  data[k].forEach(e =>{
                    address += `${e.name}&nbsp${e.mobile}&nbsp${e.relation}`
                  })
                  value = address
                }
              }
              //判断气罐
              if (k=='is_gas'){
                var day = data.gastank_annual_day
                if (day <=0){
                  value = `${day}天`
                  state = 2
                  hover_text = `${value}/${data.gastank_annual}`
                }else {
                  value = `${day}天`
                  state = 1
                  hover_text = `${value}/${data.gastank_annual}`
                }
              }
              //判断保单
              if (k=='insurance_etime_day'){
                var day = data.insurance_etime_day
                if (day>0){
                  value = `${day}天`
                  state = 1
                  hover_text = `${value}/${data.insurance_etime}`
                }else {
                  value = `${Math.abs(day)}天`
                  state = 2
                  hover_text = `${value}/${data.insurance_etime}`
                }
              }
              //判断车审证审
              if (k=='annual' || k=='license_annual'){
                var day = k == 'annual' ? data.annual_day : data.license_annual_day;
                var time = k == 'annual' ? data.annual : data.license_annual;
                vehicleLicense(day, time)
              }
              //判断车审和证审
              function vehicleLicense(day, time,) {
                if (day <= 0) { //正常
                  value = `${Math.abs(day)}天`
                  hover_text = `${value}/${time}`
                  state =2
                } else {
                  value = `${day}天`
                  hover_text = `${value}/${time}`
                  state =1
                }
              }
              //增加到数组
              newarray.push({name:key,value:value,data_name:k,state:state,hover:hover_text})
            }
          }
        }
        return newarray
      },
    }
  }
</script>

<style scoped>

</style>
