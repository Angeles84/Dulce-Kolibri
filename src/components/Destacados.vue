<template>
  <v-container fluid class="background-color mt-15 pb-10 pb-md-14 px-2 px-md-9">
    <h2 class="text-center mt-14 mb-8">Destacados del mes</h2>

    <div class="div-cards-large">
    <v-row>
      <v-col cols="12" sm="6" lg="4"
        v-for="(item, index) in $store.state.destacados"
        :key="index"
      >
        <v-card
          class="mx-auto my-5"
          max-width="344"
         >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
              size="155"
              height="245px"
              tile
            >
              <v-img :src="item.imagen"></v-img>
            </v-avatar>

            <div>       
            <v-card-title
              class="titulo-card"
              v-text="item.nombre"
            ></v-card-title>

            <v-card-subtitle class="texto-card pb-3" v-text="item.descripcion"></v-card-subtitle>

            <v-card-text class="precio-card pb-2">$ {{item.precio.toLocaleString('de-DE', {minimumFractionDigits: 0})}}</v-card-text>

            <v-card-actions>

            <v-btn
              class="ml-2 px-4"
              rounded
              small
              dark
              @click="agregarAlCarrito(index, item)"
              color="#D9AF3A"
            >
              Agregar
            </v-btn>
          </v-card-actions>
        </div>
        </div>
        </v-card> 
      </v-col>
    </v-row>
   </div>
    <!-- cards en carrusel -->
    
    <div class="div-cards-small">
      <v-carousel hide-delimiters cycle class="mt-4 carrusel" height="300px">
    <v-carousel-item
      cols="12" sm="6" lg="4"
        v-for="(item, index) in $store.state.destacados"
          :key="index"
    >
      <v-card
        class="mx-auto my-5"
        max-width="344"
       >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          size="155"
          height="250px"
          tile
        >
          <v-img :src="item.imagen"></v-img>
        </v-avatar>

        <div>         
          <v-card-title
            class="titulo-card"
            v-text="item.nombre"
          ></v-card-title>

          <v-card-subtitle class="texto-card pb-3" v-text="item.descripcion"></v-card-subtitle>

          <v-card-text class="precio-card pb-2" v-text="`$ ${item.precio}`">  </v-card-text>

          <v-card-actions>

            <v-btn
              class="ml-2 px-4"
              rounded
              small
              dark
              color="#D9AF3A"
              @click="agregarAlCarrito(index, item)"
            >
              Agregar
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card> 
     
    </v-carousel-item>

  </v-carousel>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    
  }),
  methods: {
    agregarAlCarrito( item, index){
      this.$store.dispatch('agregarAlCarrito', {item, index})
    }
  }
}
</script>

<style scoped>
.div-cards-large {
  display: none;
}
@media (min-width: 768px) {
  .div-cards-large {
    display: block;
  }
  .div-cards-small {
    display: none;
  }
}
.background-color {
  background-color: #ebe9e9;
}
.titulo-card{
  font-family: 'Yesteryear', cursive;
  font-size: 2.2rem;
  color: #262626;
  margin-bottom: 0.8rem;
}
.texto-card {
  font-family: "Montserrat", sans-serif;
  color: #262626;
}
.precio-card {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #262626;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
.v-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
</style>