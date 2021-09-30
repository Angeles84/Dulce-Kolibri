<template>
  <div class="login">
    <v-container fluid class="px-0 m-0 pb-16">
      <v-row class="p-0 m-0">
        <v-col cols="12" md="6" class="columna-1 pr-md-10 pb-0">
          <h2 class="mb-10">Login</h2>

          <v-form
            ref="form"
            @submit.prevent=""
          >
            <v-text-field
              
              label="Correo"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>

            <v-text-field

              label="Contraseña"
              :counter="10"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>
    
            <v-btn
              color="#D9AF3A"
              class="mr-4 mb-3"
              type="submit"
              block
              rounded
              dark
            >
              INGRESAR
            </v-btn>
          </v-form>

          <router-link to="" style="text-decoration: none;">
            <p class="text-center mt-6 olvida-contraseña">¿Olvidaste la contraseña?</p>  
          </router-link> 
          <hr class="mx-auto">
          <p class="text-center">¿No estás registrado?</p>

          <v-btn
            color="#D9AF3A"
            class="mr-4 mb-3 btn-registro"
            block
            rounded
            outlined
          >
            REGISTRARSE
          </v-btn>

        </v-col>
        <v-col cols="12" md="6" class="columna-2 pr-0 pb-0">
          <div class="background-image text-center">
            <h1 class="pb-0 mb-0">Delicias únicas</h1><br>
            <p class="mt-0 pt-0">¡Regístrate para recibir nuestras<br>promociones, novedades<br>y mucho más!</p>
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
  name: "Login",
  components: { Footer },
  data: () => ({
    
  }),
};
</script>

<style scoped>
.login {
  padding-top: 3.5rem;
}
.background-image {
  height: 73vh;
  background-image: url('../assets/fondo-login.jpg');
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
.olvida-contraseña {
  color: #D9AF3A;
  transition: all .3s ease;
}
.olvida-contraseña:hover {
  color: #f1d68b;
}
.v-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.v-text-field {
  font-family: 'Montserrat', sans-serif;
}
.btn-registro:hover {
  text-decoration: none;
}
h1 {
  color: #262626;
  font-family: 'Yesteryear', cursive;
  font-size: 5rem;
  padding-top: 11rem;
}
p {
  color: #262626;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
</style>