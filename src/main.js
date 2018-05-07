import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填
    // 首页：^pages/index/main, 开发可更改首页方便调试
    pages: ['pages/logs/main', 'pages/index/main', 'pages/partner/main', 'pages/login/main', 'pages/user/main', 'pages/advise/main', '^pages/message/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '合火人',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333',
      selectedColor: '#FF7803',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: '/static/images/iconHome.png',
        selectedIconPath: '/static/images/selectedIconHome.png'
      },{
        pagePath: 'pages/index/main',
        text: '项目集锦',
        iconPath: '/static/images/iconProject.png',
        selectedIconPath: '/static/images/selectedIconProject.png'
      },{
        pagePath: 'pages/index/main',
        text: '合火人风采',
        iconPath: '/static/images/iconPartner.png',
        selectedIconPath: '/static/images/selectedIconPartner.png'
      },{
        pagePath: 'pages/user/main',
        text: '我的',
        iconPath: '/static/images/iconUser.png',
        selectedIconPath: '/static/images/selectedIconUser.png'
      }]
    }
  }
}
