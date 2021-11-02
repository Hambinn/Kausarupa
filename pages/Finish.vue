<template>
    <div class="container-finish">
      <div class="top-cont">
        <div class="canvas">
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
          <div class="container-jendela-last">
            <img src="../assets/svg/LastPage/jendela (1)-min.png" alt="" class="JendelaLast">
          </div>
          <div class="tulisan-btn-last">
            <transition name="trans-kat">
            <p class="kat">Katalog<br>Karya</p>
            </transition >
            <transition name="trans-mer">
            <p class="mer">Merch</p>
            </transition>
            <transition name="trans-pho">
            <p class="pho">Photobooth</p>
            </transition>
            <transition name="trans-gep">
            <p class="gep">GEP<br>Sebelumnya</p>
            </transition>
          </div>
          <div class="cont-tombol-finish">
              <img src="../assets/png/FinishPage/Last/katalog.png" class="katalog" @mouseover="showkat">
              <img src="../assets/png/FinishPage/Last/merch.png" class="merch">            
              <img src="../assets/png/FinishPage/Last/photobooth.png" class="photobooth">            
              <img src="../assets/png/FinishPage/Last/gep sebelumnya.png" class="sebelum">              
              <img src="../assets/png/FinishPage/home.png" class="home">              
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import TombolFinish from '../components/TombolFinish.vue'
        export default {
            components:{ TombolFinish },
            data(){
              return{
                kat:false,
                mer: false,
                pho: false,
                gep: false,
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
              }
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

.pho{
    position: absolute;
    font-family: Tf Grotesk-italic;
    font-weight: normal;
    font-size: 1.5vw;
    color: #466584;
    text-align: center;
    transform: translate(170%,2350%);
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

.cont-tombol-finish{
  position: absolute;
  height: 100%;
  width: 100%;
}


.katalog{
  position: absolute;
  height: 30%;
  transform: translate(-240%,60%);
}

.merch{
  position: absolute;
  height: 30%;
  transform: translate(-150%,60%);
}

.photobooth{
  position: absolute;
  height: 30%;
  transform: translate(-240%,165%);
}

.sebelum{
  position: absolute;
  height: 30%;
  transform: translate(-150%,165%);
}

.home{
  position: absolute;
  height: 7%;
  transform: translate(-1200%,150%);
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
    z-index: 1;
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
    z-index: 1;
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
    z-index: 2;
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
    z-index: 2;
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