import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    drawer: false,
    productos: [],
    detalles: [],
    numeroOrden: '',
    formLabelAlign: {
      email: '',
      password: ''
    },
    producto: {
      nombre: '',
      imagen: '',
      personas: '',
      descripcion: '',
      descuento: '',
      precio: 0
    },
    links: ['Inicio', 'Nosotros', 'Productos', 'Contacto'],
    data: [],
    tortas: [],
    postres: [],
    galletas: [],
    sugerencias: [],
    destacados: [],
  
    torta: {
      nombre: '',
      imagen: '',
      personas: '',
      descripcion: '',
      descuento: '',
      precio: 0
    },
    postre: {
      nombre: '',
      imagen: '',
      personas: '',
      descripcion: '',
      descuento: '',
      precio: 0
    },
    galleta: {
      nombre: '',
      imagen: '',
      personas: '',
      descripcion: '',
      descuento: '',
      precio: 0
    },
    roles: []
  },
  getters: {
    valorTotalVenta(state) {
      return state.productos.reduce((accumulator, producto) => {
        return accumulator + producto.precio
      }, 0)
    },
    sumaTotalProductos(state) {
      return state.productos.reduce((accumulator, producto) => {
        return accumulator + producto.precio * producto.qty
      }, 0)
    },
    sumaSubTotal(state, index) {
      return state.productos.reduce((accumulator, producto) => {
        return accumulator + Number.parseInt(producto.precio[index]) * producto.qty
      }, 0)
    },
    productos(state){
      return [
        ...state.tortas.map(torta => ({...torta, categoria: 'tortas'})),
        ...state.postres.map(postre => ({...postre, categoria: 'postres'})),
        ...state.galletas.map(galleta => ({...galleta, categoria: 'galletas'}))
      ]
    },
    esAdmin(state){
      return state.roles.some(rol => rol.correo === state.user.email)
    }
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    ADD_PRODUCTO_AL_CARRITO(state, nuevoProductoAgregado) {
      console.log('ProductoAgregado', nuevoProductoAgregado)
      state.productos.push(nuevoProductoAgregado)
    },
    ADD_PRODUCTO_AL_DETALLE(state, nuevoProductoAgregado) {
      console.log('ProductoAgregado', nuevoProductoAgregado)
      state.detalles.push(nuevoProductoAgregado)
    },
    SET_DATA(state, newData) {
      state.data = newData
    },
    GET_TORTAS(state, newTortas) {
      state.tortas = newTortas
    },
    GET_POSTRES(state, newPostres) {
      state.postres = newPostres
    },
    GET_GALLETAS(state, newGalletas) {
      state.galletas = newGalletas
    },
    GET_SUGERENCIAS(state, newSug) {
      state.sugerencias = newSug
    },
    GET_DESTACADOS(state, newSug) {
      state.destacados = newSug
    },
    ADD_QTY_TO_SHOPPINGCART_ITEM(state, productIndex) {
      state.productos[productIndex].qty++
    },
    SUB_QTY_TO_SHOPPINGCART_ITEM(state, productIndex) {
      state.productos[productIndex].qty--
    },
    SET_USER(state, newUser) {
      state.user = newUser
    },
    //Para editar tortas
    UNSET_TORTA(state) {
      state.torta = null
    },
    SET_TORTA(state, newTorta) {
      state.torta = newTorta
    },
    //Para editar postres
    UNSET_POSTRE(state) {
      state.postre = null
    },
    SET_POSTRE(state, newTorta) {
      state.postre = newTorta
    },
    //Para editar galletas
    UNSET_GALLETA(state) {
      state.galleta = null
    },
    SET_GALLETA(state, newTorta) {
      state.galleta = newTorta
    },
    UNSET_PRODUCTO(state) {
      state.producto = null
    },
    SET_PRODUCTO(state, newTorta) {
      state.producto = newTorta
    },
    SET_ROLES(state, newRoles) {
      state.roles = newRoles
    }
  },
  actions: {
    agregarAlCarrito({ state, commit }, { index }) {
      commit('ADD_PRODUCTO_AL_CARRITO', { ...index, qty: 1 })
      Swal.fire({
        title: `${ index.nombre}`,
        text: '¡Producto agregado con exito!',
        imageUrl: `${ index.imagen}`,
        imageWidth: 150,
        imageHeight: 100,
        imageAlt: 'Custom image',
      })
    },
    agregarDetalle({ state, commit }, { i }) {
      commit('ADD_PRODUCTO_AL_DETALLE', i)
      console.log('productoPasadooo', [{ i }])
      alert(`${i.nombre} - Producto agregado con exito!`)
      console.log('detalle', [state.detalles])
    },
    getTortas(context) {
      Firebase.firestore()
        .collection('tortas')
        .get()
        .then(querySnapshot => {
          let data = []
          querySnapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_TORTAS', data)
        })
    },
    getPostres(context) {
      Firebase.firestore()
        .collection('postres')
        .get()
        .then(querySnapshot => {
          let data = []
          querySnapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_POSTRES', data)
        })
    },
    getGalletas(context) {
      Firebase.firestore()
        .collection('galletas')
        .get()
        .then(querySnapshot => {
          let data = []
          querySnapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_GALLETAS', data)
        })
    },
    getSugerencias(context) {
      Firebase.firestore()
        .collection('sugerencias')
        .get()
        .then(querySnapshot => {
          let data = []
          querySnapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_SUGERENCIAS', data)
        })
    },
    getDestacados(context) {
      Firebase.firestore()
        .collection('destacados')
        .get()
        .then(querySnapshot => {
          let data = []
          querySnapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
          context.commit('GET_DESTACADOS', data)
        })
    },
    getUser(context, accept) {
      console.log(accept)
      context.commit('SET_USER', accept)
      
    },
    agregarCantidadAlProductoDelCarritoDeCompras(context, indexProduct) {
      console.log(indexProduct)
      context.commit('ADD_QTY_TO_SHOPPINGCART_ITEM', indexProduct)
    },
    restarCantidadAlProductoDelCarritoDeCompras(context, indexProduct) {
      context.commit('SUB_QTY_TO_SHOPPINGCART_ITEM', indexProduct)
    },

    //Para editar tortas
    getTorta(context, id) {
      context.commit('UNSET_PRODUCTO')
      return new Promise((resolve, reject) => {
        Firebase.firestore()
          .collection('tortas')
          .doc(id)
          .get()
          .then((doc) => {
            context.commit('SET_PRODUCTO', { id: doc.id, ...doc.data() })
            resolve()
          }, reject)
      })
    },
    borrarTorta(context,torta) {
      Firebase.firestore()
        .collection('tortas')
        .doc(torta.id)
        .delete()
        .then(() => {
          context.dispatch('getTortas')
        })
    },
    crearTorta(context, nuevaTorta) {
      return new Promise((resolve, reject) => {
        Firebase.firestore().collection('tortas').add(nuevaTorta).then(resolve, reject)
      })
    },
    actualizarTorta(context, torta) {
      return new Promise((resolve, reject) => {
        Firebase.firestore()
          .collection('tortas')
          .doc(torta.id)
          .update(torta)
          .then(() => {
            context.dispatch('getTortas')
            resolve()
          }, reject)
      })
    },

    //Para editar galletas
    getGalleta(context, id) {
      context.commit('UNSET_PRODUCTO')
      return new Promise((resolve, reject) => {
        Firebase.firestore()
          .collection('galletas')
          .doc(id)
          .get()
          .then((doc) => {
            context.commit('SET_PRODUCTO', { id: doc.id, ...doc.data() })
            resolve()
          }, reject)
      })
    },
    borrarGalleta(context,torta) {
      Firebase.firestore()
        .collection('galletas')
        .doc(torta.id)
        .delete()
        .then(() => {
          context.dispatch('getGalletas')
        })
    },
    crearGalleta(context, nuevaTorta) {
      return new Promise((resolve, reject) => {
        Firebase.firestore().collection('galletas').add(nuevaTorta).then(resolve, reject)
      })
    },
    actualizarGalleta(context, galleta) {
      return new Promise((resolve, reject) => {
        Firebase.firestore()
          .collection('galletas')
          .doc(galleta.id)
          .update(galleta)
          .then(() => {
            context.dispatch('getGalletas')
            resolve()
          }, reject)
      })
    },

    //Para editar postres
    getPostre(context, id) {
      context.commit('UNSET_PRODUCTO')
      return new Promise((resolve, reject) => {
        Firebase.firestore()
          .collection('postres')
          .doc(id)
          .get()
          .then((doc) => {
            context.commit('SET_PRODUCTO', { id: doc.id, ...doc.data() })
            resolve()
          }, reject)
      })
    },
    borrarPostre(context,torta) {
      Firebase.firestore()
        .collection('postres')
        .doc(torta.id)
        .delete()
        .then(() => {
          context.dispatch('getPostres')
        })
    },
    crearPostre(context, nuevaTorta) {
      return new Promise((resolve, reject) => {
        Firebase.firestore().collection('postres').add(nuevaTorta).then(resolve, reject)
      })
    },
    actualizarPostre(context, postre) {
      return new Promise((resolve, reject) => {
        Firebase.firestore()
          .collection('postres')
          .doc(postre.id)
          .update(postre)
          .then(() => {
            context.dispatch('getPostres')
            resolve()
          }, reject)
      })
    },
    getRoles(context) {
      Firebase.firestore()
      .collection('roles')
      .get() 
      .then(documents => {
        let data = []
        documents.forEach(doc => data.push({ id: doc.id, ...doc.data() }))
        context.commit('SET_ROLES', data)
      })
    }
  },
  modules: {}
})
