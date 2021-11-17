<template>
    <div class="bg-narasi-last">
        <div class="top-cont">
            <div class="canvas">
                <div class="cont-mas-nar-last">
                    <img src="~/assets/png/umum/mamus berdiri.png" alt="">
                </div>
                <div class="container-back-last">
                    <img src="../assets/png/FinishPage/keyboard_backspace.png" alt="" class="back" @click="back">
                </div>
                <div class="container-sound-last">
                    <img src="../assets/png/FinishPage/sound on.png" alt="" class="sound-on" @click="changeMute" ref="volumeBtn">
                </div>                
                <div class="container-kotak-last">
                    <kotak-last/>
                </div>
                <div class="container-jendela-last">
                    <img src="../assets/png/FinishPage/Narasi/jendela (3).png" alt="" class="jendela-biru">
                </div>
                <div class="container-foto-last">
                    <img src="../assets/png/FinishPage/Narasi/foto.png" alt="" class="foto-abu">
                </div>                
                <div class="container-kasur-last">
                    <img src="../assets/png/FinishPage/Narasi/kasur.png" alt="" class="kasur-biru">
                </div>                
                <div class="tombol-next-last" @click="next">
                    <p class="next-last">Next</p>
                </div>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import kotakLast from '../components/Last/kotakLast.vue'
import Rcp from '../components/rcp.vue'
    export default {
        middleware: "red",
  components: { kotakLast, Rcp },
  methods:{
      next(){
          this.$router.push('/suratlastpage')
      },
      back(){
          this.$router.push('/topeng')
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
            volume(){
                this.isVolume = !this.isVolume
                if(this.isVolume){
                    this.$refs.volumeBtn.src = require('../assets/png/umum/volumeon.png')
                }else{
                    this.$refs.volumeBtn.src = require('../assets/png/umum/volumeoff.png')
                }
            },
      },
      data(){
          return{
                isVolume: true,
                audio: undefined,
                isAudioPlaying: false,
          }
      },
      mounted(){
            this.audio = new Audio('/sound/9. Narasi Self.mp3')
            this.audio.volume = 0.4
            this.audio.loop = true
            this.playAudio()
      },
      beforeDestroy(){
        this.audio.pause()
        this.audio.currentTime = 0
        }
        
}
</script>

<style>
html,body{
    all: unset;
    margin: 0;
    padding: 0;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
}

*{
    padding: 0;
    margin: 0;
}

.tombol-next-last{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);
    z-index: 5;
    background: #597FA3;
    border-radius: 11.4%/38.4%;
    cursor: pointer;
}

.tombol-next-last .next-last{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.1vw;
    color: white;
}


.cont-mas-nar-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.cont-mas-nar-last img{
    position: absolute;
    height: 65%;
    transform: translate(75%,45%);
    z-index: 2;
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

.bg-narasi-last{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/FinishPage/bg umum last page.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-jendela-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-jendela-last .jendela-biru{
    width: 37.4%;
    top: 50%;
    left: 50%;
    transform: translate(-84%, 9%);
}

.container-foto-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-foto-last .foto-abu{
    width: 22.4%;
    top: 50%;
    left: 50%;
    transform: translate(80%, -20%);
}

.container-kasur-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kasur-last .kasur-biru{
    width: 37%;
    top: 50%;
    left: 50%;
    transform: translate(85.2%, 65.5%);
}

.container-back-last{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
}

.container-back-last .back{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
    cursor: pointer;
}

.container-sound-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-sound-last .sound-on{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    cursor: pointer;
    z-index: 5;
}

</style>