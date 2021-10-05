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
              height="380px"
              tile
            >
              <v-img :src="producto.imagen"></v-img>
            </v-avatar>

            <div class="pl-5">       
            <v-card-title
              class="titulo-card pt-7 pb-5"
              v-text="producto.nombre"
            ></v-card-title>

            <v-card-subtitle class="texto-card pb-3 pb-lg-6" v-text="producto.descripcion"></v-card-subtitle>
          <div class="d-flex pl-4">
            <v-checkbox 
             
              height="5px"
              color="#4f3701"
              value="Para 20 personas $21.000"
            ></v-checkbox>
            <span class="pt-3">Para 20 personas<span><b> $21.000</b></span></span>
          </div> 
          <div class="d-flex pl-4">
            <v-checkbox
              height="5px"
              color="#4f3701"
              value="Para 30 personas $26.000"
            ></v-checkbox>
            <span class="pt-3">Para 30 personas<span><b> $21.000</b></span></span>
          </div>

            <v-card-actions>

            <v-btn
              class="mt-4 ml-2 px-12"
              rounded
              small
              dark
              color="#D9AF3A"
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
          <div class="d-flex pl-4">
            <v-checkbox 
             
              height="5px"
              color="#4f3701"
              value="Para 20 personas $21.000"
            ></v-checkbox>
            <span class="pt-3">Para 20 personas<span><b> $21.000</b></span></span>
          </div> 
          <div class="d-flex pl-4">
            <v-checkbox
              height="5px"
              color="#4f3701"
              value="Para 30 personas $26.000"
            ></v-checkbox>
            <span class="pt-3">Para 30 personas<span><b> $21.000</b></span></span>
          </div>

            <v-card-actions>

            <v-btn
              class="mt-4 mb-4"
              rounded
              small
              dark
              block
              color="#D9AF3A"
            >
              Agregar
            </v-btn>
          </v-card-actions>
              </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Sugerencias />
    <Footer />
  </div>
</template>

<script>
import Sugerencias from '../components/Sugerencias'
import Footer from '../components/Footer'
import Store from '@/store'
import Firebase from 'firebase'

export default {
  name: 'DetalleProducto',
  components: { Footer, Sugerencias },
  
  data: () => ({
    producto: null
  }),
  async beforeRouteEnter(to, from, next) {
    Firebase.firestore().collection(to.params.category).doc(to.params.id).get().then(document => {
      next(vm => {
        vm.producto = {id:document.id, ...document.data()}
      })
    })
  },
  mounted() {
    console.log(this.$route.params)
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
span {
  font-family: "Montserrat", sans-serif;
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
.card-grande {
  display: none;
} 
@media (min-width: 780px) {
  .card-grande {
    display: block;
  } 
  .card-chica {
    display: none;
  }
}
</style>