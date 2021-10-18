<template>
  <div class="login">
    <v-container fluid class="px-0 m-0 pb-16">
      <v-row class="p-0 m-0">
        <v-col cols="12" md="6" class="columna-1 pr-md-10 pb-0">
          <h2 class="mb-16">!Hola {{this.$store.state.user.displayName}}!</h2>
          <h5 class="mb-4">Te haz logueado con éxito</h5>
          <p class="mb-10">Ahora puedes acceder al carrito de compras</p>
          <div class="pr-16 mt-16">
            <v-btn
              color="#D9AF3A"
              class="px-16 mt-16"
              rounded
              dark
              @click="logout"
            >
              Cerrar Sesión
            </v-btn> <br> <br>
            <span class="mt-4 pl-14">!Vuelve pronto!</span>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="columna-2 pr-0 pb-0">
          <div class="background-image text-center">
            <h1 class="pb-0 mb-0">Delicias únicas</h1>
            <br />
            <p class="mt-0 pt-0">
              ¡Regístrate para recibir nuestras<br />promociones, novedades<br />y
              mucho más!
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Administracion from '../views/Administracion.vue'
import Firebase from 'firebase';

export default {
  name: "Login",
  components: { Footer, Administracion },
  methods: {
    logout() {
      Firebase.auth().signOut()
        .then(accept => {
          this.$router.push('/');
        });
    }

  }
}
</script>

<style scoped>
.login {
  padding-top: 3.5rem;
}
.background-image {
  height: 73vh;
  background-image: url("../assets/fondo-login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}
.columna-1 {
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 576px) {
  .columna-1 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
@media (min-width: 1200px) {
  .columna-1 {
    padding-left: 7rem;
  }
}
.columna-2 {
  display: none;
}
@media (min-width: 960px) {
  .columna-2 {
    display: inline;
  }
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
  padding-top: 4rem;
}
h5 {
  font-family: "Montserrat", sans-serif;
  color: #212121;
  font-weight: 600;
}
.v-btn {
  text-transform: capitalize;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
h1 {
  color: #262626;
  font-family: "Yesteryear", cursive;
  font-size: 5rem;
  padding-top: 11rem;
}
p {
  color: #262626;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
</style>