<template>
  <div class="upload-wrapper">
    <div class="title" v-if="config.title" v-html="config.title">{{config.title}}</div>
    <div class="img-box">
      <div class="upload-list" v-for="item in uploadList" :key="item">
        <template v-if="item.status === 'finished'">
          <img :src="item.url">
          <div class="upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <Upload
        v-show="uploadList.length < (config.max || 5)"
        ref="upload"
        :show-upload-list="false"
        :default-file-list="config.oldImg"
        :on-success="handleSuccess"
        :format="['jpg', 'jpeg', 'png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        :multiple="config.multiple || true"
        type="drag"
        :action="API_PATH"
        :data="networkConfig"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload >
    </div>
    <Modal title="查看图片" v-model="visible"  class-name="vertical-center-modal">
      <img :src="showUrl" v-if="visible" style="width: 100%">
    </Modal>
  </div>

</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          // 图片标题 不传入 默认空
          title: '图片标题',
          // 是否多文件  不传入 默认为true
          // multiple: false
          // 最大文件数量  不传入 默认为5
          // max: 5,
          // 接口 图片保存的类型 不传入 默认为Car
          type: 'Car',
          oldImg: [
          ]
        }
      }
    }
  },
  data () {
    return {
      networkConfig: {
        fun: 'common/uploadImg',
        token: JSON.parse(sessionStorage.getItem('loginData')).token,
        type: this.config.type
      },
      showUrl: '',
      visible: false,
      uploadList: []
    }
  },
  methods: {
    handleView (url) {
      this.visible = true
      this.showUrl = url
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess (res, file) {
      // console.log(res, file)
      file.url = file.response.data.url
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '上传失败',
        desc: file.name + ' 文件后缀必须为' + ['jpg', 'jpeg', 'png'].join(' ')
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '上传失败',
        desc: file.name + ' 文件超出2M 大小.'
      })
    },
    handleBeforeUpload () {
      // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
      return true
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList
  },
  computed: {
    API_PATH () {
      return this.$common.API_PATH
    },
    // 获取上传的url字符串
    getImgUrl () {
      let res = ''
      for (let i = 0; i < this.uploadList.length; i++) {
        let url = this.uploadList[i].url
        res += url
        if (i !== this.uploadList.length - 1) res += ','
      }
      return res
    }
  }
}
</script>

<style scoped lang="scss">
  .upload-wrapper{
    margin: 0 5px;
    overflow: hidden;
    .title{
      margin: 10px ;
      border-left: 3px solid red;
      height: 16px;
      line-height: 16px;
      padding-left: 7px;
    }
    .img-box{
      margin-left: 20px;
    }
  }
  .upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
    img{
      width: 100%;
      height: 100%;
    }
    &:hover .upload-list-cover{
      display: block;
    }
  }
  .upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    i{
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }
  /*对话框居中*/
  /deep/ .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal{
      top: 0;
    }
  }
</style>
