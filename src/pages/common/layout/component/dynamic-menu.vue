<!--使用递归 动态渲染菜单  组件使用-->
<template>
    <div class="menu-container">
        <template v-for="v in menuList">
            <Submenu  v-if="v.children&&v.children.length>0" :key="v.name" :name="v.name">
              <template slot="title">
                <div ref="title" :data-name="v.name">
                  <Icon :type="v.meta.icon"></Icon>
                  {{v.meta.name}}
                </div>
              </template>
                    <dynamic-menu :menuList="v.children"></dynamic-menu>
            </Submenu>
          <Menu-item :key="v.name"  @click.native="gotoRoute(v.name)"  v-else-if="v.meta.pass !== false" :name="v.name">
              <Icon :type="v.meta.icon"></Icon>
                {{v.meta.name}}
            </Menu-item>
        </template>
    </div>
</template>

<script>
export default {
  name: 'dynamic-menu',
  props: {
    menuList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    gotoRoute (name) {
      // alert(name)
      this.$router.push({ name })
    }
  },
  mounted () {
    if (this.$refs.title) {
      this.$refs.title.forEach(div => {
        div.addEventListener('click', e => {
          let name = div.dataset.name
          this.gotoRoute(name)
        })
      })
    }
  }
}
</script>
