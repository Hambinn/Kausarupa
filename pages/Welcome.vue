<template>
  <div class="container-welcome">
    <div class="container-popup">
      <img src="~assets/svg/WelcomePage/contact us.svg" alt="" class="contact" @click="showContact = true">
      <img src="~assets/svg/WelcomePage/about us.svg" alt="" class="about" @click="showAboutUs = true">
      <img src="~assets/svg/WelcomePage/catatan kuratorial.svg" alt="" class="catatan" @click="showCatatan = true">
      <img src="~assets/svg/WelcomePage/trailer.svg" alt="" class="trailer" @click="showYoutube = true">
    </div>
    <div class="Tombol-next">
      <Nuxt-link to="/Main" class="next"  tag="button"   :event="disabled ? '' : 'click'"  :style="styleObj"> 
      Next
      </Nuxt-link>
    </div>
    <div class="container-bintang">
        <img src="../assets/svg/WelcomePage/bintang oren.svg" alt="" class="oren">
        <img src="../assets/svg/WelcomePage/bintang ungu.svg" alt="" class="ungu">
    </div>
    <div>
        <div class="container-form">
        <h1 class="welcome">Welcome</h1>
        <div class="form-control">
            <form action="">
                <input type="text" id="nama" name="nama" placeholder="Nama" class="placeholder name" autocomplete="off" v-model="nama" @input="formValidation">
                <input type="text" id="instansi" name="instansi" placeholder="Instansi" class="placeholder instansi" autocomplete="off" v-model="instansi" @input="formValidation">
            </form>
        </div>
        </div>
        <about-us v-show="showAboutUs" @close-modal="showAboutUs = false"/>
        <catatan-kuratorial v-show="showCatatan" @close-modal="showCatatan = false" />
        <contact-us v-show="showContact" @close-modal="showContact = false"/>
        <youtube v-show="showYoutube" @close-modal="showYoutube=false"/>
    </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
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
                }
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
                Cookies.set('nama',this.nama)
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
        beforeDestroy(){
            this.post()
        },
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
        
}
.container-form{
    position: absolute;
    width: 826px;
    height: 534px;
    left: 547px;
    top: 130px;

    background: rgba(196, 196, 196, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

.welcome{
    position: absolute;
    width: 447px;
    height: 115px;
    left: 190px;
    top: 80px;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 115px;

    color: #000000;

}

.placeholder::placeholder{
    text-align: center;
}

input{
    all: unset;
    width: 500px;
    height: 67px;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 30px;;
}

input::-webkit-input-placeholder{
    font-family: Roboto;
    font-size: 24px;
}

.name{
    position: absolute;
    left: 160px;
    top: 290px;
}

.instansi{
    position: absolute;
    
    left: 160px;
    top: 390px;
}

@media only  screen and (max-width: 1366px) {
    .container-form{
    position: absolute;
    width: 541px;
    height: 350px;
    left: 400px;
    top: 140px;

    background: rgba(196, 196, 196, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.welcome{
    position: absolute;
    width: 447px;
    height: 115px;
    left: 50px;
    top: 20px;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 115px;

    color: #000000;

}

.placeholder::placeholder{
    text-align: center;
}

input{
    all: unset;
    width: 293px;
    height: 39px;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input::-webkit-input-placeholder{
    font-family: Roboto;
    font-size: 14px;
}

.name{
    position: absolute;
    left: 120px;
    top: 210px;
}

.instansi{
    position: absolute;
    
    left: 120px;
    top: 270px;
}
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


}


a{
    text-decoration: none;
}

@media only  screen and (max-width: 1366px) {
    .container-welcome{
        text-align: center;
        background-image: url("../assets/png/WelcomePage/bg welcome 16_9.png");
        background-repeat: no-repeat;
        background-size: 1366px 768px;
        height: 100vh;
        width: 100vw
    }

    
    .container-bintang{
        position: absolute;
    }

    .container-bintang .oren{
        height: 90px;
        top: 50%;
        left: 50%;
        transform: translate(220%,80%);
}

.container-bintang .ungu{
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(1300%,280%);
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
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>