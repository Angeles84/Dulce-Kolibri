<template>
  <div class="mt-16">
    <Carrusel />
    <NuestrosProductos />
    <Destacados />
    <Testimonios />

  </div>
</template>

<script>
  import Carrusel from '../components/Carrusel'
  import NuestrosProductos from '../components/NuestrosProductos'
  import Destacados from '../components/Destacados'
  import Testimonios from '../components/Testimonios'

  export default {
    name: 'Home',

    components: {
      Carrusel,
      NuestrosProductos,
      Destacados,
      Testimonios ,
    },
  }
</script>
