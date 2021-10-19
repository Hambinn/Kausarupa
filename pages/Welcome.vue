<template>
  <div class="container-welcome">
    <div class="top-cont">
      <div class="canvas">
        <div class="container-bintang">
          <img src="../assets/svg/WelcomePage/bintang oren.svg" alt="" class="oren">
          <img src="../assets/svg/WelcomePage/bintang ungu.svg" alt="" class="ungu">
        </div>
        <div class="container-popup">
          <img src="~assets/svg/WelcomePage/contact us.svg" alt="" class="contact" @click="showContact = true">
          <img src="~assets/svg/WelcomePage/about us.svg" alt="" class="about" @click="showAboutUs = true">
          <img src="~assets/svg/WelcomePage/catatan kuratorial.svg" alt="" class="catatan" @click="showCatatan = true">
          <img src="~assets/svg/WelcomePage/trailer.svg" alt="" class="trailer" @click="showYoutube = true">
          <img src="~assets/png/WelcomePage/calendar.png" alt="" class="calendar">
          <img src="~assets/png/WelcomePage/bts.png" alt="" class="bts">
          <Nuxt-link to="/Main" class="next" tag="button" :event="disabled ? '' : 'click'" @click.native="post"
            :style="styleObj">
            Next
          </Nuxt-link>
        </div>
        <div>
          <div class="container-form">
            <h1 class="welcome">Welcome</h1>
            <div class="form-control">
              <form action="">
                <input type="text" id="nama" name="nama" placeholder="Nama" class="placeholder name" autocomplete="off"
                  v-model="nama" @input="formValidation">
                <input type="text" id="instansi" name="instansi" placeholder="Instansi" class="placeholder instansi"
                  autocomplete="off" v-model="instansi" @input="formValidation">
              </form>
            </div>
          </div>
          <about-us v-show="showAboutUs" @close-modal="showAboutUs = false" />
          <catatan-kuratorial v-show="showCatatan" @close-modal="showCatatan = false" />
          <contact-us v-show="showContact" @close-modal="showContact = false" />
          <youtube v-show="showYoutube" @close-modal="showYoutube=false" />
        </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
      </div>
    </div>
  </div>
</template>

<script>
// ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
import AboutUs from '../components/AboutUs.vue'
import CatatanKuratorial from '../components/CatatanKuratorial.vue'
import ContactUs from '../components/ContactUs.vue'
import FormWelcome from '../components/FormWelcome.vue'
import Youtube from '../components/Youtube.vue'
import Cookies from 'js-cookie'
    export default {
        components:{FormWelcome, Youtube, AboutUs, CatatanKuratorial, ContactUs},
        beforeMount(){
            if(localStorage.getItem('nama') && localStorage.getItem('nama') !=''){
                this.$router.push('Main')
            }
        },
        data(){
            return{
                showAboutUs: false,
                showCatatan: false,
                showContact: false,
                showYoutube: false,
                nama:'',
                instansi:'',
                disabled: true,
                formval: this.formValidation,
                styleObj:{
                    background: '#C4C4C4',
                    color: '#000000',
                    cursor: 'default'
                },
                clicknative: '@click="post"'
            }
        },
        computed:{
            namaLength(){
                return this.nama.length;
            },
            instLength(){
                return this.instansi.length
            }

        },
        methods:{
            async post(){
                const bukuRef = this.$fire.firestore.collection('buku-tamu').doc()
                try{
                    await bukuRef.set({
                        nama: this.nama,
                        instansi: this.instansi
                    })
                } catch(e){
                    alert(e)
                    return
                }
                localStorage.setItem('nama',this.nama)
            },
            formValidation(){
                if(this.nama.length > 0 && this.instansi.length>0){
                    this.disabled = false;
                    this.styleObj.background='#587EA5'
                    this.styleObj.color = '#F8FEF0'
                    this.styleObj.cursor = 'pointer'
                }else{
                    this.disabled = true;
                    this.styleObj.background='#C4C4C4'
                    this.styleObj.color = '#000000'
                    this.styleObj.cursor = 'default'
                }
            }
        },
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
        
}

.top-cont{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 56.25%;
}

.canvas{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container-form{
    position: absolute;
    width: 40%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);

    background: rgba(196, 196, 196, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

.welcome{
    position: absolute;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -39%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 5.0vw;
    line-height: 115%;

    color: #000000;

}

.placeholder::placeholder{
    text-align: center;
}

input{
    all: unset;
    width: 65%;
    height: 12%;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.8vw;
}

input::-webkit-input-placeholder{
    font-family: Roboto;
    font-size: 1.5vw;
}

.name{
    position: absolute;
    left: 18%;
    top: 57%;
}

.instansi{
    position: absolute;
    
    left: 18%;
    top: 75%;
}

/* @media only  screen and (max-width: 1366px) {
    .container-form{
    position: absolute;
    width: 40%;
    height: 45%;
    left: 50%;
    top: 50%;
    transform: translate(-52%, -70%);

    background: rgba(196, 196, 196, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

.welcome{
    position: absolute;
    height: 100%;
    left: 50%;
    top: 50%;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 450%;
    line-height: 145%;

    color: #000000;

}

.placeholder::placeholder{
    text-align: center;
}

input{
    all: unset;
    width: 54%;
    height: 11%;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input::-webkit-input-placeholder{
    font-family: Roboto;
    font-size: 90%;
}

.name{
    position: absolute;
    left: 23%;
    top: 60%;
}

.instansi{
    position: absolute;
    
    left: 23%;
    top: 78%;
}
} */

.container-welcome{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/WelcomePage/bg welcome 16_9.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-bintang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang .oren{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(-370%,110%);
}

.container-bintang .ungu{
    height: 8%;
    top: 50%;
    left: 50%;
    transform: translate(600%,330%);
}

.container-popup{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-popup .contact{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(-60%,600%);
    cursor: pointer;
}

.container-popup .about{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(-430%,550%);
    cursor: pointer;
}

.container-popup .catatan{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(500%,500%);
    cursor: pointer;
}

.container-popup .trailer{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(270%,600%);
    cursor: pointer;
}

.container-popup .calendar{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(-590%,500%);
    cursor: pointer;
}

.container-popup .bts{
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(330%,550%);
    cursor: pointer;
}

.next{
    all: unset;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
    width: 30%;
    height: 8%;
    position: absolute;
    top: 50%;
    transform: translate(-118%, 260%);

    font-size: 2.5vw;
    font-family: 'Tf Grotesk';
    font-weight: normal;
    font-style: italic;

}


a{
    text-decoration: none;
}

/* @media only  screen and (max-width: 1366px) {
    .container-welcome{
        position: absolute;
        text-align: center;
        background-image: url("../assets/png/WelcomePage/bg welcome 16_9.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    
    .container-bintang{
        position: absolute;
    }

    .container-bintang .oren{
        height: 12%;
        top: 50%;
        left: 50%;
        transform: translate(-350%,70%);
}

.container-bintang .ungu{
    height: 10%;
    top: 50%;
    left: 50%;
    transform: translate(500%,200%);
}

.container-popup{
    position: absolute;
}

.container-popup .contact{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(300%,540%);
    cursor: pointer;
}

.container-popup .about{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(40%,450%);
    cursor: pointer;
}

.container-popup .catatan{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(900%,450%);
    cursor: pointer;
}

.container-popup .trailer{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(640%,540%);
    cursor: pointer;
}

.next{
    all: unset;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 404px;
    height: 60px;
    position: relative;
    top: 535px;
    left: -15px;

    font-size: 35px;
    font-family: 'Tf Grotesk';
    font-weight: normal;
    font-style: italic;


}



a{
    text-decoration: none;
}
} */
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>