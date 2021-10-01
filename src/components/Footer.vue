<template>
  <footer>
      <div class="footer-menu">
        <img src="@/assets/footer.jpg" class="footer-img">
        <div class="list-absolute">
            <img src="@/assets/logo_kolibri.png" class="logo-kolibri-1 pl-sm-10 pl-lg-0">
            <ul class="list-none">
                <li class="text-bold">Enlances</li>
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Contáctanos</li>
            </ul>
            <ul class="list-none">
                <li class="text-bold">Sígueme en</li>
                <li class="instagram"><a href="https://www.instagram.com/dulce_kolibri/?hl=es" target="_blank"><v-icon color="#4F3701">mdi-instagram</v-icon><span> @dulcekolibri</span></a></li>
            </ul>
            <ul class="list-none">
                <li class="text-bold">Contacto</li>
                <li><v-icon color="#4F3701">mdi-whatsapp</v-icon><span> +569 12345678</span></li>
                <li><v-icon color="#4F3701">mdi-email-outline</v-icon><span> dulcekolibri@gmail.com</span></li>
            </ul>
            <div class="row only-mob">
            <img src="@/assets/logo_kolibri.png" class="logo-kolibri-2 mt-8">
            <ul class="list-none-mob text-footer-mob mt-8">
                <li><v-icon color="#4F3701">mdi-instagram</v-icon><span> @dulcekolibri</span></li>
                <li><v-icon color="#4F3701">mdi-whatsapp</v-icon><span> +569 12345678</span></li>
                <li><v-icon color="#4F3701">mdi-email-outline</v-icon><span> dulcekolibri@gmail.com</span></li>
            </ul>
            </div>
      </div>
      </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style>
li, span {
  font-family: "Montserrat", sans-serif;
}
li {
  font-weight: 500;
}
@media screen and (min-width: 899px) {
.footer-menu {
    display: flex;
    justify-content: space-around;
    position: relative;
    align-items: center;
}
ul.list-none {
    list-style-type: none;
}
li {
    padding: 10px;
    padding-right: 30px;
}
.list-absolute {
    position: absolute;
    display: flex;
    justify-content: space-around;
}
.text-bold {
    font-weight: 700;
    color: #4F3701;
}
.footer-img {
    width: 100%;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.logo-kolibri-1 {
    height: 150px;
    position: relative;
    right: 50px;
}
.only-mob {
    display: none;
}
}
@media screen and (max-width: 898px) {
    .footer-img {
        width: 100%;
        height: 180px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
    }
    .list-none {
        display: none;
    }
    .logo-kolibri-1{
        display: none;
    }
    .logo-kolibri-2{
        height: 100px;
        padding-left: 1rem;
    }
    .only-mob {
        position: relative;
        display: flex;
        justify-content: space-around;
    }
    ul.list-none-mob {
    list-style-type: none;
    }
    li {
    padding: 7px;
    padding-right: 30px;
    }
    .text-footer-mob {
        color: #4F3701;
    }  
}
span{
    color: #262626;
}
.instagram {
  transition: all 0.3s ease;
  cursor: pointer;
}
.instagram:hover {
    opacity: 0.5;
}
a:hover {
    text-decoration: none;
}

</style>