import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Firebase from 'firebase'

Vue.config.productionTip = false
Firebase.initializeApp({
  apiKey: "AIzaSyBiAwPCeaR24J-1KYHK9r1FPqy6o-QrLAc",
  authDomain: "dulce-kolibri.firebaseapp.com",
  projectId: "dulce-kolibri",
  storageBucket: "dulce-kolibri.appspot.com",
  messagingSenderId: "187799089534",
  appId: "1:187799089534:web:10bbda90178375c40d432f"
})

new Vue({
  router,
  store,
  vuetify,
  Firebase,
  render: h => h(App)
}).$mount('#app')
