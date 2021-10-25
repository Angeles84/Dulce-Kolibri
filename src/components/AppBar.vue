<template>
  <div>
    <v-app-bar
      app
      color="white"
      class="px-5"
      height="82px"
    >
    <router-link :to="{name: 'Inicio'}">
      <img src="@/assets/logo-menu.png" alt="">
    </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" class="shrink" data-cy="links">
        <v-btn exact color="#4F3701" plain :to="{name: 'Inicio'}"
        >
          Inicio
        </v-btn>

        <v-btn exact color="#4F3701" plain :to="{name: 'Nosotros'}"
        >
          Nosotros
        </v-btn>

       <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          exact color="#4F3701" plain :to="{name: 'Productos'}"
          v-bind="attrs"
          v-on="on"
        >
          Productos
          <v-icon
            right
            dark
          >
            mdi-chevron-down
      </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="{ name: item.title }"
          
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      
        <v-btn exact color="#4F3701" plain href="#footer" class="mr-8"
        >
          Contacto
        </v-btn>
      
        <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" :to="{name: 'Carrito'}" class="ml-16">
          <v-icon color="#4F3701" >mdi-cart-outline</v-icon>
          <span class="pb-4">{{$store.state.productos.length === 0 ? '' : $store.state.productos.length}}</span>
        </v-btn>
        </template>
        <span class="text-white">Carrito</span>
        </v-tooltip>
       
        <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon @click="openModal">
          <v-icon color="#4F3701">mdi-account-outline</v-icon>
        </v-btn>
        </template>
        <span class="text-white">Ingresa</span>
        </v-tooltip>

        <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
        <v-btn v-show="btnCerrar" v-bind="attrs" v-on="on" icon @click="logout">
          <v-icon color="#4F3701">mdi-logout</v-icon>
        </v-btn>
        </template>
        <span class="text-white">Cerrar sesión</span>
        </v-tooltip>
      </v-toolbar-items>

      <v-app-bar-nav-icon v-else @click="setDrawer(true)" />
    </v-app-bar>

    <v-dialog
        v-model="dialog"
        transition="dialog-top-transition"
        max-width="470"
      >  
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              class="dialog-title"
              color="#4f3701"
              dark
            >LOGIN</v-toolbar>
            <v-card-text class="pt-9 text-center">
              <span class="mb-0 google-texto">Ingresa de manera fácil y rápida con</span>
              <img src="@/assets/google.png" alt="" class="pl-1 pb-1 google-img"><span class="google-texto">oogle</span>
            </v-card-text>
            <div class="text-center px-11 my-3">
              <v-btn
               color="primary"
               block
               @click="loginGoogle"
              >
              Ingreso con Google
            </v-btn>
            </div>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Firebase from 'firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'

export default {
  name: 'AppBar',
  data: () => ({
    items: [
      { title: 'Tortas' },
      { title: 'Galletas' },
      { title: 'Postres' },
    ],
    dialog: false,
    btnCerrar: false,
  }),
  computed: {
 
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),

    openModal() {
      this.dialog = true
    },

    loginGoogle() {
        const provider = new Firebase.auth.GoogleAuthProvider()
        Firebase.auth().signInWithPopup(provider)
        .then(
          accept => {
            this.$store.dispatch('getUser', accept.user)
            this.btnCerrar = true;
            this.dialog = false;
            console.log('El correo es ' + this.$store.state.user.email)
            console.log(this.$store.state.user.displayName);
            this.$router.push('/login');
          },
          reject => {       
            console.log('Ingreso fallido', accept);
          });
    },

    logout() {
      Firebase.auth().signOut()
        .then(accept => {
          this.btnCerrar = false;
          Swal.fire({
            icon: 'success',
            title: 'Has cerrado tu sesión con éxito',
          })
          this.$router.push('/inicio');
        });
    }
  },
};
</script>

<style scoped>
img {
  width: 11rem;
}
.v-btn {
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.v-btn:hover {
  text-decoration: none;
}
.v-list-item {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.v-list-item:hover {
  text-decoration: none;
  color: #4F3701;
  opacity: 0.7;
}
span {
  font-family: 'Montserrat', sans-serif;
  color: #4f3701;
  font-size: .9rem;
}
.google-texto {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #212121;
}
.google-img {
  width: 2rem;
}
.dialog-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
</style>