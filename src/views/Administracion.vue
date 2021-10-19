<template>
  <div class="mt-16 text-center">
    <h2 class="mt-16">Administración</h2>
    <img class="ramita-tortas mb-3" src="@/assets/ramita-tortas.png" alt="">

    <!--Tabla tortas-->
    <TablaTortas />
    <!--Tabla Postres-->
    <TablaPostres />
    <!--Tabla Galletas-->

    <!--Tabla Destacados-->

    <!--Tabla Sugerencias-->

  </div>
</template>

<script>
import TablaTortas from '@/components/TablaTortas'
import TablaPostres from '@/components/TablaPostres'

export default {
    name: 'Administracion',
    components: {
      TablaTortas,
      TablaPostres
    }
}
</script>

<style scoped>
h2 {
  margin-top: 4em;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
.ramita-tortas {
  width: 10em;
}

</style>