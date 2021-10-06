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
  apiKey: "AIzaSyBiAwPCeaR24J-1KYHK9r1FPqy6o-QrLAc",
  authDomain: "dulce-kolibri.firebaseapp.com",
  projectId: "dulce-kolibri",
  storageBucket: "dulce-kolibri.appspot.com",
  messagingSenderId: "187799089534",
  appId: "1:187799089534:web:10bbda90178375c40d432f"
>>>>>>> 4c8e7999b376d988f779ab2c59c689a4f3088b47
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
