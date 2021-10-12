<template>
  <v-container class="text-center mb-16">
    <h2 class="mt-4">Sugerencias</h2>
    <img class="ramita-tortas" src="@/assets/ramita-tortas.png" alt="">

    <v-row class="mt-5">
      <v-col cols="12" md="6" lg="4" class="text-center"
        v-for="(sugerencia, i) in $store.state.sugerencias"
        :key="i"
      >
        <img :src="sugerencia.imagen" alt="" class="img-fluid img-producto" @click="irAlDetalle(i, sugerencia)">
        <h3 class="mt-4 mb-0">{{sugerencia.nombre}}</h3>
        <p class="mb-2">{{sugerencia.personas}}</p>
        <h4 class="mb-5">$ {{sugerencia.precio.toLocaleString('de-DE', {minimumFractionDigits: 0})}}</h4>
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Sugerencias',
  components: {  },
  data: () => ({ 
  }),
  
  computed: { 
  },

  methods: {
    irAlDetalle( i, sugerencia){
      this.$router.push(`/detalle/sugerencias/${sugerencia.id}`)
    }
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
.img-producto {
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
  width: 85%;
}
.img-producto:hover {
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.80);
  opacity: 0.75;
  cursor: pointer;
}
h3 {
  font-family: 'Yesteryear', cursive;
  color: #4f3701;
  font-size: 1.9rem;
}
p {
  font-family: "Montserrat", sans-serif;
  color: #262626;
  font-size: 0.9rem;
}
h4 {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #262626;
}
@media (min-width: 960px) {
  .img-producto {
    height: 250px;
  }
}
@media (min-width: 1200px) {
  .img-producto {
    height: 230px;
  }
}
</style>