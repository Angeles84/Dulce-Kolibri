<template>
  <div class="text-center">
    <h2 class="mb-1">Productos seleccionados</h2>
    <img class="ramita-tortas" src="@/assets/ramita-tortas.png" alt="" />

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

      <hr />

      <v-row class="text-left" v-for="(producto, id) in $store.state.productos" :key="id">
        <v-col cols="12" md="4" class="pl-10 d-flex">
          <div class="div-imagen pr-6">
            <img :src="producto.imagen" alt="" class="img-producto img-fluid" />
          </div>
          <div class="pt-md-2 pt-lg-4">
            <h4 v-text="producto.nombre"></h4>
            <p class="mb-0" v-text="producto.personas"></p>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <h4 class="pt-7 font-weight-bold">
            $
            {{
              producto.precio.toLocaleString('de-DE', {
                minimumFractionDigits: 0
              })
            }}
          </h4>
        </v-col>
        <v-col cols="12" md="2" class="pl-8">
          <div class="pt-5">
            <button
              class="btn-menos mr-1"
              @click="$store.dispatch('restarCantidadAlProductoDelCarritoDeCompras', id)"
              :disabled="producto.qty === 1"
            >
              -
            </button>
            <span class="px-1"
              ><b>{{ producto.qty }}</b></span
            >
            <button
              class="testing btn-mas"
              @click="$store.dispatch('agregarCantidadAlProductoDelCarritoDeCompras', id)"
            >
              +
            </button>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="pl-14">
          <div class="d-flex justify-space-between pr-5">
            <h4
              class="pt-7 font-weight-bold"
              v-text="
                `$ ${(producto.precio * producto.qty).toLocaleString('de-DE', {
                  minimumFractionDigits: 0
                })}`
              "
            ></h4>
            <v-btn small plain class="mt-5 testing" @click="eliminarProducto(id)">
              <v-icon color="#c59206">mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <hr />
    </v-container>

    <!--Container pantalla chica-->
    <v-container class="contenedor-chico px-4">
      <div class="d-flex justify-space-between">
        <h3>Producto</h3>
        <h3>Precio</h3>
      </div>
      <hr />
      <v-row class="" v-for="(producto, id) in $store.state.productos" :key="id">
        <v-col cols="12">
          <div class="d-flex justify-space-between">
            <div>
              <img :src="producto.imagen" alt="" class="img-producto img-fluid" />
            </div>
            <div class="text-left pt-4 pr-6">
              <h4 v-text="producto.nombre"></h4>
              <p v-text="producto.personas"></p>
            </div>
            <div>
              <h4 class="pt-4 mb-3 font-weight-bold">
                $
                {{
                  (producto.precio * producto.qty).toLocaleString('de-DE', {
                    minimumFractionDigits: 0
                  })
                }}
              </h4>
              <button
                class="btn-menos mr-1"
                @click="$store.dispatch('restarCantidadAlProductoDelCarritoDeCompras', id)"
                :disabled="producto.qty === 1"
              >
                -
              </button>
              <span class="px-1"
                ><b>{{ producto.qty }}</b></span
              >
              <button
                class="btn-mas"
                @click="$store.dispatch('agregarCantidadAlProductoDelCarritoDeCompras', id)"
              >
                +
              </button>
              <div class="pt-3">
                <v-btn small plain class="" @click="eliminarProducto(id)">
                  <v-icon color="#c59206">mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <hr  class="mb-1">
        </v-col>
      </v-row>
    </v-container>

    <!--Container Total-->
    <v-container class="pt-1 pb-16 px-4 px-md-2">
      <v-row class="text-left mt-5">
        <v-col cols="12" md="6">
          <div class="borde-columna p-4">
            <h3 class="mb-6">Total del carrito</h3>
            <div class="d-flex justify-space-between">
              <h4>Subtotal</h4>
              <h4
                v-text="
                  `$ ${$store.getters['sumaTotalProductos'].toLocaleString('de-DE', {
                    minimumFractionDigits: 0
                  })}`
                "
              ></h4>
            </div>
            <hr />
            <div class="d-flex justify-space-between mt-6 mb-4">
              <h4><b>Total</b></h4>
              <h4
                class="font-weight-bold"
                v-text="
                  `$ ${$store.getters['sumaTotalProductos'].toLocaleString('de-DE', {
                    minimumFractionDigits: 0
                  })}`
                "
              ></h4>
            </div>
            <v-btn color="#D9AF3A" class="mt-5 mb-3" block rounded dark @click="cobrar()">
              COMPRAR
            </v-btn>
          </div>
        </v-col>
        <!--Col sugerencias-->
        <SugCarrito />
        <!--Col sugerencias-->
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SugCarrito from '../components/SugerenciasCarrito'
import CryptoJS from 'crypto-js'
import axios from 'axios'
import Store from '@/store'
import querystring from 'query-string'
import Swal from 'sweetalert2'


export default {
  name: 'Carrito',
  components: { SugCarrito },
  data: () => ({
    signature: ''
  }),

  async beforeRouteEnter(to, from, next) {
    await Store.dispatch('getSugerencias')
    next()
  },

  methods: {
    eliminarProducto(index) {
      this.$store.state.productos.splice(index, 1)
    },
    montoApago() {
      return this.$store.getters['sumaTotalProductos']
    },
    crearSignature(form) {
      const secretKey = process.env.VUE_APP_FLOW_SECRET_KEY
      let signature = ''
      Object.keys(form).forEach(key => {
        signature += `${key}${form[key]}`
      })
      console.log(signature)
      let hash = CryptoJS.HmacSHA256(signature, secretKey)
      console.log('hash', hash.toString())
      return hash.toString()
    },
    crearOrden(form) {
      axios
        .post('https://sockets-ceto1.herokuapp.com/payments', form)
        .then(resp => {
          console.log('respuestaaa', resp.data.url)
          setTimeout(() => {
            window.open(resp.data.url)
          }, 1000)
          this.$store.dispatch('vaciarCarrito');
          this.$router.push('/')
          //redireccionar a form.data.url
        })
        .catch(error => {
          console.log(error)
        })
    },
     cobrar() {
      const order = Math.round(Math.random() * 100)
      const form = {
        amount: this.montoApago(),
        apiKey: process.env.VUE_APP_FLOW_API_KEY,
        commerceOrder: order,
        email: 'vriquelmefe@gmail.com',
        subject: `Compra orden numero: ${order}`,
        urlConfirmation: process.env.VUE_APP_FLOW_URL_CONFIRMATION,
        urlReturn: process.env.VUE_APP_FLOW_URL_RETURN
      }
      form.s = this.crearSignature(form)
      this.crearOrden(form)
      Swal.fire({
          icon: 'success',
          title: '¡Abriendo pago en una nueva pestaña!',
        }) 

    }
  }
}
</script>

<style scoped>
h2 {
  font-family: 'Montserrat', sans-serif;
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
  font-size: 0.9em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
p {
  color: #262626;
  font-size: 0.8em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.btn-menos,
.btn-mas {
  color: #262626;
  font-weight: 400;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  border: 1px solid #dddddd;
}
.btn-menos:hover,
.btn-mas:hover {
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
