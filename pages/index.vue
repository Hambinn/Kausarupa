<template>
  <div class="container">
    <Nuxt-link to="/Welcome"><tombol/></Nuxt-link>
    <bintang/>
    <awan-loading/>
    <logo/>
    <!-- ini buat naro berbagai component yg ada di folder components -->
  </div>
</template>

<script>
import Tombol from '../components/Tombol.vue'
import Bintang from '../components/Bintang.vue'
import Logo from '../components/Logo.vue'
import AwanLoading from '../components/AwanLoading.vue'
    export default {
  components: { Tombol , Bintang, AwanLoading, Logo },
// ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style>
*{
   padding: 0;
   margin: 0;
   /*background-image: url("../assets/png/LandingPage/Background.png");
   background-repeat: no-repeat;
   background-size: 1920px 1080px;*/
}

html{
  background-image: url("../assets/png/LandingPage/Background.png");
  background-repeat: no-repeat;
  background-size: 1920px 1080px;
}

@media only  screen and (max-width: 1366px) {
    html{
        background-size: 1366px 768px;
    }
}



/* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>