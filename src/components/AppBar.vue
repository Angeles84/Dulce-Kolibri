<template>
  <v-app-bar
      app
      color="white"
      class="px-5"
      height="82px"
    >
      <img src="@/assets/logo-menu.png" alt="">

      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" class="shrink">
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

        <v-btn exact color="#4F3701" plain :to="{name: 'Contacto'}"
        >
          Contacto
        </v-btn>
      
        <v-btn icon class="ml-16">
          <v-icon color="#4F3701">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon :to="{name: 'Carrito'}">
          <v-icon color="#4F3701" >mdi-cart-outline</v-icon>
          <span class="pb-4">{{$store.state.productos.length}}</span>
        </v-btn>
       

        <v-btn icon :to="{name: 'Login'}">
          <v-icon color="#4F3701">mdi-account-outline</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon v-else @click="setDrawer(true)" />
    </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: 'App',
  data: () => ({
      items: [
        { title: 'Tortas' },
        { title: 'Galletas' },
        { title: 'Postres' },
      ],
    }),
  computed: {
    ...mapState(["links"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
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
</style>