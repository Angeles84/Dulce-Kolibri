<template>
  <v-app>
    <AppBar />
    <Drawer />
    
    <transition name="vista" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import Footer from '@/components/Footer'

import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    AppBar,
    Drawer,
    Footer
  },

  data: () => ({
      
    }),
  computed: {
  
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
.vista-enter-active, .vista-leave-active {
    transition: opacity .3s;
  }
.vista-enter, .vista-leave-to{
  opacity: 0;
}

</style>