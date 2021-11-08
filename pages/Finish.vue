<template>
    <div class="container-finish">
      <div class="top-cont">
        <div class="canvas">
          <div class="container-volume-finish">
            <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on" @click="changeMute" ref="volumeBtn">
          </div>
          <div class="container-jendela-last">
            <img src="../assets/svg/LastPage/jendela (1)-min.png" alt="" class="JendelaLast">
          </div>
          <div class="container-orang">
            <img src="../assets/svg/LastPage/orang-min.png" alt="" class="OrangLast">
          </div>
          <div class="container-meja-last">
            <img src="../assets/svg/LastPage/meja (1)-min.png" alt="" class="MejaLast">
          </div>
          <div class="container-vas-last">
            <img src="../assets/svg/LastPage/vas bunga-min.png" alt="" class="VasLast">
          </div>
          <div class="container-topeng-last">
            <img src="../assets/svg/LastPage/3 topeng.png" alt="" class="TopengLast">
          </div>
          <div class="container-lemari-last">
            <img src="../assets/svg/LastPage/lemari (1)-min.png" alt="" class="LemariLast">
          </div>
          <div class="container-logo-last">
            <img src="../assets/svg/LastPage/logo kausarupa.png" alt="" class="LogoLast">
          </div>
          <div class="tulisan-btn-last">
            <transition name="trans-kat">
            <p class="kat" v-show="kat">Katalog<br>Karya</p>
            </transition >
            <transition name="trans-mer">
            <p class="mer" v-show="mer">Merch</p>
            </transition>
            <transition name="trans-pho">
            <p class="pho" v-show="pho">Photobooth</p>
            </transition>
            <transition name="trans-gep">
            <p class="gep" v-show="gep">GEP<br>Sebelumnya</p>
            </transition>
          </div>
          <div class="cont-tombol-finish">
              <img src="../assets/png/FinishPage/Last/katalog.png" class="katalog" @mouseover="showkat" @mouseleave="showkat" @click="toggKat = true; forceRender()">
              <img src="../assets/png/FinishPage/Last/merch.png" class="merch" @mouseover="showmer" @mouseleave="showmer" @click="toggMerch = true">            
              <img src="../assets/png/FinishPage/Last/photobooth.png" class="photobooth" @mouseover="showpho" @mouseleave="showpho" @click="toggPho = true; forceRender()">            
              <img src="../assets/png/FinishPage/Last/gep sebelumnya.png" class="sebelum" @mouseover="showgep" @mouseleave="showgep" @click="toggGep=true; forceRenderThrowback() ">              
              <img src="../assets/png/FinishPage/home.png" class="home" @click="home">
              <div class="btn-feedback" @click="toggFeed = true">
                Feedback
              </div>  
          </div>
          <katalog-karya v-show="toggKat"  @close-modal="toggKat=false" :key="componentKey"/>
          <merch v-show="toggMerch" @close-modal="toggMerch=false"/>
          <throwback v-show="toggGep" @close-modal="toggGep=false" :karyalength="karyalength" :arrkarya="arrkarya" :key="throwbackKey"/>
          <umpan-balik v-show="toggFeed" @close-modal="toggFeed=false"/>
        </div>
      </div>
          <photobooth v-show="toggPho" @close-modal="toggPho=false" :key="componentKey"/>
          <rcp/>
    </div>
</template>

<script>
import Katalog from '../components/Katalog.vue'
import KatalogKarya from '../components/KatalogKarya.vue'
import Merch from '../components/Merch.vue'
import Photobooth from '../components/photobooth.vue'
import Rcp from '../components/rcp.vue'
import Throwback from '../components/Throwback.vue'
    import TombolFinish from '../components/TombolFinish.vue'
import UmpanBalik from '../components/UmpanBalik.vue'
        export default {
            components:{ TombolFinish, Katalog, KatalogKarya, Photobooth, Merch, Throwback, UmpanBalik, Rcp },
            data(){
              return{
                kat:false,
                mer: false,
                pho: false,
                gep: false,
                toggKat: false,
                toggMerch: false,
                toggPho: false,
                toggGep:false,
                toggFeed: false,
                componentKey: 0,
                throwbackKey: 1,
                arrkarya: [],
                karyalength: 0,
                id: 0,
                title: '',
                nama:'',
                caption:'',
                img: [],
                karlength: 0,
                isVolume: true,
                audio: undefined,
                isAudioPlaying: false,
              }
            },
            methods:{
              showkat(){
                this.kat = !this.kat
              },
              showmer(){
                this.mer = !this.mer
              },
              showpho(){
                this.pho = !this.pho
              },
              showgep(){
                this.gep = !this.gep
              },
              home(){
                this.$router.push('/main')
              },
              forceRender(){
                this.componentKey +=1;
                console.log(this.componentKey)
              },
              forceRenderThrowback(){
                this.throwbackKey +=1
                console.log(this.throwbackKey)
              },
              async getThumbnail(){
                const karyaRef = this.$fire.firestore.collection('throwback').doc('Foto')
                try{
                    const karya = await karyaRef.get()
                    this.arrkarya = Object.values(karya.data())
                    console.log(this.arrkarya)
                    this.karyalength = this.arrkarya.length
                    console.log(this.karyalength)
                } catch(e){
                    alert(e)
                    return
                }
              },
              changeMute() {
                this.audio.muted = !this.audio.muted
                if (this.audio.muted == true) {
                this.$refs.volumeBtn.src = require('~/assets/png/umum/volumeoff.png')
                } else {
                this.$refs.volumeBtn.src = require('~/assets/png/umum/volumeon.png')
                }
                if (!this.isAudioPlaying) {
                this.playAudio()
                }
            },
            playAudio(){
                let startPlayPromise = this.audio.play()
                this.isAudioPlaying = true
                if (startPlayPromise !== undefined) {
                startPlayPromise.then(() => {
                    console.log('play')
                    // Yaudah biarin aja dia ngeplay
                }).catch(() => {
                    this.isAudioPlaying = false
                    this.audio.muted = true
                    console.log(startPlayPromise)
                    })
                }
            },
            },
            mounted(){
              this.getThumbnail()
              localStorage.setItem("daritopeng",true)
              this.audio = new Audio('/sound/11. kamar.mp3')
              this.audio.volume = 0.2
              this.audio.loop = true
              this.playAudio()
            }
        }
</script>

<style>
html,body{
    all: unset;
}
*{
    padding: 0;
    margin: 0;   
}

.container-volume-finish{
    position: absolute;
    height: 100%;
    width: 100%;
}
.container-volume-finish .volume-on{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.btn-feedback{
  all: unset;
  position: absolute;
    font-family: 'Tf Grotesk-italic';
    font-weight: normal;
    font-style: italic;
    background-image: linear-gradient(#30455A,#898989);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
    width: 25%;
    height: 6%;
    transform: translate(50%,1270%);
    font-size: 2vw;
    color: #F2F7ED;
    cursor: pointer;
}

.tulisan-btn-last{
  position: absolute;
  height: 100%;
  width: 100%;
}

.kat{
    position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 1.5vw;
    color: #466584;
    text-align: center;
    transform: translate(270%, 700%);
}
.trans-kat-enter-active, .trans-kat-leave-active{
    transition: all .5s ease;
}

.trans-kat-enter, .trans-kat-leave-to{
    opacity: 0;
    transform: translate(270%, 1000%);
}

.mer{
  position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 1.5vw;
    color: #466584;
    text-align: center;
    transform: translate(690%, 1430%);
}

.trans-mer-enter-active, .trans-mer-leave-active{
    transition: all .5s ease;
}

.trans-mer-enter, .trans-mer-leave-to{
    opacity: 0;
    transform: translate(690%, 1730%);
}

.pho{
    position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 1.5vw;
    color: #466584;
    text-align: center;
    transform: translate(170%,2350%);
}

.trans-pho-enter-active, .trans-pho-leave-active{
    transition: all .5s ease;
}

.trans-pho-enter, .trans-pho-leave-to{
    opacity: 0;
    transform: translate(170%, 2650%);
}

.gep{
  position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 1.5vw;
    color: #466584;
    text-align: center;
    transform: translate(345%, 1170%);
}

.trans-gep-enter-active, .trans-gep-leave-active{
    transition: all .5s ease;
}

.trans-gep-enter, .trans-gep-leave-to{
    opacity: 0;
    transform: translate(345%, 1470%);
}

.cont-tombol-finish{
  position: absolute;
  height: 100%;
  width: 100%;
}


.katalog{
  position: absolute;
  height: 30%;
  transform: translate(-240%,60%);
  cursor: pointer;
}

.merch{
  position: absolute;
  height: 30%;
  transform: translate(-150%,60%);
  cursor: pointer;
}

.photobooth{
  position: absolute;
  height: 30%;
  transform: translate(-240%,165%);
  cursor: pointer;
}

.sebelum{
  position: absolute;
  height: 30%;
  transform: translate(-150%,165%);
  cursor: pointer;
}

.home{
  position: absolute;
  height: 7%;
  transform: translate(-1200%,150%);
  cursor: pointer;
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

.container-finish{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/FinishPage/bg umum last page.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-orang{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-orang .OrangLast{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(106%,-35%);
    z-index: 0;
}

.container-meja-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-meja-last .MejaLast{
    position: absolute;
    height: 18%;
    top: 50%;
    left: 50%;
    transform: translate(-100%,160%);
}

.container-vas-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-vas-last .VasLast{
    position: absolute;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-90%, 0%);
}

.container-topeng-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-topeng-last .TopengLast{
    position: absolute;
    height: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-380%);
}

.container-lemari-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-lemari-last .LemariLast{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-450%,-35%);
}

.container-logo-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-logo-last .LogoLast{
    position: absolute;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(28%,-52%);
}

.container-jendela-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-jendela-last .JendelaLast{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(70%,5%);
}

.katalog-finish{
    position: absolute;
    height: 10%;
    width: 10%;
    transform: translate(100%, 160%);
}

.cont-tombol-finish .tulisan-katalog{
    position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 3.5vh;
    color: #466584;
    text-align: center;
    transform: translate(100%, 1200%);
}

.merch-finish{
    position: absolute;
    height: 10%;
    width: 10%;
    transform: translate(250%, 160%);
}

.cont-tombol-finish .tulisan-merch{
  position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 3.5vh;
    color: #466584;
    text-align: center;
    transform: translate(590%, 1200%);
}

.photobooth-finish{
    position: absolute;
    height: 10%;
    width: 10%;
    transform: translate(100%, 480%);
}

.cont-tombol-finish .tulisan-photobooth{
  position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 3.5vh;
    color: #466584;
    text-align: center;
    transform: translate(-31.5%, 2000%);
}

.gepsebelumnya-finish{
    position: absolute;
    height: 10%;
    width: 10%;
    transform: translate(250%,480%);
}

.cont-tombol-finish .tulisan-gep{
  position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 3.5vh;
    color: #466584;
    text-align: center;
    transform: translate(-31.5%, 1200%);
}

.homebutton-finish{
    position: absolute;
    height: 5%;
    width: 5%;
    transform: translate(20%, 150%);
}

.feedback-finish{
    position: absolute;
    height: 50%;
    width: 70%;
    transform: translate(0%, 0%);
    color:#466584;
}

.cont-tombol-finish .tulisan-feedback{
  position: absolute;
    font-family: Tf Grotesk;
    font-style: italic;
    font-weight: normal;
    font-size: 4vh;
    color: #ffffff;
}

</style>