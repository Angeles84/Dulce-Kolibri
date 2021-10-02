<template>
  <div>
    <v-container class="pt-16 px-4">
      <v-row class="pt-16">
        <v-col cols="12" 
          v-for="(item, i) in items"
          :key="i">
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
              <v-img :src="item.src"></v-img>
            </v-avatar>

            <div class="pl-5">       
            <v-card-title
              class="titulo-card pt-7 pb-5"
              v-text="item.title"
            ></v-card-title>

            <v-card-subtitle class="texto-card pb-3 pb-lg-6" v-text="item.artist"></v-card-subtitle>
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
            <v-img :src="item.src"></v-img>

          <div class="px-3">       
            <v-card-title
              class="titulo-card pt-7 pb-5"
              v-text="item.title"
            ></v-card-title>

            <v-card-subtitle class="texto-card pb-3" v-text="item.artist"></v-card-subtitle>
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

export default {
  name: 'DetalleProducto',
  components: { Footer, Sugerencias },
  
  data: () => ({
     items: [
        {
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/chocolate-cake-with-bonbon-picture-id970877400?k=20&m=970877400&s=612x612&w=0&h=VyqDh9l-CohWJYZwf4TUoeMpHu6IyElNn9ZhFGL13kM=',
          title: 'Torta de trufa',
          artist: 'Exquisita torta de trufa, chocolate y manjar, hecha con biscocho y mousse de chocolate. Además, contiene azúcar, harina, huevos, crema y leche. No contiene frutos secos. Si te encanta el chocolate esta torta es para ti, para esos días inolvidables de amor y calidez.',
          precio: '$ 21.990'
        },
      ],
  })
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