<template>
  <div>
  <v-container class="mb-14">

    <v-data-table
    :headers="headers"
    :items="$store.state.postres"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title></v-toolbar-title>
        <h5>Postres</h5>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#D9AF3A"
              rounded
              dark
              class="mb-2 agregar"
              v-bind="attrs"
              v-on="on"
            >
              AGREGAR POSTRE
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              Agregando postre
            </v-card-title>

            <v-card-text>
              <v-container>
               <v-form ref="form" :model="postre">
                <v-row>
                  <v-col
                    cols="12" 
                    class="py-0"
                  >
                    <v-text-field
                      v-model="postre.nombre"
                      label="Nombre"
                      :rules="[v => !!v || 'Este campo es obligatorio']"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12" 
                    class="py-0"
                  >
                    <v-text-field
                      v-model="postre.imagen"
                      label="Url de la imagen de la torta"
                      :rules="[v => !!v || 'Este campo es obligatorio']"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    class="py-0"
                  >
                    <v-text-field
                      v-model="postre.personas"
                      label="Cantidad"
                      :rules="[v => !!v || 'Este campo es obligatorio']"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12" 
                    class="py-0"
                  >
                    <v-text-field
                      v-model.number="postre.precio"
                      label="Precio"
                      type="number"
                      :rules="[v => !!v || 'Este campo es obligatorio']"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    class="py-0"
                  >
                    <v-text-field
                      v-model="postre.descuento"
                      label="Descuento"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    class="py-0"
                  >
                    <v-textarea
                      v-model="postre.descripcion"
                      label="Descripción de la torta"
                      :rules="[v => !!v || 'Este campo es obligatorio']"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                    ></v-textarea>
                  </v-col>         
                </v-row>
               </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
             <v-spacer></v-spacer>
              <div align="center">
                <v-btn
                  color="#D9AF3A"
                  rounded
                  dark
                  class="mr-4 mb-3"
                  @click="addPostre"
                >
                 AGREGAR
                </v-btn>

                <v-btn
                  color="error"
                  rounded
                  outlined
                  class="mr-4 mb-3"
                  @click="resetForm"
                >
                  LIMPIAR FORMULARIO
                </v-btn>   

                <v-btn
                  color="warning"
                  outlined
                  rounded
                  class="mb-3"
                  @click="resetValidation"
                >
                  LIMPIAR VALIDACIóN
                </v-btn>     
              </div>

            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>
    
    <template v-slot:[`item.precio`]="{ item }">
      <v-chip
        color="#4f3701"
        dark
      >
        <span>${{ item.precio.toLocaleString('de-DE', {
                minimumFractionDigits: 0
              }) }}</span>
      </v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">   
      <v-icon
        color="#D9AF3A"
        small
        class="mr-2"
        @click="$router.push(`/editar/${item.id}`)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="#4f3701"
        class="pl-5"
        small
        @click="borrarItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
     
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

  </v-container>
  </div>
</template>

<script>
import Firebase from 'firebase';
import { mapState, mapMutations, createLogger } from 'vuex';

export default {
  name: 'TablaPostres',

  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogBorrar: false,
    headers: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: false,
        value: 'nombre',
      },
      { text: 'Cantidad', value: 'personas' },
      { text: 'Precio', value: 'precio' },
      { text: 'Descuento', value: 'descuento' },
      { text: 'Acciones', value: 'actions', sortable: false },
    ]
  }),
  computed: {
    ...mapState([ 'postre']),
  }, 
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  mounted() {
    this.cargaTabla();
  },
  methods: {
    cargaTabla() {
      this.$store.dispatch("getPostres");
    },
    //eliminar curso
    borrarItem(item) {
      prompt('Desea borrar esta postre?')
      this.$store.dispatch('borrarPostre', item)
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async addPostre() {
      try {
        const response = await this.$store.dispatch('crearPostre', {...this.postre})
        console.log({ response })
        this.dialog = false
        this.$store.dispatch('getPostres')
        this.resetForm()
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
.v-data-table {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #262626;
}
span {
  color: white;
}
h5 {
  color: #4f3701;
  font-weight: 700;
}
</style>