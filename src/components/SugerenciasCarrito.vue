<template>
  <v-col cols="12" md="6">
    <div class="borde-columna py-6 px-8">
      <h3 class="mb-6">Sugerencias</h3>
      <div class="d-flex justify-space-between"
        v-for="(sugerencia, i) in $store.state.sugerencias"
        :key="i"
      >
        <div class="div-imagen pr-6">
          <img :src="sugerencia.imagen" alt="" class="img-producto img-fluid mb-4"/>
        </div>
        <div class="pt-4 pt-md-2 pt-lg-4 pr-16 pr-md-0 pr-lg-16">
          <h4>{{sugerencia.nombre}}</h4>
          <p><b>$ {{sugerencia.precio.toLocaleString('de-DE', {minimumFractionDigits: 0})}}</b></p>
        </div>
        <div class="pt-5">
          <v-btn
            class="px-4"
            rounded
            small
            outlined
            dark
            color="#D9AF3A"
            @click="agregarAlCarrito(i, sugerencia)"
          >
            Agregar
          </v-btn>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>

export default {
  methods: {
    agregarAlCarrito( item, index){
      this.$store.dispatch('agregarAlCarrito', {item, index})
    },
  }
}
</script>

<style scoped>
.borde-columna {
  border: 1px solid #4f3701;
}
h3 {
  color: #262626;
  font-size: 1.2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
h4 {
  color: #262626;
  font-size: 0.9em;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
p {
  color: #262626;
  font-size: 0.8em;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
.img-producto {
  width: 7.3rem;
}
</style>