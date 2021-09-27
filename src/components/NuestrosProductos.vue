<template>
  <div class="mt-10 mb-5">
    <v-container>
      <h2 class="mt-5 mb-12 text-center">Nuestros productos</h2>
      <v-row class="px-2">
        <v-col cols="12" md="8" align="center" class="pr-lg-5">
          <div class="background-tortas mb-2">
            <h3>Tortas</h3>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="pl-lg-11" >
          <div class="background-galletas mb-7" >
            <h4>Galletas</h4>
          </div>
          <div class="background-postres" >
            <h4>Postres</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script >

export default {
  
}
</script>

<style scoped>

.background-tortas {
  height: 38vh;
  background-image: url('../assets/tortas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
}
.background-tortas:hover {
  height: 40vh;
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.80);
  opacity: 0.75;
  cursor: pointer;
}
.background-galletas {
  height: 38vh;
  background-image: url('../assets/galletas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
}
.background-galletas:hover, .background-postres:hover {
  height: 40vh;
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.80);
  cursor: pointer;
  opacity: 0.70;
}
.background-postres {
  height: 38vh;
  background-image: url('../assets/postres.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
}
@media (min-width: 960px) {
  .background-tortas {
    height: 50vh;
  }
  .background-tortas:hover {
    height: 52vh;
  }
}
@media (min-width: 960px) {
  .background-galletas, .background-postres {
      height: 23vh;
  }
  .background-galletas:hover, .background-postres:hover {
    height: 25vh;
  }
}
h2 {
  color: #4F3701;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
h3 {
  color: white;
  font-family: 'Yesteryear', cursive;
  font-size: 5.7rem;
  padding-top: 3.5rem;
  vertical-align: center;
}
h4 {
  color: white;
  font-family: 'Yesteryear', cursive;
  font-size: 5.7rem;
  padding-top: 3.5rem;
  text-align: center;
}
@media (min-width: 960px) {
  h4 {
    font-size: 3rem; 
    padding-top: 1.5rem;
    padding-left: 1rem;
    text-align: left;
  }
  h3 {
    font-size: 5.7rem;
    padding-top: 5rem;
}
}
</style>