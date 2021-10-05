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

      <v-row
        class="text-left"
        v-for="(producto, id) in $store.state.productos"
        :key="id"
      >
        <v-col cols="12" md="4" class="pl-10 d-flex">
          <div class="div-imagen pr-6">
            <img :src="producto.imagen" alt="" class="img-producto img-fluid" />
          </div>
          <div class="pt-md-2 pt-lg-4">
            <h4 v-text="producto.nombre"></h4>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <h4
            class="pt-7 font-weight-bold"
            v-text="`$ ${producto.precio}`"
          ></h4>
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
            <h4
              class="pt-7 font-weight-bold"
              v-text="`$ ${producto.precio}`"
            ></h4>
            <v-btn small plain class="mt-5">
              <v-icon color="#c59206">mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <hr />
    </v-container>

    <!--Container pantalla chica-->
    <v-container
      class="contenedor-chico px-4"
      v-for="(producto, id) in $store.state.productos"
      :key="id"
    >
      <div class="d-flex justify-space-between">
        <h3>Producto</h3>
        <h3>Precio</h3>
      </div>
      <hr />
      <div class="d-flex justify-space-between">
        <div>
          <img :src="producto.imagen" alt="" class="img-producto img-fluid" />
        </div>
        <div class="text-left pt-4 pr-6">
          <h4 v-text="producto.nombre"></h4>
          <p>Para 30 personas</p>
        </div>
        <div>
          <h4
            class="pb-2 font-weight-bold"
            v-text="`$ ${producto.precio}`"
          ></h4>
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
      <hr />
    </v-container>

    <!--Container Total y sugerencias-->
    <v-container class="pt-1 pb-16 px-4 px-md-2">
      <v-row class="text-left mt-5">
        <v-col cols="12" md="6">
          <div class="borde-columna p-4">
            <h3 class="mb-6">Total del carrito</h3>
            <div class="d-flex justify-space-between">
              <h4>Subtotal</h4>
              <h4 v-text="`$ ${$store.getters['valorTotalVenta']}`"></h4>
            </div>
            <hr />
            <div class="d-flex justify-space-between mt-6 mb-4">
              <h4><b>Total</b></h4>
              <h4
                class="font-weight-bold"
                v-text="`$ ${$store.getters['valorTotalVenta']}`"
              ></h4>
            </div>
            <v-btn
              color="#D9AF3A"
              class="mt-5 mb-3"
              block
              rounded
              dark
              @click="cobrar()"
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
                <img
                  src="@/assets/galletas.jpg"
                  alt=""
                  class="img-producto img-fluid"
                />
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
                  @click="cobrar()"
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
import Footer from "../components/Footer";
import CryptoJS from 'crypto-js'
import axios from 'axios'
import querystring from 'query-string'

export default {
  name: "Carrito",
  components: { Footer },
  data: () => ({
    signature: "",
    items: {
      1: {
        id: 1,
        color: "#1F7087",
        src:
          "https://media.istockphoto.com/photos/creamy-mascarpone-cheese-cake-with-strawberry-and-winter-berries-picture-id615247930?k=20&m=615247930&s=612x612&w=0&h=1Iz5305LghpTEDnTDgDg5l7pRwhOCTknMmwRrNJAwbw=",
        title: "Cheesecake",
        artist:
          "Cheescake de frambuesa con sabor cremoso y el toque de berries.",
        precio: 9990,
      },
      2: {
        id: 2,
        color: "#1F7087",
        src:
          "https://media.istockphoto.com/photos/chocolate-cake-with-bonbon-picture-id970877400?k=20&m=970877400&s=612x612&w=0&h=VyqDh9l-CohWJYZwf4TUoeMpHu6IyElNn9ZhFGL13kM=",
        title: "Trufa",
        artist:
          "Torta de trufa con chocolate y manjar. ¡Descubre lo mejor de la trufa!",
        precio: 21990,
      },
      3: {
        id: 3,
        color: "#1F7087",
        src:
          "https://media.istockphoto.com/photos/white-wooden-table-with-a-bundt-cake-kugelhupf-or-sockerkaka-and-a-picture-id1204993548?k=20&m=1204993548&s=612x612&w=0&h=EuuqGtbJLqqi-TDevLNk1eJ7R3C1ZspbPc-9WkybVwA=",
        title: "Queque",
        artist:
          "Esponjoso y delicioso queque de plátano, ideal para la hora del té.",
        precio: 5990,
      },
    },
  }),
  methods: {
    montoApago() {
      let valorTotal = 0;
      this.$store.state.productos.forEach((producto) => {
        valorTotal += this.items[producto.id].precio;
      });
      return valorTotal;
    },
    crearSignature(form) {
      const secretKey = '1b48ec1ca7efa74509196577aa3c4ecb0f7fdf11'
      let signature = '';
      Object.keys(form).forEach((key) => {
        signature += `${key}${form[key]}`
      })
      console.log(signature);
      let hash = CryptoJS.HmacSHA256(signature, secretKey);
      console.log('hash',hash.toString());
      return hash.toString()
    },
    crearOrden(form){
      axios.post('https://sockets-ceto1.herokuapp.com/payments', form)
      .then(resp => {
        console.log('respuestaaa',resp.data.url);
        setTimeout( () =>  {window.open(resp.data.url)}, 1000 );
        //redireccionar a form.data.url
      })
      .catch((error) => {
        console.log(error);
      })

    },
    cobrar() {
      const order = Math.round(Math.random()*100)
      const urlConfirmation = 'http://flowosccomerce.tuxpan.com/csepulveda/api2/pay/confirmPay.php' 
      const urlReturn = 'http://flowosccomerce.tuxpan.com/csepulveda/api2/pay/resultPay.php'
      const form = {
        amount: this.montoApago(),
        apiKey: "53305F1C-A536-4332-9718-7C31DCEL94C8",
        commerceOrder: order,
        email: "vriquelmefe@gmail.com",
        subject: `Compra orden numero: ${order}`,
        urlConfirmation: urlConfirmation,
        urlReturn: urlReturn,
      };
      form.s = this.crearSignature(form)
      this.crearOrden(form)
    },

  },
};
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
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
p {
  color: #262626;
  font-size: 0.8em;
  font-family: "Montserrat", sans-serif;
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
