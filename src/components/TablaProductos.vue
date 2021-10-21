<template>
  <div>
  <v-container class="mb-14">

    <v-data-table
    :headers="headers"
    :items="$store.getters['productos']"
    class="elevation-1"
  >
    <template v-slot:top >
      <v-toolbar
        flat
      >
        <v-toolbar-title></v-toolbar-title>
        <h5>Productos</h5>
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
              AGREGAR PRODUCTO
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              Agregando producto
            </v-card-title>

            <v-card-text>
              <v-container>
               <v-form ref="form" :model="producto">
                <v-row>
                  <v-col
                    cols="12" 
                    class="py-0"
                  >
                    <v-text-field
                      v-model="producto.nombre"
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
                    <v-select
                      v-model="producto.categoria"
                      label="Categoría"
                      :rules="[v => !!v || 'Este campo es obligatorio']"
                      background-color="#ebe9e9"
                      color="#262626"
                      rounded
                      :items="['tortas', 'postres', 'galletas']"
                    ></v-select>
                    
                  </v-col>
                   <v-col
                    cols="12" 
                    class="py-0"
                  >
                    <v-text-field
                      v-model="producto.imagen"
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
                      v-model="producto.personas"
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
                      v-model.number="producto.precio"
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
                      v-model="producto.descuento"
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
                      v-model="producto.descripcion"
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
                  @click="addTorta"
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
        <span>${{ item.precio.toLocaleString() }}</span>
      </v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">   
      <v-icon
        color="#D9AF3A"
        small
        class="mr-2"
        @click="$router.push(`/editar/${item.categoria}/${item.id}`)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="#4f3701"
        class="ml-5"
        small
        @click.stop="borrarItem(item)"
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
import { mapState, mapGetters, mapMutations, createLogger } from 'vuex';
import Swal from 'sweetalert2'

export default {
  name: 'TablaTortas',

  data: () => ({
    itemss: 'i',
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
    ],
    producto: {}
  }),
  computed: {
    ...mapGetters([ 'productos']),
  }, 
 
  mounted() {
    this.cargaTabla();
  },
  methods: {
    cargaTabla() {
      this.$store.dispatch("getTortas");
      this.$store.dispatch("getPostres");
      this.$store.dispatch("getGalletas");
    },
    //eliminar curso
    borrarItem(item) { 
      //prompt('Desea borrar este producto?')
      Swal.fire({
        icon: 'question',
        title: '¿Desea borrar este producto?',
        text: 'Si haces click en "Eliminar" borrarás el producto',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: `Cancelar`,

      }).then((result) => {
        if (result.isConfirmed) {
          if(item.categoria === 'tortas') {
            this.$store.dispatch('borrarTorta', item)
          } else if(item.categoria === 'postres') {
              this.$store.dispatch('borrarPostre', item)
          }else {
            this.$store.dispatch('borrarGalleta', item)
          }
          Swal.fire({
            icon: 'success',
            title: '¡Producto eliminado con éxito!',
          }) 
        } else if (result.isDenied) {
           Swal.fire('Changes are not saved', '', 'info')
        }
      })    
    },

    async addTorta() {
      try {
        if(this.producto.categoria === 'tortas'){
          const response = await this.$store.dispatch('crearTorta', {...this.producto})
          console.log({ response })
          this.dialog = false
          this.$store.dispatch('getTortas')
          this.resetForm()    
        } else if(this.producto.categoria === 'postres'){
          const response = await this.$store.dispatch('crearPostre', {...this.producto})
          console.log({ response })
          this.dialog = false
          this.$store.dispatch('getPostres')
          this.resetForm()    
        } else {
          const response = await this.$store.dispatch('crearGalleta', {...this.producto})
          console.log({ response })
          this.dialog = false
          this.$store.dispatch('getGalletas')
          this.resetForm() 
        } 
        Swal.fire({
          icon: 'success',
          title: '¡Producto agregado con éxito!',
        })  
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
