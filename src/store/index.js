import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    producto: [],
    links: [
      'Inicio',
      'Nosotros',
      'Productos',
      'Contacto',
    ],
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_PRODUCTO_AL_CARRITO(state, nuevoProductoAgregado){
      state.producto.push(nuevoProductoAgregado)
      console.log(this.producto);
    }
  },
  actions: {
    agregarAlCarrito(context, id){
      console.log('COntext', context);
      console.log('id', id);
      context.commit('ADD_PRODUCTO_AL_CARRITO', id)

    }
  },
  modules: {
  }
})
