<template>
    <div class="container-pilihkaryap">
        <div class="top-cont-pk">
            <div class="canvas-pk">
                <div class="cont-mas-pk-persona">
                    <img src="~/assets/png/umum/persona 2.png" alt="">
                </div>
                <div class="container-rumahcoklat">
                    <img src="../assets/svg/PersonaPage/rumah coklat 1.svg" alt="" class="coklatsatu">
                    <img src="../assets/svg/PersonaPage/rumah coklat 2.svg" alt="" class="coklatdua">
                    <img src="../assets/svg/PersonaPage/rumah coklat 3.svg" alt="" class="coklattiga">
                </div>
                <div class="container-awankuning">
                    <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="satu">
                    <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="dua">
                </div>
                <div class="container-awanoren">
                    <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="satu">
                    <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="dua">
                    <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="tiga">
                </div>
                <div class="container-box-persona">
                    <p class="text-box-persona">{{scorepersona}}</p>
                    <img src="../assets/png/PersonaPage/topeng score putih persona.png" alt="" class="topeng-score-persona">                    
                </div>
                <div class="container-header-persona">
                    <img src="../assets/svg/PersonaPage/header persona.svg" alt="" class="header-persona">
                </div>
                <div class="container-back-narasipersona">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="container-volume-persona">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on" @click="changeMute" ref="volumeBtn">
                </div>
                <div class="text-persona-anim-cont">
                    <transition name="fotoper">
                    <p class="per-text-anim-foto" v-show="foto">Karya <br> Foto</p>
                    </transition>
                    <transition name="kineper">
                    <p class="per-text-anim-kine" v-show="kine">Karya <br> Kine</p>
                    </transition>
                    <transition name="videoper">
                    <p class="per-text-anim-video" v-show="video">Karya <br> Video</p>
                    </transition>
                </div>
                <div class= "container-rumahoren">
                    <img src="../assets/svg/PersonaPage/rumah oren 2.svg" alt="" class="orendua" @click="tokine" @mouseover="munculkine" @mouseleave="ilangkine">
                    <img src="../assets/svg/PersonaPage/rumah oren 3.svg" alt="" class="orentiga" @click="tovideo" @mouseover="munculvideo" @mouseleave="ilangvideo">
                    <img src="../assets/svg/PersonaPage/rumah oren 1.svg" alt="" class="orensatu" @click="tofoto" @mouseover="munculfoto" @mouseleave="ilangfoto">
                </div>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import rcp from '../components/rcp.vue'
        export default{
  components: { rcp },
            data(){
                return{
                    scorepersona :0,
                    foto: false,
                    video: false,
                    kine: false,
                    isVolume: true,
                    audio: undefined,
                    isAudioPlaying: false,
                    
                }
            },
            mounted(){
                this.audio = new Audio('/sound/4. Karya dan milih karya Persona.mp3')
                this.audio.volume = 0.3
                this.audio.loop = true
                this.audio.currentTime = Number(localStorage.getItem('perduration'))
                this.playAudio()
            },
            methods:{
                back(){
                    this.$router.push('/narasipersona')
                },
                volume(){
                       this.isVolume = !this.isVolume
            if(this.isVolume){
                this.$refs.volumeBtn.src = require('../assets/png/umum/volumeon.png')
            }else{
                this.$refs.volumeBtn.src = require('../assets/png/umum/volumeoff.png')
            }
                },
                tofoto(){ 
                    this.$router.push('Persona/fotoPersona')
                },
                tokine(){
                    this.$router.push('Persona/kinePersona')
                },
                tovideo(){
                    this.$router.push('Persona/videoPersona')
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
            beforeMount(){
            if(!localStorage.getItem('scorepersona')){
                localStorage.setItem('scorepersona', 0)
            }
            else{
                this.scorepersona = Number(localStorage.getItem('scorepersona'))
            }
            },
            beforeDestroy(){
            this.audio.pause()
            localStorage.setItem('perduration',this.audio.currentTime)
            }
        }
</script>

<style>

html,body{
    margin: 0;
}


*{
    padding: 0;
    margin: 0;
        
}



.text-persona-anim-cont{
    position: absolute;
    height: 100%;
    width: 100%;
    font-family: Tf Grotesk;
    font-size: 2.3vw;
    color: #BE5B38;
}

.per-text-anim-foto{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-130%,-180%);
}

.per-text-anim-kine{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(540%,-270%);
}

.per-text-anim-video{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-280%,230%);
}

.fotoper-enter-active, .fotoper-leave-active{
    transition: all .5s ease;
}

.fotoper-enter, .fotoper-leave-to{
    opacity: 0;
    transform: translate(-130%, 0%);
}

.kineper-enter-active, .kineper-leave-active{
    transition: all .5s ease;
}

.kineper-enter, .kineper-leave-to{
    opacity: 0;
    transform: translate(540%, 0%);
}

.videoper-enter-active, .videoper-leave-active{
    transition: all .5s ease;
}

.videoper-enter, .videoper-leave-to{
    opacity: 0;
    transform: translate(-280%,0%);
}







/* #################################################### */

.cont-mas-pk-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.cont-mas-pk-persona img{
    position: absolute;
    height: 30%;
    transform: translate(-190%,215%);
}

.container-pilihkaryap{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/PersonaPage/backgroudn umum persona.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.top-cont-pk{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 56.25%;
}

.canvas-pk{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.container-header-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-persona .header-persona{
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-150%, 90%);
}

.container-back-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-narasipersona .back{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-volume-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-persona .volume-on{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-box-persona{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-persona .text-box-persona{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-persona .topeng-score-persona{
    width: 25%;
    top: 50%;
    left: 50%;
    transform: translate(-90%, 10%);
}

.container-awankuning{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awankuning .satu{
    position: absolute;
    height: 25%;
    transform: translate(-200%, 150%);
}

.container-awankuning .dua{
    position: absolute;
    transform: translate(30%,180%);
    height: 25%;
    z-index: 2;
}

.container-awanoren{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awanoren .satu{
    position: absolute;
    height: 28%;
    transform: translate(-100%,120%);
    z-index: 1;
}

.container-awanoren .dua{
    position: absolute;
    height: 27%;
    transform: translate(-70%, 250%);
    z-index: 1;
}

.container-awanoren .tiga{
    position: absolute;
    height: 22%;
    transform: translate(-5%, 45%);
    z-index: 1;
}

.container-rumahoren{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-rumahoren .orensatu{
    position: absolute;
    height: 50%;
    width: 50%;
    transform: translate(-100%,20%);
}

.container-rumahoren .orensatu:hover{
    height: 60%;
    transform: translate(-100%, 0%);
    cursor: pointer;
}

.container-rumahoren .orendua{
    position: absolute;
    height: 45%;
    width: 45%;
    transform: translate(0%, 25%);
    z-index: 3;
}
.container-rumahoren .orendua:hover{
    height: 55%;
    transform: translate(0%,5%);
    cursor: pointer;
}


.container-rumahoren .orentiga{
    position: absolute;
    height: 60%;
    width: 60%;
    transform: translate(-55%, 62%);
}

.container-rumahoren .orentiga:hover{
    height: 70%;
    transform: translate(-55%,45%);
    cursor: pointer;
}

.container-rumahcoklat{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-rumahcoklat .coklatsatu{
    position: absolute;
    height: 25%;
    width: 25%;
    transform: translate(-210%, 198%);
    z-index: 3;
}

.container-rumahcoklat .coklatdua{
    position: absolute;
    height: 25%;
    width: 25%;
    transform: translate(12%, 250%);
}

.container-rumahcoklat .coklattiga{
    position: absolute;
    height: 38%;
    width: 38%;
    transform: translate(35%, 85%);
}

</style>