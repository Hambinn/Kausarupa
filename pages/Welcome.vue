<template>
    <div class="container-welcome">
        <Nuxt-link to="/Main">
        <button class="next">Next</button>
        </Nuxt-link>
        <bintang-welcome />
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
import TombolWelcome from '../components/TombolWelcome.vue'
import BintangWelcome from '../components/BintangWelcome.vue'
    export default {
  components: { TombolWelcome , BintangWelcome },
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

<style>
*{
        padding: 0;
        margin: 0;
        
}

.container-welcome{
    text-align: center;
    background-image: url("../assets/svg/WelcomePage/background (1).svg");
    background-repeat: no-repeat;
    background-size: 100% 1080px;
    height: 100vh;
    width: 100vw;
    }

@media only  screen and (max-width: 1366px) {
    .container-welcome{
        background-size: 1366px 768px;
    }
}

.next{
    background: #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    width: 648px;
    height: 86px;
    position: relative;
    top: 640px;

    font-size: 48px;
    font-family: Tf Grotesk Italic;
    font-style: italic;
    font-weight: normal;
    color: #000000;

}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>