<template>
  <div class="editar">
    <v-form
      :model="producto"
      ref="form"
      @submit.prevent=""
    >
    <v-container class="pb-16 px-4 px-md-0">
      <h2 v-once>Editando el producto: {{ producto.nombre }}</h2>
      <img class="ramita-tortas mb-5" src="@/assets/ramita-tortas.png" alt="">
      <v-row class="">
        <v-col cols="12" class="pr-md-6 pb-0 px-4">
 
            <v-text-field
              v-model="producto.nombre"
              label="Nombre"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>

            <v-text-field
              v-model="producto.imagen"
              label="URL de la imagen"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>
            
            <v-text-field
              v-model="producto.personas"
              label="Cantidad"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>

            <v-text-field
              v-model.number="producto.precio"
              label="Precio"
              type="number"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>

            <v-text-field
              v-model="producto.descuento"
              label="Descuento"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-text-field>

            <v-textarea
              v-model="producto.descripcion"
              label="Descripción del producto"
              :rules="[v => !!v || 'Este campo es obligatorio']"
              background-color="#ebe9e9"
              color="#262626"
              rounded
            ></v-textarea>
        </v-col>
      </v-row>
      <div class="text-center pt-3">
        <v-btn
          color="#D9AF3A"
          rounded
          dark
          class="mr-4 mb-3 testing"
          @click="editarTorta()"
          >
          ACTUALIZAR
        </v-btn>

        <v-btn
          color="error"
          rounded
          outlined
          class="mr-4 mb-3"
          @click="resetForm()"
          >
            LIMPIAR FORMULARIO
        </v-btn>   

        <v-btn
          color="warning"
          outlined
          rounded
          class="mb-3"
          @click="resetValidation()"
          >
            LIMPIAR VALIDACIóN
        </v-btn> 
      </div>
    </v-container>
    </v-form> 
  </div>
</template>

<script>
import { mapState} from 'vuex';
import Store from '@/store'
import Swal from 'sweetalert2'

export default {
  name: "Registro",
  components: {  },

  data: () => ({
    
  }),
  async beforeRouteEnter(to, from, next) {
    if(to.params.categoria === 'tortas') {
      await Store.dispatch('getTorta', to.params.id)  
    } else if(to.params.categoria === 'postres') {
      await Store.dispatch('getPostre', to.params.id)
    } else {
      await Store.dispatch('getGalleta', to.params.id)
    }
    next()
  },
  computed: {
    ...mapState(['producto'])
  },
  methods: {
    async editarTorta() {
      try {
        if(this.$route.params.categoria === 'tortas'){
          await this.$store.dispatch('actualizarTorta', {...this.producto})
        } else if(this.$route.params.categoria === 'postres'){
          await this.$store.dispatch('actualizarPostre', {...this.producto})
        } else {
          await this.$store.dispatch('actualizarGalleta', {...this.producto})
        }
        Swal.fire({
          icon: 'success',
          title: '¡Producto editado con éxito!',
        }) 
        this.$router.back()
      } catch (e) {
        console.error(e)
      }
    },
    resetForm () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  }
}
</script>

<style scoped>
.editar {
  padding-top: 7.5rem;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
.ramita-tortas {
  width: 9em;
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