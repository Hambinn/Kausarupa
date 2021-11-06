<template>
    <div class="bg-skshadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-skshadow">
                    <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header-skshadow">
                </div>
                <div class="container-back-pkshadow">
                    <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back-pkshadow" @click="back">
                </div>
                <div class="scroll-karya">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/kanan atas (2).png" alt="" class="kan-tas">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/kanan bawah.png" alt="" class="kan-baw">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/tangga.png" alt="" class="tangga">                
                </div>
                <div class="container-box-skshadow">
                    <p class="text-box-skshadow">{{scoreshadow}}</p>
                    <img src="~/assets/png/ShadowPage/topeng score putih shadow.png" alt="" class="score-skshadow">                    
                </div>                
                <div class="container-volume-pkshadow">
                    <img src="~/assets/png/umum/volumeon.png" alt="" class="volume-shadow2" @click="changeMute" ref="volumeBtn" >
                </div>
            <div class="scroll-karya-fotoshadow">
              <karya-shadow-video @toggle="showLayout = true" :arrkarya="arrkarya" :karyalength="karyalength" @changeId="ChangeId($event)" @tambahshadow="tambahshadow"/>
            </div>
            <layout-karya-shadow-video v-show="showLayout" @close-modal="showLayout = false" :title="title" :nama="nama" :caption="caption" :vid="vid" :karlength="karlength" />
            </div>
        </div>
    </div>
</template>
<script>
import karyaShadowVideo from '@/components/Shadow/karyaShadowVideo.vue'
import LayoutKaryaShadowVideo from '@/components/Shadow/layoutKaryaShadowVideo.vue'
    export default {
        components: {karyaShadowVideo, LayoutKaryaShadowVideo},
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        data(){
            return{
                scoreshadow: 0,
                showLayout: false,
                arrkarya: [],
                karyalength: 0,
                id: 0,
                title: '',
                nama:'',
                caption:'',
                vid: [],
                karlength: 0,
                isVolume: true,
                audio: undefined,
                isAudioPlaying: false,
            }
        },
        methods:{
            async getThumbnail(){
                const karyaRef = this.$fire.firestore.collection('shadow-video').doc('thumbnail')
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
                this.$router.push('/pilihkaryashadow')
            },
            ChangeId(id){
                this.id = id;
                if(id ==1){
                    this.title = 'I Feel Like Leaving'
                }else if(id ==2){
                    this.title = 'Umbra'
                }else if(id ==3){
                    this.title = 'Kalibut Tiga Babak'
                }
                this.getKarya()
            },
            async getKarya(){
                const allKarya = this.$fire.firestore.collection('shadow-video').doc(this.title)
                try{
                    const imgsrc = await allKarya.collection('Karya').doc('Video').get() // fotonya
                    const datas = await allKarya.get() // datanya
                    this.title = datas.data().title
                    this.nama = datas.data().nama
                    this.caption = datas.data().caption
                    this.vid = Object.values(imgsrc.data())
                    this.karlength = this.vid.length
                    console.log(this.id)
                    console.log(this.title)
                    console.log(this.nama)
                    console.log(this.caption)
                    console.log(this.vid)
                }catch(e){
                    alert(e)
                    return
                }
            },
            tambahshadow(){
                if(localStorage.getItem('scoreshadow')<22){
                    localStorage.setItem('scoreshadow',Number(this.scoreshadow+1))
                    this.scoreshadow = Number(localStorage.getItem('scoreshadow'))
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
            localStorage.setItem("shadow",true)
            this.audio = new Audio('/sound/8. Karya dan milih karya Mamus.wav')
            this.audio.volume = 0.2
            this.audio.loop = true
            this.audio.currentTime = Number(localStorage.getItem('dowduration'))
            this.playAudio()
        },
        beforeMount(){
            if(!localStorage.getItem('scoreshadow')){
                localStorage.setItem('scoreshadow', 0)
            }
            else{
                this.scoreshadow = Number(localStorage.getItem('scoreshadow'))
            }
        },
        beforeDestroy(){
        this.audio.pause()
        localStorage.setItem('dowduration',this.audio.currentTime)
        }

    }
</script>
<style>
*{
    padding: 0;
    margin: 0;
}

.scroll-karya-fotoshadow{
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

.bg-skshadow{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/ShadowPage/main bg shadow.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-skshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-skshadow .header-skshadow{
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-155%, 80%);
}

.container-back-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
    
}

.container-back-pkshadow .back-pkshadow{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -510%);
    z-index: 5;
    cursor: pointer;
}

.scroll-karya{
    position: absolute;
    height: 100%;
    width: 100%;
}

.scroll-karya .kan-tas{
    height: 45%;
    top: 50%;
    left: 50%;
    transform: translate(199%,11%)
}

.scroll-karya .kan-baw{
    height: 43%;
    top: 50%;
    left: 50%;
    transform: translate(67%,113%)
}

.scroll-karya .tangga{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-14%,-46%)
}

.container-volume-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-pkshadow .volume-shadow2{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-box-skshadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-skshadow .text-box-skshadow{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-skshadow .score-skshadow{
    width: 38%;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -14%);
}

.tombol-next-skshadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);

    background: #597FA3;
    border-radius: 11.4%/38.4%;
    z-index: 1;
}

.tombol-next-skshadow .next-skshadow{
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