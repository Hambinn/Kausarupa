<template>
    <div class="bg-karya-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="cont-mas-nar-mamus">
                    <img src="~/assets/png/umum/mamus msct peace copy.png" alt="">
                </div>
                <div class="container-header-mamus">
                    <img src="../assets/png/MamusPage/header mamus.png" alt="" class="header-mamus">
                </div>      
                <div class="container-bg-element">
                    <img src="../assets/png/MamusPage/2. pilih/atas.png" alt="" class="atas">
                    <img src="../assets/png/MamusPage/2. pilih/bawah.png" alt="" class="bawah">
                </div>
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="container-volume-mamus">
                    <img src="~/assets/png/umum/volumeon.png" alt="" class="volume-on" @click="changeMute" ref="volumeBtn">
                </div>
                <div class="pilih-tema-mamus">
                    <img src="../assets/png/MamusPage/2. pilih/king.png" alt="" class="king" @click="toVideo" @mouseover="munculvideo" @mouseleave="ilangvideo">
                    <img src="../assets/png/MamusPage/2. pilih/kq.png" alt="" class="kq" @click="toKine" @mouseover="munculkine" @mouseleave="ilangkine">
                    <img src="../assets/png/MamusPage/2. pilih/queen.png" alt="" class="queen" @click="toFoto" @mouseover="munculfoto" @mouseleave="ilangfoto">
                </div>
                <div class="text-mamus-anim-cont">
                    <transition name="fotomam">
                    <p class="mam-text-anim-foto" v-show="foto">Karya Foto</p>
                    </transition>
                    <transition name="kinemam">
                    <p class="mam-text-anim-kine" v-show="kine">Karya Kine</p>
                    </transition>
                    <transition name="videomam">
                    <p class="mam-text-anim-video" v-show="video">Karya Video</p>
                    </transition>
                </div>
                <div class="container-box-mamus">
                    <p class="text-box-mamus">{{scoremamus}}</p>
                    <img src="../assets/png/MamusPage/topeng score putih mamus.png" alt="" class="topeng-score-mamus">                    
                </div>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import rcp from '../components/rcp.vue'
    export default {
        
  components: { rcp },
        data(){
            return{
                scoremamus: '0',
                foto: false,
                video: false,
                kine: false,
                isVolume: true,
                audio: undefined,
                isAudioPlaying: false,
            }
        },
        methods:{
            toKine(){
                this.$router.push('/Mamus/kineMamus')
            },
            toVideo(){
                this.$router.push('/Mamus/videoMamus')
            },
            toFoto(){
                this.$router.push('/Mamus/fotoMamus')
            },
            back(){
                this.$router.push('/narasimamus')
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
                    this.$refs.volumeBtn.src = require('~/assets/png/umum/volumeon.png')
                    console.log('masuk on')
                }else{
                    this.$refs.volumeBtn.src = require('~/assets/png/umum/volumeoff.png')
                    console.log('masuk off')
                }
                },
            munculfoto(){
                this.foto = true
            },
            ilangfoto(){
                this.foto = false
            },

            munculkine(){
                this.kine = true
            },
            ilangkine(){
                this.kine = false
            },

            munculvideo(){
                this.video = true
            },
            ilangvideo(){
                this.video = false
            },
        },
        beforeMount(){
            if(!localStorage.getItem('scoremamus')){
                localStorage.setItem('scoremamus', 0)
            }
            else{
                this.scoremamus = Number(localStorage.getItem('scoremamus'))
            }
        },
        mounted(){
            this.audio = new Audio('/sound/8. Karya dan milih karya Mamus.wav')
            this.audio.volume = 0.2
            this.audio.loop = true
            this.audio.currentTime = Number(localStorage.getItem('mamduration'))
            this.playAudio()
        },
        beforeDestroy(){
        this.audio.pause()
        localStorage.setItem('mamduration',this.audio.currentTime)
        }
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.text-mamus-anim-cont{
    position: absolute;
    height: 100%;
    width: 100%;
    font-family: Tf Grotesk;
    font-size: 2.3vw;
}

.mam-text-anim-foto{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-360%,-480%) rotate(-10deg);
    color: #883c8f;
    z-index: 99;
}

.mam-text-anim-kine{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-170%,-500%) rotate(6deg);
    color: #3f479c;
    z-index: 99;
}

.mam-text-anim-video{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%,-350%) rotate(-10deg);
    color: #462C85;
    z-index: 99;
}

.fotomam-enter-active, .fotomam-leave-active{
    transition: all .5s ease;
}

.fotomam-enter, .fotomam-leave-to{
    opacity: 0;
    transform: translate(-360%, 0%);
}

.kinemam-enter-active, .kinemam-leave-active{
    transition: all .5s ease;
}

.kinemam-enter, .kinemam-leave-to{
    opacity: 0;
    transform: translate(-170%, 0%);
}

.videomam-enter-active, .videomam-leave-active{
    transition: all .5s ease;
}

.videomam-enter, .videomam-leave-to{
    opacity: 0;
    transform: translate(-20%,0%);
}


.cont-mas-nar-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.cont-mas-nar-mamus img{
    position: absolute;
    height: 60%;
    transform: translate(100%,60%);
    z-index: 5;
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

.bg-karya-mamus{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/MamusPage/background mamus.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-mamus .header-mamus{
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-85%, 70%);
}

.container-volume-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-mamus .volume-on{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-box-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-mamus .text-box-mamus{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-mamus .topeng-score-mamus{
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-33%, -28%);
}

.container-back-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-mamus .back{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-bg-element{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bg-element .atas{
    height: 25.2%;
    top: 50%;
    left: 50%;
    transform: translate(50%, 15%);
}

.container-bg-element .bawah{
    height: 72.8%;
    top: 50%;
    left: 50%;
    transform: translate(13%, -4%);
}

.pilih-tema-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
    
}

.pilih-tema-mamus .king{
    position: absolute;
    height: 62%;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -25%);
    z-index: 5;
    
}

.king:hover{
    cursor: pointer;
    z-index: 10;
}

.pilih-tema-mamus .kq{
    position: absolute;
    height: 68%;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -32%);
    z-index: 5;
}

.kq:hover{
    cursor: pointer;
    z-index: 10;
}

.pilih-tema-mamus .queen{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-158%, -32%);
    z-index: 5;
    
}

.queen:hover{
    cursor: pointer;
    z-index: 10;
    
}
</style>