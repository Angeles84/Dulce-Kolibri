import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Firebase from 'firebase'

Vue.config.productionTip = false

Firebase.initializeApp({
<<<<<<< HEAD
 
=======
  
>>>>>>> feea13fddad8ea650552ce90b5bc9a4ec79b4ebd
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
