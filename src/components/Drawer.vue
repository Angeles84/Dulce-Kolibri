<template>
  <v-navigation-drawer v-model="drawer" right fixed temporary>
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="{
          name: link,
        }"
        min-width="128px"
        exact
        color="#4F3701"
        text
      >
        <v-list-item-content>
          <v-list-item-title v-text="link" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="py-10">
        <v-btn icon>
          <v-icon color="#4F3701">mdi-cart-outline</v-icon>
        </v-btn>
      
        <v-btn icon >
          <v-icon color="#4F3701">mdi-account-outline</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "Drawer",

  computed: {
    ...mapState(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
</script>