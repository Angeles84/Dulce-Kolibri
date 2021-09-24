<template>
  <div class="mt-16">
    <Carrusel />
    <NuestrosProductos />
     <Destacados />

  </div>
</template>

<script>
  import Carrusel from '../components/Carrusel'
  import NuestrosProductos from '../components/NuestrosProductos'
  import Destacados from '../components/Destacados'

  export default {
    name: 'Home',

    components: {
      Carrusel,
      NuestrosProductos,
      Destacados,
    },
  }
</script>
