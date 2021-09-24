<template>
  <div class="mt-16">
    <Carrusel />
    <NuestrosProductos />

  </div>
</template>

<script>
  import Carrusel from '../components/Carrusel'
  import NuestrosProductos from '../components/NuestrosProductos'

  export default {
    name: 'Home',

    components: {
      Carrusel,
      NuestrosProductos,
    },
  }
</script>
