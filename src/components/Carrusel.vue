<template>
<div>
  <div class="mt-4 banner">
    <img src="@/assets/banner.jpg" alt="" class="img-fluid banner-img">
  </div>
  <v-carousel hide-delimiters cycle class="mt-4 carrusel">
    <v-carousel-item
      src="@/assets/carrusel-1.jpg"
      class="img-fluid"
    >
      <v-row
        class="fill-height"
        align="center"
      >
      </v-row>
    </v-carousel-item>

    <v-carousel-item
      src="@/assets/carrusel-2.jpg"
      class="img-fluid"
    >
      <v-row
        class="fill-height"
        align="center"
      >
      </v-row>
    </v-carousel-item>

    <v-carousel-item
      src="@/assets/carrusel-3.jpg"
      class="img-fluid"
    >
      <v-row
        class="fill-height"
        align="center"
      >
      </v-row>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  //font-family: 'Yesteryear', cursive;
  export default {
    
  }
</script>

<style scoped>

.banner-img {
  width: 100%;
}
.carrusel {
  display: none;
}
@media (min-width: 768px) {
  .banner {
    display: none;
  }
  .carrusel {
    display: block;
  }
}
.carrusel {
  transition: all 1s ease;
}

</style>