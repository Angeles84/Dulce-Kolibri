<template>
  <div class="registro">
    <v-form
      ref="form"
      @submit.prevent=""
    >
    <v-container class="pb-16 px-4 px-md-0">
      <h2 >¡Hola José!</h2>
      <p class="mb-10">Actualiza tun información<br>con el siguiente formulario</p>
      <v-row class="">
        <v-col cols="12" md="6" class="pr-md-6 pb-0">
 
            <v-text-field
              
              label="Nombre"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>

            <v-text-field

              label="Apellido"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>
            
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
        </v-col>

        <v-col cols="12" md="6" class="columna-2 pl-md-6 pt-0 pt-md-3">
          <v-text-field
              
            label="Dirección"
            :rules="[v => !!v || 'Este campo es obligatorio']"
            background-color="#ebe9e9"
            color="#262626"
            rounded
          ></v-text-field>

          <v-text-field

            label="Ciudad"
            :rules="[v => !!v || 'Este campo es obligatorio']"
            background-color="#ebe9e9"
            color="#262626"
            rounded
          ></v-text-field>

          <v-text-field

            label="Región"
            :rules="[v => !!v || 'Este campo es obligatorio']"
            background-color="#ebe9e9"
            color="#262626"
            rounded
          ></v-text-field>

          <v-text-field

            label="Teléfono"
            :counter="12"
            :rules="[v => !!v || 'Este campo es obligatorio']"
            background-color="#ebe9e9"
            color="#262626"
            rounded
            ></v-text-field>
          
        </v-col> 
      </v-row>
      <div class="text-center pt-3">
        <v-btn
          color="#D9AF3A"
          class="mr-4 mb-3 px-16 text-center"
          type="submit"
          rounded
          dark
        >
          ACTUALIZAR
        </v-btn> 
      </div>
    </v-container>
    </v-form> 
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  name: "Registro",
  components: { Footer },

  data: () => ({
    
  }),
}
</script>

<style scoped>
.registro {
  padding-top: 8rem;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
p {
  color: #262626;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.v-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.v-text-field {
  font-family: 'Montserrat', sans-serif;
}
</style>