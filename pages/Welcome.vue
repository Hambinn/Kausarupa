<template>
  <div class="container-welcome">
    <div class="container-popup">
      <img src="~assets/svg/WelcomePage/contact us.svg" alt="" class="contact">
      <img src="~assets/svg/WelcomePage/about us.svg" alt="" class="about">
      <img src="~assets/svg/WelcomePage/catatan kuratorial.svg" alt="" class="catatan">
      <img src="~assets/svg/WelcomePage/trailer.svg" alt="" class="trailer">
    </div>
    <div class="Tombol-next">
      <Nuxt-link to="/Main">
      <button class="next">Next</button>
      </Nuxt-link>
    </div>
    <div class="container-bintang">
        <img src="../assets/svg/WelcomePage/bintang oren.svg" alt="" class="oren">
        <img src="../assets/svg/WelcomePage/bintang ungu.svg" alt="" class="ungu">
    </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
    export default {
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
    background-image: url("../assets/png/WelcomePage/bg welcome 16_9.png");
    background-repeat: no-repeat;
    background-size: 100% 1080px;
    height: 100vh;
    width: 100vw;
    }

.container-bintang{
    position: absolute;
}

.container-bintang .oren{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(200%,30%);
}

.container-bintang .ungu{
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(1300%,30%);
}

@media only  screen and (max-width: 1366px) {
    .container-welcome{
        background-size: 1366px 768px;
    }
}

.container-popup{
    position: absolute;
}

.container-popup .contact{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(260%,470%);
}

.container-popup .about{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(0%,370%);
}

.container-popup .catatan{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(895%,370%);
}

.container-popup .trailer{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(620%,470%);
}

.next{
    background: #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    width: 648px;
    height: 86px;
    position: relative;
    top: 670px;

    font-size: 48px;
    font-family: Tf Grotesk Italic;
    font-style: italic;
    font-weight: normal;
    color: #000000;

}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>