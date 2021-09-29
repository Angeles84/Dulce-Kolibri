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
import Footer from './components/Footer'

import { mapMutations, mapState } from "vuex";

export default {
  name: 'App',
  components: {
    AppBar,
    Drawer,
    Footer
  },

  data: () => ({
      items: [
        { title: 'Tortas' },
        { title: 'Postres' },
        { title: 'Galletas' },
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
.vista-enter-active, .vista-leave-active {
    transition: opacity .3s;
  }
.vista-enter, .vista-leave-to{
  opacity: 0;
}

</style>