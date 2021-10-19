<template>
  <div class="mt-16">
    <Carrusel />
    <Moment />
    <NuestrosProductos />
    <Destacados />
    <Testimonios />
    <Ubicacion />

  </div>
</template>

<script>
  import Carrusel from '../components/Carrusel'
  import Moment from '../components/Moment'
  import NuestrosProductos from '../components/NuestrosProductos'
  import Destacados from '../components/Destacados'
  import Testimonios from '../components/Testimonios'
  import Ubicacion from '../components/Ubicacion'
  import Store from '@/store'

  export default {
    name: 'Home',

    components: {
      Carrusel,
      Moment,
      NuestrosProductos,
      Destacados,
      Testimonios,
      Ubicacion,
    },

    async beforeRouteEnter(to, from, next) {
      await Store.dispatch('getDestacados')
      next()
    },
  }
</script>
