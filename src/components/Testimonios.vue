<template>
  <div class="div-testimonios">
    <v-container fluid class="p-0 m-0">
      <v-row class="p-0 m-0">
        <v-col cols="12" md="8" lg="8" class="p-0 m-0">
          <img src="@/assets/testimonios.jpg" alt="" class="img-fluid">
        </v-col>

        <v-col cols="12" md="4" lg="4" class="">
          <h2 class="text-center mt-12 mb-10">Testimonios</h2>
         
          <v-carousel
            class=""
            cycle
            height="360"
            show-arrows-on-hover
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
            >
            <v-row>
              <v-card
                class="mx-auto my-5"
                max-width="344"
                height="330"
              >
                <div>
                  <v-card-subtitle class="titulo-card mt-6 pb-0 text-center" v-text="item.title"></v-card-subtitle>

                  <v-card-subtitle class="fecha-card pb-3 mb-3 pt-1 text-center" v-text="item.fecha"></v-card-subtitle>

                  <v-card-text class="texto-card pb-2 text-left" v-text="item.testimonio"> </v-card-text>
                </div>
              </v-card>
            </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
     items: [
        {
          title: 'Claudia',
          fecha: '03/09/2021',
          testimonio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim."'
        },
        {
          title: 'Andrés',
          fecha: '10/09/2021',
          testimonio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim."'
        },
        {
          title: 'Belén',
          fecha: '25/09/2021',
          testimonio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  sed do eiusmod tempor incididunt ut labo et dolore magna aliqua. Ut enim ad minim."'
        },
      ],
  })
}
</script>

<style scoped>
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
.titulo-card {
  font-family: "Montserrat", sans-serif;
  color: #262626;
  font-size: 1.5rem;
  font-weight: 600;
}
.fecha-card {
  font-family: "Montserrat", sans-serif;
  color: #D9AF3A;
  font-size: 0.8rem;
}
.texto-card {
  font-family: "Montserrat", sans-serif;
  color: #262626;
}
img {
  width: 100%;
}
.div-testimonios {
  display: none;
}
@media (min-width: 1250px) {
  .div-testimonios {
    display: block;
  }
}
</style>