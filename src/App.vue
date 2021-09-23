<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      class="px-5"
      height="80px"
    >
      <img src="@/assets/logo-menu.jpg" alt="">

       <v-spacer></v-spacer>

         <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="{
              name: link,
            }"
            exact
            color="#4F3701"
            plain
          >
            {{ link }}
          </v-btn>
      
      <v-btn icon class="ml-16">
        <v-icon color="#4F3701">mdi-magnify</v-icon>
      </v-btn>

       <v-btn icon>
        <v-icon color="#4F3701">mdi-cart-outline</v-icon>
      </v-btn>
      
      <v-btn icon >
        <v-icon color="#4F3701">mdi-account-outline</v-icon>
      </v-btn>
     
    </v-app-bar>

   <transition name="vista" mode="out-in">
      <router-view></router-view>
    </transition>
   </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: 'App',

  data: () => ({
  
  }),
  computed: {
    ...mapState(["links"]),
  },
};
</script>

<style scoped>
.vista-enter-active, .vista-leave-active {
    transition: opacity .3s;
  }
.vista-enter, .vista-leave-to{
  opacity: 0;
}
img {
  width: 12rem;
}
.v-btn {
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
</style>