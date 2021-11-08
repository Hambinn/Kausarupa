<template>
    <div class="bg-karya-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-asep-mamus">
                    <img src="~assets/gif/asep pink.GIF" alt="" class="asep-1">
                    <img src="~assets/gif/asep.GIF" alt="" class="asep-2">
                </div>
                <div class="container-bg-element">
                    <img src="~assets/png/MamusPage/3. scroll/kanan.png" alt="" class="kanan">
                    <img src="~assets/png/MamusPage/3. scroll/kiri.png" alt="" class="kiri">
                </div>
                <div class="container-box-mamus">
                    <p class="text-box-mamus">{{scoremamus}}</p>
                    <img src="~assets/png/MamusPage/topeng score putih mamus.png" alt="" class="topeng-score-mamus">                    
                </div>   
                <div class="container-header-mamus">
                    <img src="~/assets/png/MamusPage/header mamus.png" alt="" class="header-mamus">
                </div>
                <div class="container-back-mamuskarya">
                    <img src="~/assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="container-volume-mamus">
                    <img src="~/assets/png/umum/volumeon.png" alt="" class="volume-on" @click="changeMute" ref="volumeBtn">
                </div>
                <div class="scroll-karya-mamus">
                    <karya-mamus-kine @toggle="showLayout = true" :arrkarya="arrkarya" :karyalength="karyalength" @changeId="ChangeId($event)" @tambahmamus="tambahmamus"/>
                </div>
                    <layout-karya-mamus-kine v-show="showLayout" @close-modal="showLayout = false" :title="title" :nama="nama" :caption="caption" :pdf="pdf" :karlength="karlength"/>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import karyaMamusKine from '../../components/Mamus/karyaMamusKine.vue'
import layoutKaryaMamusKine from '../../components/Mamus/layoutKaryaMamusKine.vue'
import Rcp from '../../components/rcp.vue'
    export default {
  components: { layoutKaryaMamusKine, karyaMamusKine, Rcp },
        methods:{
            back(){
                this.$router.push('/pilihkaryamamus')
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
            async getThumbnail(){
                const karyaRef = this.$fire.firestore.collection('mamus-kine').doc('thumbnail')
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
            ChangeId(id){
                this.id = id;
                if(id ==1){
                    this.title = 'Feminism and Cat'
                }
                else if(id ==2){
                    this.title = 'Gone Girl'
                }else if( id == 3){
                    this.title = 'Review Hospital Playlist S2'
                }else if(id == 4){
                    this.title = 'Review: The Handmaiden'
                }else if (id == 5){
                    this.title = 'Yuni: Perempuan dalam Empak Babat'
                }else if(id == 6){
                    this.title = '“How have I ever deserved such love” - The Danish Girl'
                }
                this.getKarya()
            },
            async getKarya(){
                const allKarya = this.$fire.firestore.collection('mamus-kine').doc(this.title)
                try{
                    const kine = await allKarya.collection('Karya').doc('Kine').get() // fotonya
                    const datas = await allKarya.get() // datanya
                    this.title = datas.data().title
                    this.nama = datas.data().nama
                    this.caption = datas.data().caption
                    this.pdf = Object.values(kine.data())
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
            tambahmamus(){
                if(localStorage.getItem('scoremamus')<16){
                    localStorage.setItem('scoremamus',Number(this.scoremamus+1))
                    this.scoremamus = Number(localStorage.getItem('scoremamus'))
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
        data(){
            return{
                scoremamus: 0,
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
        mounted(){
            this.getThumbnail();
            localStorage.setItem("mamus",true)
            this.audio = new Audio('/sound/8. Karya dan milih karya Mamus.wav')
            this.audio.volume = 0.2
            this.audio.loop = true
            this.audio.currentTime = Number(localStorage.getItem('mamduration'))
            this.playAudio()
        },
        beforeMount(){
            if(!localStorage.getItem('scoremamus')){
                localStorage.setItem('scoremamus', 0)
            }
            else{
                this.scoremamus = Number(localStorage.getItem('scoremamus'))
            }
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


.scroll-karya-mamus{
    height: 100%;
    padding: 40px;
    transform: translate(2%, 16.8%);
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

.container-back-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-mamuskarya .back{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -520%);
    z-index: 2;
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

.container-header-mamus .back{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1450%, 90%);
}

.container-bg-element{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-bg-element .kanan{
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(168%, 20%);
}

.container-bg-element .kiri{
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-165%, 18%);
}

.container-asep-mamus{
    position: absolute;
    height: 100%;
    width: 100%; 
}

.container-asep-mamus .asep-1{
    height: 30%;
    top: 50%;
    left: 50%;
    transform: rotate(180deg) translate(0%, -200%);
}

.container-asep-mamus .asep-2{
    height: 30%;
    top: 50%;
    left: 50%;
    transform:translate(0%, 30%);
}   

.tombol-next-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);
    z-index: 1;
    background: #597FA3;
    border-radius: 11.4%/38.4%;
}

.tombol-next-mamus .next-mamus{
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
</style>