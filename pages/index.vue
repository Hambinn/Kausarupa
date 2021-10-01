<template>
  <div class="container">
    <Nuxt-link to="/test"><tombol/></Nuxt-link>
    <div class="Logo">
    <img src="~assets/svg/LandingPage/logo kausarupa.svg" height="500">
    </div>
    <!-- ini buat naro berbagai component yg ada di folder components -->
  </div>
</template>

<script>
import Tombol from '../components/Tombol.vue'
    export default {
  components: { Tombol },
// ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style>
*{
   padding: 0;
   margin: 0;
   background-image: url("../assets/png/LandingPage/Background.png");
   background-repeat: no-repeat;
   background-size: 1920px 1080px;
}

@media only  screen and (max-width: 1366px) {
    *{
        background-size: 1366px 768px;
    }
}

.Logo{
  padding: 120px 0;
  text-align: center;
}

/* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>