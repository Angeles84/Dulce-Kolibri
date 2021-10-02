import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    links: [
      'Inicio',
      'Nosotros',
      'Productos',
      'Contacto',
    ],
    tortas: [],
    postres: [],
    galletas: [],
    sugerencias: [],
    producto: {
      nombre: '',
      imagen: '',
      personas: '',
      descripcion: '',
      precio: 0,
     
    },
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
