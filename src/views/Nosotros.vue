<template>
  <div class="nosotros">
    <v-container>
      <v-row class="px-4 px-md-0">
        <v-col cols="12" md="7" lg="7" class="pr-md-9">
          <h2 class="mb-5">Nuestra historia</h2>
          <p>Hace un tiempo la mujer más hermosa que la vida me pudo dar emprendió su vuelo y con ello todos mis sueños se fueron abajo... No puedo negar que han sido meses muy difíciles, ella sería mi compañera y con su ausencia solo pensé en dejar todo, pero el tiempo me ha enseñado que es el peor error que puedo cometer, porque no sólo era mi sueño, también era el de mi madre, quien siempre fue mi admiradora número uno.</p>
          <p>En su casa ella era acompañada por este bella y pequeña ave, quien no la dejó sola hasta el último de sus días, la visitaba en su ventana y alegraba días donde el dolor y la pena eran algo habitual y es este pequeño ser quien se acercó a mí cuando la tristeza era tan grande que me sentía incapaz de seguir sonriendo. En mi corazón sentía que era ella quien venía a calmar tantos momentos de angustia.</p>
          <p>Es por esto que nuestro nombre ha cambiado de "@delicias_con_amour" a Dulce Kolibri, porque será mi forma de honrar la memoria de mi compañera, de mi amiga, la mujer que con cariño y amor me enseñó y me dio tanto en esta vida. Se que ella me sigue acompañando, y que este emprendimiento tendrá todas la buenas vibras, porque ahora no estoy sola, el ángel más bello esta junto a mi.</p>
          <p class="mb-0">Con este extenso texto les damos la bienvenida a todos nuestros seguidores, esperando siempre contar con su apoyo y ser parte de esos momentos especiales...</p>
          <div class="">
            <v-row class="p-0">
              <v-col cols="12" lg="5" class="pr-0 pt-3">
                <h3 class="mt-5 mt-lg-16 mb-0">Dulce Kolibri</h3>
                <p class="mb-0">Les desea un buen día 🌺</p>
              </v-col>
              <v-col cols="12" lg="7" class="d-none d-lg-flex pl-0 pt-0">
                <img class="img-fluid ramita" src="@/assets/ramita-nosotros.png" alt="">
              </v-col>
            </v-row>      
          </div>
        </v-col>
      
        <v-col cols="12" md="5" lg="5" class="text-center">
          <img class="img-fluid flor d-none d-md-inline mb-5" src="@/assets/flor.png" alt="">
          <img class="img-fluid madre-hija" src="@/assets/madre-hija.png" alt="">
          <img class="img-fluid flor d-md-none mt-5 mb-0" src="@/assets/flor.png" alt="">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.nosotros {
  margin-top: 8rem;
  margin-bottom: 3rem;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
p {
  color: #262626;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
h3 {
  color: #262626;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
.flor {
  width: 14rem;
  margin-bottom: 1rem;
}
.ramita {
  width: 100%;
}
.madre-hija {
  width: 100%;
}
</style>
