<template>
  <div class="mt-10">
    <v-container>
      <h2 class="mt-4 mb-11">Nuestros productos</h2>
      <v-row >
        <v-col cols="12" md="6" align="center">
          <div class="background-tortas mb-2">
            <h3>Tortas</h3>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="pl-md-11" >
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
  height: 40vh;
  background-image: url('../assets/tortas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
}
.background-tortas:hover {
  height: 42vh;
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.80);
  opacity: 0.75;
  cursor: pointer;
}
.background-galletas {
  height: 18vh;
  background-image: url('../assets/galletas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
}
.background-galletas:hover, .background-postres:hover {
  height: 20vh;
  box-shadow: 6px 8px 20px rgba(0, 0, 0, 0.80);
  cursor: pointer;
  opacity: 0.70;
}
.background-postres {
  height: 18vh;
  background-image: url('../assets/postres.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 6px 8px 14px rgba(0, 0, 0, 0.30);
  transition: all 0.4s ease;
}
h2 {
  color: #4F3701;
  font-size: 2rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
h3 {
  color: white;
  font-family: 'Yesteryear', cursive;
  font-size: 5.5rem;
  padding-top: 1.5rem;
  vertical-align: center;
}
h4 {
  color: white;
  font-family: 'Yesteryear', cursive;
  font-size: 3rem; 
  padding-top: 1.3rem;
  padding-left: 1rem;
}
</style>