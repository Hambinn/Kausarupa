<template>
    <div class="container-scroll-karya">
      <div class="top-cont">
        <div class="canvas">
            <div class="container-box-persona">
                <p class="text-box-persona">{{scorepersona}}</p>
                <img src="~/assets/png/PersonaPage/topeng score putih persona.png" alt="" class="topeng-score-persona">                    
          </div>
          <div class= "container-rumah">
              <img src="~assets/svg/PersonaPage/rumah oren kanan bawah.svg" alt="" class="rumahSK1">
              <img src="~assets/svg/PersonaPage/rumah oren kiri bawah.svg" alt="" class="rumahSK2">
          </div>
          <div class="container-awan">
              <img src="~assets/svg/PersonaPage/awan oren (1).svg" alt="" class="SK1">
              <img src="~assets/svg/PersonaPage/awan oren (1).svg" alt="" class="SK2">
              <img src="~assets/svg/PersonaPage/awan oren (1).svg" alt="" class="SK3">
          </div>
          <div class="container-header-persona">
                <img src="~/assets/svg/PersonaPage/header persona.svg" alt="" class="header-persona">
          </div>
          <div class="container-volume-persona">
                <img src="~/assets/png/umum/volumeon.png" alt="" class="volume-on" @click="changeMute" ref="volumeBtn">
            </div>
          <div class="container-back-persona">
                <img src="~/assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
          </div>
          <div class="scroll-karya">
              <karya-persona @toggle="showLayout = true" :arrkarya="arrkarya" :karyalength="karyalength" @changeId="ChangeId($event)" @tambahpersona="tambahpersona"/>
          </div>
        <!-- <layout-karya v-show="showLayout" @close-modal="showLayout = false" /> -->
        <layout-karya-persona-kine v-show="showLayout" @close-modal="showLayout = false" :title="title" :nama="nama" :caption="caption" :pdf="pdf" :karlength="karlength" />
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
        </div>
      </div>
    </div>
</template>

<script>
import karyaPersona from '@/components/Persona/karyaPersona.vue'
import LayoutKarya from '@/components/LayoutKarya.vue'

import LayoutKaryaPersonaKine from '../../components/Persona/layoutKaryaPersonaKine.vue'
    export default {
        components: { LayoutKarya, karyaPersona, LayoutKaryaPersonaKine},
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        data(){
            return{
                scorepersona: 0,
                showLayout: false,
                arrkarya: [],
                karyalength: 0,
                id: 0,
                title: '',
                nama:'',
                caption:'',
                pdf: [],
                karlength: 0,
                isVolume: true,
                audio: undefined,
                isAudioPlaying: false,
            }
        },
        methods:{
            async getThumbnail(){
                const karyaRef = this.$fire.firestore.collection('persona-kine').doc('thumbnail')
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
            back(){
                this.$router.push('/pilihkarya')
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
            ChangeId(id){
                this.id = id;
                if(id ==1){
                    this.title = 'Star Wars: Visions - Another Side of the Galaxy Far, Far Away'
                }else if(id ==2){
                    this.title = 'Ted Lasso: We Love Ted Lasso'
                }else if(id ==3){
                    this.title = 'Watchmen: Tulsa, Tudung, dan Tuhan'
                }else if(id ==4){
                    this.title = 'What a Way To Go: A Story Told in 73 Costumes'
                }
                this.getKarya()
            },
            async getKarya(){
                const allKarya = this.$fire.firestore.collection('persona-kine').doc(this.title)
                try{
                    const imgsrc = await allKarya.collection('Karya').doc('Kine').get() // fotonya
                    const datas = await allKarya.get() // datanya
                    this.title = datas.data().title
                    this.nama = datas.data().nama
                    this.caption = datas.data().caption 
                    this.pdf = Object.values(imgsrc.data())
                    this.karlength = this.pdf.length
                    console.log(this.id)
                    console.log(this.title)
                    console.log(this.nama)
                    console.log(this.caption)
                    console.log(this.pdf)
                }catch(e){
                    alert(e)
                    return
                }
            },
            tambahpersona(){
                if(localStorage.getItem('scorepersona')<15){
                    localStorage.setItem('scorepersona',Number(this.scorepersona+1))
                    this.scorepersona = Number(localStorage.getItem('scorepersona'))
                }
                console.log('masuk')
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
            this.getThumbnail();
            localStorage.setItem("persona",true)
            this.audio = new Audio('/sound/4. Karya dan milih karya Persona.mp3')
            this.audio.volume = 0.3
            this.audio.loop = true
            this.audio.currentTime = Number(localStorage.getItem('perduration'))
            this.playAudio()
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
    all: unset;
}
*{
    padding: 0;
    margin: 0;   
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

.scroll-karya{
    height: 100%;
    padding: 40px;
    transform: translate(0, 20%);
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

.container-scroll-karya{
    position: absolute;
    text-align: center;
    background-image: url("~assets/png/PersonaPage/Group 45 (2)-min.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
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

.container-back-persona .back{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
    z-index: 5;
    cursor: pointer;
}

.container-rumah{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-rumah .rumahSK2{
    position: absolute;
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-115%,-25%);
}

.container-rumah .rumahSK1{
    position: absolute;
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(140%,-40%);
    
}

.container-awan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awan .SK1{
    position: absolute;
    height: 35%;
    transform: translate(-70%,205%);
    
}

.container-awan .SK2{
    position: absolute;
    height: 50%;
    transform: translate(-110%,130%);
    
}

.container-awan .SK3{
    position: absolute;
    height: 55%;
    transform: translate(-10%,110%);
    
}



/* score */
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
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>