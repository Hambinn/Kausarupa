<template>
  <div class="container-welcome">
    <div class="container-popup">
      <img src="~assets/svg/WelcomePage/contact us.svg" alt="" class="contact" @click="showContact = true">
      <img src="~assets/svg/WelcomePage/about us.svg" alt="" class="about" @click="showAboutUs = true">
      <img src="~assets/svg/WelcomePage/catatan kuratorial.svg" alt="" class="catatan" @click="showCatatan = true">
      <img src="~assets/svg/WelcomePage/trailer.svg" alt="" class="trailer" @click="showYoutube = true">
    </div>
    <div class="Tombol-next">
      <Nuxt-link to="/Main">
      <button class="next" @click="$refs.FormWelcome.post()">Next</button>
      </Nuxt-link>
    </div>
    <div class="container-bintang">
        <img src="../assets/svg/WelcomePage/bintang oren.svg" alt="" class="oren">
        <img src="../assets/svg/WelcomePage/bintang ungu.svg" alt="" class="ungu">
    </div>
    <div>
        <form-welcome ref="FormWelcome"/>
        <about-us v-show="showAboutUs" @close-modal="showAboutUs = false"/>
        <catatan-kuratorial v-show="showCatatan" @close-modal="showCatatan = false" />
        <contact-us v-show="showContact" @close-modal="showContact = false"/>
        <youtube v-show="showYoutube" @close-modal="showYoutube=false"/>
    </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
import AboutUs from '../components/AboutUs.vue'
import CatatanKuratorial from '../components/CatatanKuratorial.vue'
import ContactUs from '../components/ContactUs.vue'
import FormWelcome from '../components/FormWelcome.vue'
import Youtube from '../components/Youtube.vue'
    export default {
        components:{FormWelcome, Youtube, AboutUs, CatatanKuratorial, ContactUs},
        data(){
            return{
                showAboutUs: false,
                showCatatan: false,
                showContact: false,
                showYoutube: false,
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
    height: 140px;
    top: 50%;
    left: 50%;
    transform: translate(180%,35%);
}

.container-bintang .ungu{
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translate(1350%,210%);
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
    cursor: pointer;
}

.container-popup .about{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-5%,370%);
    cursor: pointer;
}

.container-popup .catatan{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(880%,370%);
    cursor: pointer;
}

.container-popup .trailer{
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(610%,470%);
    cursor: pointer;
}

.next{
    all: unset;
    background: #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    width: 648px;
    height: 86px;
    position: relative;
    top: 700px;

    font-size: 48px;
    font-family: 'Tf Grotesk';
    font-weight: normal;
    font-style: italic;
    color: #000000;

}

.next:hover{
    background-color:#587EA5 ;
}

a{
    text-decoration: none;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>