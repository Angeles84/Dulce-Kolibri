<template>
  <div>
    <p class="text-center text-md-right px-4 px-md-0">¡Bienvenido! <span class="py-1">{{ texto }}</span></p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "Moment",

  data: () => ({
    
  }),
  computed: {
    texto() {
      const hora = Number.parseInt(moment().format('HH')) 
      if (hora >= 8 && hora < 11) {
        return 'Parte tu mañana con quequito'
      } else if (hora > 12 && hora < 15) {
        return '¿Y si compartimos un pedacito de torta 🎂 para el postre?'
      } else if (hora >= 16 && hora < 19) {
        return 'Es una buena hora para unas galletitas 🍪🍪'
      } else if (hora >= 20 && hora < 23) {
        return 'Es la hora de compartir pastelito con un ser querido 🍰'
      } else {
        'Endulza tu día con algo rico'
      }
    }
  }
};
</script>

<style scoped>
p {
  font-family: 'Montserrat', sans-serif;
  color: #262626;
  margin-top: 1.5rem;
}
span {
  font-family: 'Montserrat', sans-serif;
  color: #4f3701;
  font-weight: 600;
  font-size: 1rem;
}
@media (min-width: 768px) {
  span {
    border-top: 1px solid #D9AF3A;
    border-bottom: 1px solid #D9AF3A;
  }
  p {
      margin-right: 1rem;
  }
}
</style>