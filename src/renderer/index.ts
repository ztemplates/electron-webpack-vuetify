import Vue from 'vue'
import router from 'renderer/router'
import vuetify from 'renderer/plugins/vuetify'
import App from 'renderer/App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
