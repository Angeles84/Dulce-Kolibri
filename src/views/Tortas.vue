<template>
  <div class="text-center">
    <h2 class="mb-1">Tortas</h2>
    <img class="ramita-tortas" src="@/assets/ramita-tortas.png" alt="">

    <v-container class="mb-14">
      <v-row>
        <v-col cols="12" md="6" lg="4">

        </v-col>
        <v-col cols="12" md="6" lg="4">

        </v-col>
        <v-col cols="12" md="6" lg="4">

        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: 'Tortas',
  components: { Footer },

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