import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import store from 'store/store.js'
import { $http } from '@escook/request-miniprogram'

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http
// 基地址
$http.baseUrl = 'http://172.220.5.169:3000/'

//请求开始做的事情
$http.beforeRequest = function(options){
	uni.showLoading({
		title:'数据加载中'
	})
	 // 判断请求的是否为有权限的 API 接口
	  // if (options.url.indexOf('/my/') !== -1) {
	  //   // 为请求头添加身份认证字段
	  //   options.header = {
	  //     // 字段的值可以直接从 vuex 中进行获取
	  //     Authorization: store.state.m_user.token,
	  //   }
	  // }
}
// 请求完成之后做一些事情
$http.afterRequest = function (options) {
  uni.hideLoading()
  if (options.data.code == 200){
	   options.data = options.data.data
  }else{
	uni.$showMsg()
  }
}
// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	// 挂载vuex到vue上
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif