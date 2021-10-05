import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    productos: [],
    detalles: [],
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
    data: [],
    tortas: [],
    postres: [],
    galletas: [],
    sugerencias: [],
    destacados: [],
    producto: {
      nombre: '',
      imagen: '',
      personas: '',
      descripcion: '',
      precio: 0,
    },
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
    },
    ADD_PRODUCTO_AL_DETALLE(state, nuevoProductoAgregado){
      console.log('ProductoAgregado', nuevoProductoAgregado);
      state.detalles.push(nuevoProductoAgregado)
    },
    SET_DATA(state, newData) {
      state.data = newData
    },
    GET_TORTAS(state, newTortas) {
      state.tortas = newTortas;
    },
    GET_POSTRES(state, newPostres) {
      state.postres = newPostres;
    },
    GET_GALLETAS(state, newGalletas) {
      state.galletas = newGalletas;
    },
    GET_SUGERENCIAS(state, newSug) {
      state.sugerencias = newSug;
    },
    GET_DESTACADOS(state, newSug) {
      state.destacados = newSug;
    },
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
      alert(`${ index.nombre} - Producto agregado con exito!`);
      console.log('este es', [state.productos]);
      
    },
    agregarDetalle({ state, commit }, { i}){
      commit("ADD_PRODUCTO_AL_DETALLE", i);
      console.log('productoPasadooo', [{i}]);
      alert(`${ i.nombre} - Producto agregado con exito!`);
      console.log('detalle', [state.detalles]);
      
    },
    getTortas(context) {
      Firebase.firestore()
        .collection('tortas')
        .get()
        .then((querySnapshot) => {
          let data = []
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_TORTAS', data)
        })
    },
    getPostres(context) {
      Firebase.firestore()
        .collection('postres')
        .get()
        .then((querySnapshot) => {
          let data = []
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_POSTRES', data)
        })
    },
    getGalletas(context) {
      Firebase.firestore()
        .collection('galletas')
        .get()
        .then((querySnapshot) => {
          let data = []
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_GALLETAS', data)
        })
    },
    getSugerencias(context) {
      Firebase.firestore()
        .collection('sugerencias')
        .get()
        .then((querySnapshot) => {
          let data = []
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_SUGERENCIAS', data)
        })
    },
    getDestacados(context) {
      Firebase.firestore()
        .collection('destacados')
        .get()
        .then((querySnapshot) => {
          let data = []
          querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_DESTACADOS', data)
        })
    },
  },
  modules: {
  }
})
