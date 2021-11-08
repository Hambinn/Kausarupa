<template>
    <div class="bg-skor-surat">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-surat">
                    <img src="../assets/png/FinishPage/Surat/amplop.png" alt="" class="surat">
                </div>
                <div class="container-kertas">
                    <img src="../assets/png/FinishPage/Surat/kertas.png" alt="" class="kertas">
                </div>
                <div class="container-pena">
                    <img src="../assets/png/FinishPage/Surat/pena.png" alt="" class="pena">
                </div>                
                <div class="container-volume-surat">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on" @click="changeMute" ref="volumeBtn">
                </div>
                <div class="container-tinta">
                    <img src="../assets/png/FinishPage/Surat/tint.png" alt="" class="tinta">
                </div>
                <div class="container-back-surat">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="tombol-next-last" @click="next">
                    <p class="next-last">Next</p>
                </div>
                <div class="container-isi-surat">
                    <p class="judul-surat">Outro</p>
                    <p class="isi-surat">Melalui penjelajahan diri lewat persona, shadow, anima/animus, serta self sampailah kita di titik akhir perjalanan. Berbagai karya telah menjadi gambaran akan beragam karakter yang ditunjukkan, maupun tak ditunjukkan pada dunia. Setelah melalui penjelajahan karya ini, ayo tuliskan perasaanmu dalam Majalah dinding GEP di <mark @click="miro">Bit.ly/MadingKausarupa</mark> ! jangan lupa tinggalkan jejak ya!
                    </p>
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
        methods:{
            back(){
                this.$router.push('/narasilastpage')
            },
            next(){
                this.$router.push('/finish')
            },
            miro(){
                window.open("https://miro.com/welcomeonboard/NExubDk2Q0FSc2E4SlJCNDdYVGN3STliUHE3SHVjNnVNcUdZQWhsWXZKVDNYSXhoc2djZVJxQVFEYVNEZXhxaHwzMDc0NDU3MzY2OTYxMjg5OTI1?invite_link_id=61924221316")
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
            this.audio = new Audio('/sound/10. Outro [surat cinta].wav')
            this.audio.volume = 0.3
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

mark{
    all: unset;
    text-decoration: underline;
}

mark:hover{
    cursor: pointer;
    color: #597FA3;
    
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

.bg-skor-surat{
    position: absolute;
    text-align: center;
    background-image: url("..\assets\png\FinishPage\Surat\background surat-min (1).png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }


.container-back-surat{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-surat .back{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -500%);
    cursor: pointer;
    z-index: 5
}

.container-volume-surat{
    position: absolute;
    height: 100%;
    width: 100%;
}
.container-volume-surat .volume-on{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-surat{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-surat .surat{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-56.5%, 5%);
}

.container-kertas{
    position: absolute;
    height: 100%;
    width: 100%;    
}

.container-kertas .kertas{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-1%, 8.5%);
}

.container-pena{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-pena .pena{
    height: 87%;
    top: 50%;
    left: 50%;
    transform: translate(105%, 8%);
}

.container-tinta{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-tinta .tinta{
    height: 28%;
    top: 50%;
    left: 50%;   
    transform: translate(-200%, 230%);
}

.container-isi-surat{
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: Tf Grotesk;
    font-weight: lighter;
}

.container-isi-surat .judul-surat{
    font-size: 4vw;
    transform: translate(-2%,330%);
}

.container-isi-surat .isi-surat{
    margin: 13% 37%;
    font-size: 1.3vw;
    transform: translate(-4%,30%);
}
</style>