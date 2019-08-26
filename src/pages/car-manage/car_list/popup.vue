<template>
  <Row>
    <Col span="12">

      <div class="card-body">
        <div class="card-header">
          <p class="card-title">基本信息</p>
        </div>
        <div class="card">
          <Row class="ma-lr">
<!--            <div class="ma-nomb-spacing">-->
<!--              <div class="bt-top">-->
<!--                基本信息-->
<!--              </div>-->
<!--            </div>-->
            <Col span="12" v-for="(list,index) in vehic_data" :key="list.id">
              <div class="ma-spacing">
                {{list.name}}：<span class="key_text">{{list.value}}</span>
              </div>
            </Col>
            <Col span="24">
              <div class="ma-nomb-spacing">
                <div class="bt-top">
                  行驶证照片
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>



    <Col span="12">
      <div class="card-body">
        <div class="card-header">
          <p class="card-title">车辆信息</p>
        </div>

        <div class="card">
          <Row class="ma-lr">
              <Tabs value="name1">
                <TabPane label="购车信息" name="name1">

                </TabPane>
                <TabPane label="GPS信息" name="name2">
                  <Row>
                    <div class="ma-nomb-spacing">
                      <div class="bt-no-top">
                        无线设备
                      </div>
                    </div>
                    <Col span="12" v-for="(list,index) in gps_wx" :key="list.id">
                      <div class="ma-spacing">
                        {{list.name}}：<span class="key_text">{{list.value}}</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div class="ma-nomb-spacing">
                      <div class="bt-no-top">
                        有线设备
                      </div>
                    </div>
                    <Col span="12" v-for="(list,index) in gps_yx" :key="list.id">
                      <div class="ma-spacing">
                        {{list.name}}：<span class="key_text">{{list.value}}</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div class="ma-nomb-spacing">
                      <div class="bt-no-top">
                        GPS安装照
                      </div>
                    </div>

                  </Row>
                  <Row>
                    <div class="ma-nomb-spacing">
                      <div class="bt-no-top">
                        GPS设备状态照
                      </div>
                    </div>

                  </Row>

                </TabPane>
              </Tabs>
          </Row>
        </div>
      </div>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: 'popup',
    props:{
      popupData:{
      }
    },
    data:function(){
      return {
        addData:'',
        dis_no:[false,false],
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
      }
    },
    created(){
      this.getlinst()
    },
    computed:{
      vehic_data:function () {
        var data = {
          plate_no:'车牌号码',
          dp_id_name:'门店',
          car_householder_name:'户主',
          type_name:'车辆类型',
          version_id_name:'品牌车型',
          color:'车身颜色',
          vin:'车架号',
          engine_no:'发动机号',
          on_plate:'注册时间',
          is_service_name:'营运性质',
          plate_city:'上牌城市',
          is_gas_name:'是否气罐',
          car_type_name:'车牌类型',
          storage_name:'车库',
          status_name:'状态',
          warehouse_place:'仓位',
          desc:'备注',
        }
        return this.clean(data,this.addData)
      },
      purchase_data:function () {
        let data = {
          buy_amount:'购车金额',
          tax_amount:'购置税金额'
        }

        return this.clean(data,this.addData)
      },
      Car_img:function () {
        let data = {
          buy_bill_img:'购车金额',
          tax_bill_img:'购置税金额'
        }
        return this.clean_data(data,this.addData,'img')
      },
      gps_wx:function () {
        let data = {
          device_number:'设备编号',
          device_manufacturer:'厂商',
          ctime:'续费日',
          status:'GPS状态'
        }
        return this.clean(data,this.addData.gps_info[0])

      },
      gps_yx:function () {
        let data = {
          device_number:'设备编号',
          device_manufacturer:'厂商',
          ctime:'续费日',
          status:'GPS状态'
        }
        return this.clean(data,this.addData.gps_info[0])

      }
    },
    methods:{
      async getlinst() {
        const _this = this
        var res  = await _this.$axios('car/getDetailInfo',{car_id:this.popupData.car_id})
        //先将空数据全部改为暂无
        for (let k in res.data){
          if (!res.data[k]){
            res.data[k]='暂无'
          }
        }
        this.addData  = res.data
      },
      clean(list,data){
        if (data){
          let newarray = []
          for (let key in list){
            newarray.push({name:list[key],value:data[key],data_name:key,hover:data[key]})
          }
          return newarray
        }
      },
      clean_data(list,data,img){
        if (data){
          if (img){
            let newarray = {}
            for (let key in list){
              newarray[`${list[key]}`] = data[key].split(',')
            }
            return newarray
          } else {

          }
        }
      },
    }
  }
</script>

<style scoped>

</style>
