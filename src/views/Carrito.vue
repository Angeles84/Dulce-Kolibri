<template>
  <div class="text-center">
    <h2>Carrito de compras</h2>
    <img class="ramita-tortas" src="@/assets/ramita-tortas.png" alt="">

    <!--Container pantalla grande-->
    <v-container class="pt-12 pb-0 contenedor-grande">
      <v-row class="text-left">
        <v-col cols="12" md="4" class="pl-10">
          <h3>Producto</h3>
        </v-col>
        <v-col cols="12" md="2">
          <h3>Precio</h3>
        </v-col>
        <v-col cols="12" md="2" class="pl-8">
          <h3>Cantidad</h3>
        </v-col>
        <v-col cols="12" md="4" class="pl-14">
          <h3>Subtotal</h3>
        </v-col>
      </v-row>

      <hr>
      
      <v-row class="text-left">
        <v-col cols="12" md="4" class="pl-10 d-flex">
          <div class="div-imagen pr-6">
            <img src="@/assets/galletas.jpg" alt="" class="img-producto img-fluid">
          </div>
          <div class="pt-md-2 pt-lg-4">
            <h4>Galletas de avena</h4>
            <p>Para 30 personas</p>
          </div>
        </v-col>
        <v-col cols="12" md="2" >
          <h4 class="pt-7"><b>$ 5.990</b></h4>
        </v-col>
        <v-col cols="12" md="2" class="pl-8">
          <div class="pt-5">
            <button class="btn-menos mr-1">-</button>
            <span class="px-1"><b> 1 </b></span>
            <button class="btn-mas">+</button>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="pl-14">
          <div class="d-flex justify-space-between pr-5">
            <h4 class="pt-7"><b>$ 5.999</b></h4>
            <v-btn small plain class="mt-5">
              <v-icon color="#c59206">mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <hr>
    </v-container>

    <!--Container pantalla chica-->
    <v-container class="contenedor-chico px-4">
      <div class="d-flex justify-space-between">
        <h3>Producto</h3>
        <h3>Precio</h3>
      </div>
      <hr>
      <div class="d-flex justify-space-between">
        <div>
          <img src="@/assets/galletas.jpg" alt="" class="img-producto img-fluid">
        </div>
        <div class="text-left pt-4 pr-6">
          <h4>Galletas de avena</h4>
          <p>Para 30 personas</p>
        </div>
        <div>
          <h4 class="pb-2"><b>$ 5.999</b></h4>
          <button class="btn-menos mr-1">-</button>
          <span class="px-1"><b> 1 </b></span>
          <button class="btn-mas">+</button>
          <div class="pt-3">
            <v-btn small plain class="">
              <v-icon color="#c59206">mdi-delete</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <hr>
    </v-container>

    <!--Container Total y sugerencias-->
    <v-container class="pt-1 pb-16 px-4 px-md-2">
       <v-row class="text-left mt-5">
        <v-col cols="12" md="6">
          <div class="borde-columna p-4">
            <h3 class="mb-6">Total del carrito</h3>
            <div class="d-flex justify-space-between">
              <h4>Subtotal</h4>
              <h4><b>$ 5.999</b></h4>
            </div>
            <hr>
            <div class="d-flex justify-space-between mt-6 mb-4">
              <h4><b>Total</b></h4>
              <h4><b>$ 5.999</b></h4>
            </div>
            <v-btn
              color="#D9AF3A"
              class="mt-5 mb-3"
              block
              rounded
              dark
            >
              COMPRAR
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="borde-columna py-6 px-8">
            <h3 class="mb-6">Sugerencias</h3>
            <div class="d-flex justify-space-between">
              <div class="div-imagen pr-6">
                <img src="@/assets/galletas.jpg" alt="" class="img-producto img-fluid">
              </div>
              <div class="pt-4 pt-md-2 pt-lg-4 pr-16 pr-md-0 pr-lg-16">
                <h4>Galletas de avena</h4>
                <p>Para 30 personas</p>
              </div>
              <div class="pt-5">
                <v-btn
                  class="px-4"
                  rounded
                  small
                  outlined
                  dark
                  color="#D9AF3A"
                >
                  Agregar
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: "Carrito",
  components: { Footer },

  data: () => ({
    
  }),
}
</script>

<style scoped>
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
  padding-top: 8rem;
}
.ramita-tortas {
  width: 10em;
}
h3 {
  color: #262626;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
hr {
  background-color: #4f3701;
  height: 0.005em;
}
.img-producto {
  width: 7.3rem;
}
h4 {
  color: #262626;
  font-size: .9em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
p {
  color: #262626;
  font-size: .8em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.btn-menos, .btn-mas {
  color: #262626;
  font-weight: 400;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  border: 1px solid #dddddd;
}
.btn-menos:hover, .btn-mas:hover {
  background-color: #ebe9e9;
}
.btn-menos {
  border-radius: 13px;
  font-size: 1.05em;
  padding-left: 0.65em;
  padding-right: 0.65em;
}
.btn-mas {
  border-radius: 12px;
  font-size: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.borde-columna {
  border: 1px solid #4f3701;
}
.contenedor-grande {
  display: none;
} 
@media (min-width: 960px) {
  .contenedor-grande {
    display: block;
  } 
  .contenedor-chico {
    display: none;
  }
}
</style>