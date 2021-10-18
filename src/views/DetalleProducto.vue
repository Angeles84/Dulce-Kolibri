<template>
  <div v-if="producto">
    <v-container class="pt-16 px-4">
      <v-row class="pt-16">
        <v-col cols="12" 
        >
           <!--Card pantalla grande-->
          <v-card
            class="mx-auto my-5 card-grande"
          >
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
              size="155"
              width="1645px"
              height="370px"
              tile
            >
              <v-img :src="producto.imagen"></v-img>
            </v-avatar>

            <div class="pl-5">       
            <v-card-title
              class="titulo-card pt-5 pt-md-10 pb-5"
              v-text="producto.nombre"
            ></v-card-title>

            <v-card-subtitle class="texto-card pb-3 pt-lg-2 pb-lg-6" v-text="producto.descripcion"></v-card-subtitle>
            
            <p class="pl-4 mb-4">{{producto.personas}}</p> 
            <span class="pl-4">$ {{producto.precio.toLocaleString("de-DE", {minimumFractionDigits: 0})}}</span>
             
            <v-card-actions>

            <v-btn
              class="mt-md-2 mt-lg-7 ml-2 px-12 testing"
              rounded
              small
              dark
              color="#D9AF3A"
              @click="agregarAlCarrito(index, producto)"
            >
              Agregar
            </v-btn>
          </v-card-actions>
              </div>
            </div>
          </v-card> 

          <!--Card pantalla chica-->
          <v-card
            class="mx-auto card-chica"
          >
            <v-img :src="producto.imagen"></v-img>

          <div class="px-3">       
            <v-card-title
              class="titulo-card pt-7 pb-5"
              v-text="producto.nombre"
            ></v-card-title>

            <v-card-subtitle class="texto-card pb-3" v-text="producto.descripcion"></v-card-subtitle>
            
            <p class="pl-4 mb-4">{{producto.personas}}</p> 
            <span class="pl-4">$ {{producto.precio.toLocaleString("de-DE", {minimumFractionDigits: 0})}}</span>

            <v-card-actions>

            <v-btn
              class="mt-4 mb-4"
              rounded
              small
              dark
              block
              color="#D9AF3A"
              @click="agregarAlCarrito(index, producto)"
            >
              Agregar
            </v-btn>
          </v-card-actions>
              </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container> 
    <Destacados />
    <Footer />
  </div>
</template>

<script>
import Destacados from '../components/Destacados'
import Footer from '../components/Footer'
import Store from '@/store'
import Firebase from 'firebase'

export default {
  name: 'DetalleProducto',
  components: { Footer, Destacados },
  
  data: () => ({
    producto: null,
    index: null,
  }),
  

  async beforeRouteEnter(to, from, next) {
    Firebase.firestore().collection(to.params.category).doc(to.params.id).get().then(document => {
      next(vm => {
        vm.producto = {id:document.id, ...document.data()}
      })
    })
    await Store.dispatch('getDestacados')
    next()
  },
  
  mounted() {
    console.log(this.$route.params)
  },

  methods: {
    agregarAlCarrito( item, index){
      this.$store.dispatch('agregarAlCarrito', {item, index})
    }
  }
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
.titulo-card{
  font-family: 'Yesteryear', cursive;
  font-size: 2.7rem;
  color: #4F3701;
  margin-bottom: 0.8rem;
}
.texto-card {
  font-family: "Montserrat", sans-serif;
  color: #262626;
}
p {
  font-family: "Montserrat", sans-serif;
  color: #262626;
  font-size: .95rem;
}
span {
  font-family: "Montserrat", sans-serif;
  color: #262626;
  font-weight: 600;
  font-size: 1.2em;
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
.card-grande {
  display: none;
} 
.descuento {
  font-size: 0.8rem;
  opacity: 0.6;
  font-weight: 500;
  text-decoration: line-through;
}
@media (min-width: 780px) {
  .card-grande {
    display: block;
    width: 90%;
  } 
  .card-chica {
    display: none;
  }
}
@media (min-width: 1950px) {
  .card-grande {
    width: 80%;
  } 
}
</style>