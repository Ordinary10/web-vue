<!--使用递归 动态渲染菜单  组件使用-->
<template>
  <div class="menu-container">
    <template v-for="v in menuList">
      <Submenu v-if="v.children&&v.children.length>0" :key="v.name" :name="v.name">
        <template slot="title">
          <div ref="title" :data-name="v.name">
            <Icon :type="v.meta.icon" v-if="v.meta.icon"></Icon>
            {{v.meta.name}}
          </div>
        </template>
        <dynamic-menu :menuList="v.children"></dynamic-menu>
      </Submenu>
      <Menu-item :key="v.name" @click.native="gotoRoute(v.name)" v-else-if="v.meta.pass !== false" :name="v.name">
        <Icon :type="v.meta.icon" v-if="v.meta.icon"></Icon>
        {{v.meta.name}}
      </Menu-item>
    </template>
  </div>
</template>

<script>
import dynamicRoutes from '@/router/dynamic-router.js'
import {DynamicRoutes} from '@/router/index'
import {mapState} from 'vuex'

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
  computed: {
    ...mapState(['tabList', 'TabPage'])
  },
  methods: {
    gotoRoute (name) {
      if (this.TabPage !== 1) {
        this.$router.push({ name })
      } else {
        let res = this.test(name, dynamicRoutes.concat(DynamicRoutes))
        // console.log(res)
        if (this.aa(name)) this.$store.commit('addTab', res)
        this.$store.commit('SetTab', name)
      }
    },
    test (name, routes) {
      let component, res, title
      for (let key in routes) {
        if (routes[key].name === name) {
          component = routes[key].component
          title = routes[key].meta.name
          res = {name, component, title}
          break
        }
        if (routes[key].children && routes[key].children.length) {
          res = this.test(name, routes[key].children)
          if (res) return res
        }
      }
      return res
    },
    aa (name) {
      let res = true
      this.tabList.forEach(e => {
        if (e.name === name) res = false
      })
      return res
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
