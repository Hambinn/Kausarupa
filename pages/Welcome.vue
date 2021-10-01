<template>
    <div>
       <tombol-welcome />

        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
import TombolWelcome from '../components/TombolWelcome.vue'
    export default {
  components: { TombolWelcome },
  data(){
      return{
          contactUs:"~/assets/svg/WelcomePage/contact us.svg",
          trailer:"~/assets/svg/WelcomePage/trailer.svg",
          aboutUs:"~/assets/svg/WelcomePage/aboutUSs.svg",
          catatan:"~/assets/svg/WelcomePage/catatan kuratorial.svg"
      }
  }
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style scoped>
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
    html{
        background-image: linear-gradient(aqua,navy);
    }
</style>