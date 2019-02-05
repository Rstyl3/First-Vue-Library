import Vue from 'vue'
import App from './App.vue'
import XfChatBox from './components/index.js'

Vue.use(XfChatBox)
// Vue.component('xf-chat-box',  XfChatBox )

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')