<template>
  <v-carousel hide-delimiters class="mt-3 px-md-4">
    <v-carousel-item
      src="@/assets/carrusel-1.jpg"
      class="img-fluid"
    >
      <v-row
        class="fill-height"
        align="center"
      >
        <div class="pl-10 ml-5 pl-md-16 ml-md-16">
          <h2 class="mb-3">Pastelería</h2>
          <p >Delicias que cumplen<br>un sueño...</p>
        </div>
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
        <div class="pl-10 ml-5 pl-md-16 ml-md-16">
          <h2 class="mb-3">Pastelería</h2>
          <p >Delicias que cumplen<br>un sueño...</p>
        </div>
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
        <div class="pl-10 ml-5 pl-md-16 ml-md-16">
          <h2 class="mb-3">Pastelería</h2>
          <p >Delicias que cumplen<br>un sueño...</p>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  //font-family: 'Yesteryear', cursive;
  export default {
    
  }
</script>

<style scoped>
h2 {
  font-family: 'Yesteryear', cursive;
  font-size: 4.7rem;
  color: #262626;
}
p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #262626;
}
</style>