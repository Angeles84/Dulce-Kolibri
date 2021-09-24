<template>
  <v-container fluid class="background-color mt-15 pb-14 px-9">
    <h2 class="text-center mt-13 mb-8">Destacados del mes</h2>
    <v-row>
      <v-col cols="12" sm="6" lg="4"
        v-for="(item, i) in items"
          :key="i"
      >
      <v-card
        class="mx-auto my-5"
        max-width="344"
       >
      <div class="d-flex flex-no-wrap justify-space-between">
         <v-avatar
                size="155"
                height="220px"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
        <div>
          
          <v-card-title
            class="titulo-card"
            v-text="item.title"
          ></v-card-title>

          <v-card-subtitle class="texto-card pb-3" v-text="item.artist"></v-card-subtitle>

          <v-card-text class="precio-card pb-2" v-text="item.precio">  </v-card-text>

          <v-card-actions>

            <v-btn
              class="ml-2 px-4"
              rounded
              small
              dark
              color="#D9AF3A"
            >
              Agregar
            </v-btn>
          </v-card-actions>
        </div>
      </div>
  </v-card> 
  
  <!-- separacion -->
      </v-col>
    </v-row>
    
  </v-container>
</template>
<script>
export default {
  data: () => ({
     items: [
        {
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/creamy-mascarpone-cheese-cake-with-strawberry-and-winter-berries-picture-id615247930?k=20&m=615247930&s=612x612&w=0&h=1Iz5305LghpTEDnTDgDg5l7pRwhOCTknMmwRrNJAwbw=',
          title: 'Cheesecake',
          artist: 'Cheesecake de frutos rojos, ipsum dolor sit amet consectetur.',
          precio: '$ 9.990'
        },
        {
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/chocolate-cake-with-bonbon-picture-id970877400?k=20&m=970877400&s=612x612&w=0&h=VyqDh9l-CohWJYZwf4TUoeMpHu6IyElNn9ZhFGL13kM=',
          title: 'Trufa',
          artist: 'Torta de trufa con, ipsum dolor sit amet consectetur adipisi.',
          precio: '$ 21.990'
        },
        {
          color: '#1F7087',
          src: 'https://media.istockphoto.com/photos/fuba-cake-picture-id491517422?k=20&m=491517422&s=612x612&w=0&h=UFohOjklUcBthMxj65pHgyLDlODX0rszDAMqq6JswTY=',
          title: 'Queque',
          artist: 'Queque de plátano con ipsum dolor sit amet consectetur.',
          precio: '$ 5.990'
        },
      ],
  })
}
</script>

<style scoped>

.background-color {
  background-color: #ebe9e9;
}
.titulo-card{
  font-family: 'Yesteryear', cursive;
  font-size: 2.2rem;
  color: #262626;
  margin-bottom: 0.8rem;
}
.texto-card {
  font-family: "Montserrat", sans-serif;
  color: #262626;
}
.precio-card {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #262626;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4f3701;
}
.v-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
</style>