<template>
  <div class="mt-16 text-center">
    <h2 class="mt-16 mb-1">Administración</h2>
    <img class="ramita-tortas mb-3" src="@/assets/ramita-tortas.png" alt="">

    <TablaProductos />

  </div>
</template>

<script>

import TablaProductos from '@/components/TablaProductos'

export default {
    name: 'Administracion',
    components: {
      TablaProductos
    }
}
</script>

<style scoped>
h2 {
  margin-top: 3.6em;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
.ramita-tortas {
  width: 10em;
}

</style>