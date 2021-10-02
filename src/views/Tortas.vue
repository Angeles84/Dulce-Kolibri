<template>
  <div class="text-center">
    <h2 class="mb-1">Tortas</h2>
    <img class="ramita-tortas" src="@/assets/ramita-tortas.png" alt="">

    <v-container class="mb-14">
      <v-row>
        <v-col cols="12" md="6" lg="4" class="text-center"
          v-for="(torta, i) in $store.state.tortas"
          :key="i"
        >
          <img src="" alt="" class="img-fluid img-producto">
          <h3></h3>
          <p></p>
          <h4></h4>
        </v-col> 
      </v-row>
    </v-container>
    <Sugerencias />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Sugerencias from '../components/Sugerencias'

export default {
  name: 'Tortas',
  components: { Footer, Sugerencias },
  data: () => ({
    
  }),
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
  width: 90%;
}
.img-producto:hover {
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.80);
  opacity: 0.75;
  cursor: pointer;
}
h3 {
  font-family: 'Yesteryear', cursive;
  color: #4f3701;
  font-size: 1.8rem;
}
p {
  font-family: "Montserrat", sans-serif;
  color: #262626;
  font-size: 0.9rem;
}
h4 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #262626;
}
</style>