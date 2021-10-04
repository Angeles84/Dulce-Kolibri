import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    productos: [],
    numeroOrden : '',
    formLabelAlign: {
      email: "",
      password: "",
    },
    links: [
      'Inicio',
      'Nosotros',
      'Productos',
      'Contacto',
    ],
  },
  getters:{
    valorTotalVenta(state){
      return state.productos.reduce((accumulator, producto) => {
        return accumulator + producto.precio
      },0) 
    },
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_PRODUCTO_AL_CARRITO(state, nuevoProductoAgregado){
      console.log('ProductoAgregado', nuevoProductoAgregado);
      state.productos.push(nuevoProductoAgregado)
    }
  },
  actions: {
    agregarAlCarrito({ state, commit }, { index}){

      // const productoEncarritoDecompras = state.productos.findIndex(
      //   (productoCarrito) =>{
      //   return productoCarrito.index === productos.index
      //   }
      // )
      commit("ADD_PRODUCTO_AL_CARRITO", index);
      console.log('productoPasadooo', [{index}]);
      alert(`${ index.title} - Producto agregado con exito!`);
      console.log('este es', [state.productos]);
      
    },
  },
  modules: {
  }
})
