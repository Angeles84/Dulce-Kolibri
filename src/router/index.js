import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Firebase from 'firebase'
import Swal from 'sweetalert2'
import Store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/tortas',
    name: 'Tortas',
    component: () => import('../views/Tortas.vue')
  },
  {
    path: '/galletas',
    name: 'Galletas',
    component: () => import('../views/Galletas.vue')
  },
  {
    path: '/postres',
    name: 'Postres',
    component: () => import('../views/Postres.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/Carrito.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue'),
    //meta: {
    //  admin: true,
    //  login: true
    //}
  },
  {
    path: '/editar/:categoria/:id',
    name: 'Editar',
    component: () => import('../views/Editar.vue')
  },
  {
    path: '/detalle/:category/:id',
    name: 'DetalleProducto',
    component: () => import('../views/DetalleProducto.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
    next('/inicio')
    Swal.fire({
      icon: 'error',
      title: 'Debes ingresar para poder ir al carrito',
      width: 600
    })
  } else if (user && !authRequired) {
    next(); 
  } else if(to.meta.admin && !Store.getters['esAdmin'] ){
    next('/inicio')
  }else {
    next();
  }
});

export default router
