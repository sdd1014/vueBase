import Vue from 'vue'
import App from './App'//把组装好的整体组件导入到入口文件，准备渲染
Vue.config.productionTip = false
new Vue({
  el:'#root',
  // render:function(createElement){
  //   createElement(App)
  // },
  // render: h=>h(App)
  components:{
    App
  },
  template:'<App/>'
})