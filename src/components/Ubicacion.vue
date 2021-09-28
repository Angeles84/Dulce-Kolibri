<template>
<div class="background-color"> 
  <v-container class="d-md-flex">
    <div class="styleInfo pa-10">
      <h3 class="text-start">Ubicación</h3>
      <v-list class="background-color">
        <v-list-content>
          <v-list-item> <i class="mdi mdi-map-marker"></i>Hipodromo de Chile #1390, <br>Independencia</v-list-item>
          <v-list-item> <i class="mdi mdi-whatsapp"></i>+56 9 12345678</v-list-item>
          <v-list-item> <i class="mdi mdi-email-outline"></i>dulcekolibri@gmail.com</v-list-item>
        </v-list-content>
      </v-list>

    </div>

    <div class="alturaMapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.615221995568!2d-70.66269144851624!3d-33.40720140258722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5d6fe53d82b%3A0x2c3ec60570183aef!2sHip%C3%B3dromo%20Chile%201390%2C%20Independencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1632798747112!5m2!1ses!2scl" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </v-container>
</div>
</template>
<script>

</script>
<style scoped>
.background-color{
  background-color: #ebe9e9;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4f3701;
}
.alturaMapa {
  margin: 10px;
  border: 1px black solid;
}
.styleInfo, i, .v-list-item{
  color: #4f3701;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.v-list-item{
  font-size: .7em;
}
i{
  margin-left: -1em;
  margin-right: .5em;
  font-size: 1.8em;
}

</style>
