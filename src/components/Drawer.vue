<template>
  <div>
    <v-navigation-drawer v-model="drawer" right fixed temporary>
    <v-list class="mt-3">
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="{
          name: link,
        }"
        min-width="118px"
        exact
        text
      >
        <v-list-item-content>
          <v-list-item-title v-text="link" />
        </v-list-item-content>   
      </v-list-item>
      
    </v-list>

    <template >
      <div class="pl-3">
        <v-btn icon :to="{name: 'Carrito'}">
          <v-icon color="#4F3701" >mdi-cart-outline</v-icon>
        </v-btn><span class="pb-4"> {{$store.state.productos.length}}</span><br>
      
        <v-btn icon class="mt-4" @click="openModal">
          <v-icon color="#4F3701">mdi-account-outline</v-icon>
        </v-btn><br>

        <v-btn icon class="mt-4" @click="logout">
          <v-icon color="#4F3701">mdi-logout</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <v-dialog
        v-model="dialog"
        transition="dialog-top-transition"
        max-width="450"
      >  
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              class="dialog-title"
              color="#4f3701"
              dark
            >LOGIN</v-toolbar>
            <v-card-text>
              <p class="pt-8 mb-0 text-center">Ingresa de manera fácil y rápida con Google</p>
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
// Utilities
import Firebase from 'firebase'

export default {
  name: "Drawer",
  data: () => ({
    links: [
      'Inicio',
      'Nosotros',
      'Tortas',
      'Galletas',
      'Postres',
    ],
    dialog: false,
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
  methods: {
     openModal() {
      this.dialog = true
    },
    loginGoogle() {
        const provider = new Firebase.auth.GoogleAuthProvider()
        Firebase.auth().signInWithPopup(provider)
        .then(
          accept => {
            this.$router.push('login');
            this.dialog = false;
            var token = accept.credential.accessToken;
            this.$store.state.user = accept.user;
            console.log('Login con Google')
            console.log(this.$store.state.user.displayName);
          },
          reject => {       
            console.log('Ingreso fallido', accept);
          });
    },
    logout() {
      Firebase.auth().signOut()
        .then(accept => {
          this.$router.push('/inicio');
        });
    }
  }
};
</script>

<style scoped>
.v-list-item:hover {
  text-decoration: none;
  color: #4F3701;
  opacity: 0.7;
}
.v-list-item {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
span {
  font-family: 'Montserrat', sans-serif;
  color: #4f3701;
  font-size: 1rem;
  font-weight: 600;
}
.v-btn {
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #212121;
}
.dialog-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
</style>