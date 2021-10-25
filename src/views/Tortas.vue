<template>
  <div class="text-center">
    <h2 class="mb-1">Tortas</h2>
    <img class="ramita-tortas" src="@/assets/ramita-tortas.png" alt="">

    <v-container class="mt-5 mb-10">
      <v-row>
        <v-col cols="12" md="6" lg="4" class="text-center"
          v-for="(torta, i) in $store.state.tortas"
          :key="i"
          data-cy="producto"
        >
          <img :src="torta.imagen" alt="" class="img-fluid img-producto" @click="irAlDetalle(i, torta)">
          <h3 class="mt-4 mb-0">{{torta.nombre}}</h3>
          <p class="mb-2">{{torta.personas}}</p>
          <h4 class="mb-5"><span class="pr-2">{{torta.descuento}} </span>$ {{torta.precio.toLocaleString()}}</h4>
        </v-col> 
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Sugerencias from '../components/Sugerencias'
import Store from '@/store'

export default {
  name: 'Tortas',
  components: { Sugerencias },
  data: () => ({
    
  }),

  async beforeRouteEnter(to, from, next) {
    await Store.dispatch('getTortas')
    await Store.dispatch('getSugerencias' )
    next()
  },
  
  computed: {
    
  }, 
  methods: {
    irAlDetalle( i, torta){
      this.$router.push(`/detalle/tortas/${torta.id}`)
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
span {
  font-family: "Montserrat", sans-serif;
  color: #262626;
  font-size: 0.8rem;
  opacity: 0.6;
  font-weight: 500;
  text-decoration: line-through;
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