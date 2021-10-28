<template>
    <div class="container-scroll-karya">
      <div class="top-cont">
        <div class="canvas">
            <div class="score">   
            <div class="container-box">
              <div class="container-text-box">
                {{score}}
              </div>
              <img src="~assets/svg/PersonaPage/topeng score.svg" alt="" class="topeng-score">
            </div>
          </div>
          <div class="tombol-next-persona">
            <p class="next-persona">Next</p>
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
          <div class="container-header">
            <img src="~assets/svg/PersonaPage/header persona.svg" alt="" class="header">
            <img src="~assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back()">
          </div>
          <div class="scroll-karya">
              <karya-persona @toggle="showLayout = true" :arrkarya="arrkarya" :karyalength="karyalength" @changeId="ChangeId($event)"/>
          </div>
        <!-- <layout-karya v-show="showLayout" @close-modal="showLayout = false" /> -->
        <layout-karya-persona v-show="showLayout" @close-modal="showLayout = false" :title="title" :nama="nama" :caption="caption" :img="img" :karlength="karlength" />
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
        </div>
      </div>
    </div>
</template>

<script>
import karyaPersona from '@/components/Persona/karyaPersona.vue'
import LayoutKarya from '@/components/LayoutKarya.vue'
import LayoutKaryaPersona from '@/components/Persona/layoutKaryaPersona.vue'
    export default {
        components: { LayoutKarya, karyaPersona, LayoutKaryaPersona},
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        data(){
            return{
                score: 0,
                showLayout: false,
                arrkarya: [],
                karyalength: 0,
                id: 0,
                title: '',
                nama:'',
                caption:'',
                img: [],
                karlength: 0
            }
        },
        methods:{
            async getThumbnail(){
                const karyaRef = this.$fire.firestore.collection('persona-foto').doc('thumbnail')
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
            ChangeId(id){
                this.id = id;
                if(id ==1){
                    this.title = 'Beauty Rots'
                }else if(id ==2){
                    this.title = 'Bersiap'
                }else if(id ==3){
                    this.title = 'Blue Lights'
                }else if(id ==4){
                    this.title = 'Hidden Beauty.'
                }else if(id ==5){
                    this.title = 'PERSONA'
                }else if(id ==6){
                    this.title = 'Transformasi'
                }else if(id == 7){
                    this.title = 'Type of Smiles'
                }else if(id ==8){
                    this.title = 'Warm and Cold'
                }else if(id ==9){
                    this.title = 'Who Am I'
                }else if(id ==10){
                    this.title = 'Whole Emotion at Once'
                }
                this.getKarya()
            },
            async getKarya(){
                const allKarya = this.$fire.firestore.collection('persona-foto').doc(this.title)
                try{
                    const imgsrc = await allKarya.collection('Karya').doc('Foto').get() // fotonya
                    const datas = await allKarya.get() // datanya
                    this.title = datas.data().title
                    this.nama = datas.data().nama
                    this.caption = datas.data().caption
                    this.img = Object.values(imgsrc.data())
                    this.karlength = this.img.length
                    console.log(this.id)
                    console.log(this.title)
                    console.log(this.nama)
                    console.log(this.caption)
                    console.log(this.img)
                }catch(e){
                    alert(e)
                    return
                }
            }
        },
        mounted(){
            this.getThumbnail();
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

.container-header{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header .header{
    height: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-180%,70%);
}

.container-header .back{
    height: 6%;
    top: 50%;
    left: 50%;
    transform: translate(-1600%,60%);
    z-index: 4;
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
    z-index: 2;
}

.container-rumah .rumahSK1{
    position: absolute;
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(140%,-40%);
    z-index: 1;
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
    z-index: 1;
}

.container-awan .SK2{
    position: absolute;
    height: 50%;
    transform: translate(-110%,130%);
    z-index: 3;
}

.container-awan .SK3{
    position: absolute;
    height: 55%;
    transform: translate(-10%,110%);
    z-index: 2;
}

.tombol-next-persona{
    position: fixed;
    height: 6.5%;
    width: 13%;
    transform: translate(630%, 1300%);

    background: #597FA3;
    border-radius: 35px;
    z-index: 3;
}

.tombol-next-persona .next-persona{
    position: absolute;
    width: 116%;
    height: 60%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-70%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3vw;
/* identical to box height */

color: #fff;
}

/* score */
.score-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-box{
    position: absolute;
    height: 6%;
    width: 13%;
    background-color: #33485C;
    transform: translate(630%, 160%);
    border-radius: 50px;
}

.container-box .topeng-score{
    position: fixed;
    height: 90%;
    transform: translate(-160%, -100%);
}

.container-text-box{
    font-size: 3vw;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>