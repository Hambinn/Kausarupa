<template>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    <div class="container-main">
      <div class="top-cont">
        <div class="canvas">
            <div class="container-sound-last">
            <img src="../assets/png/FinishPage/sound on.png" alt="" class="sound-on" @click="changeMute" ref="volumeBtn">
          </div>
          <div class="container-bulan">
            <img src="../assets/svg/MainPage/bulan.svg" alt="" class="oren">
          </div>
          <div class="container-kelinci">
            <img src="../assets/svg/MainPage/kelinci.svg" alt="" class="oren">
          </div>
          <div class="container-saturnus">
            <img src="../assets/svg/MainPage/saturnus.svg" alt="" class="ungu">
          </div>
          <div class="container-lolipop">
            <img src="../assets/svg/MainPage/lolipop.svg" alt="" class="ungu">
          </div>
          <div class="container-kamera">
            <img src="../assets/svg/MainPage/kamera.svg" alt="" class="ungu">
          </div>
          <div class="container-ikan">
            <img src="../assets/svg/MainPage/ikan oren.svg" alt="" class="oren">
            <img src="../assets/svg/MainPage/ikan ungu.svg" alt="" class="ungu">
          </div>
          <div class="container-pita">
            <img src="../assets/svg/MainPage/pita.svg" alt="" class="oren">
          </div>
          <div class="container-permen">
            <img src="../assets/svg/MainPage/permen.svg" alt="" class="oren">
          </div>
          <div class="container-text-middle-title">
            Intro
          </div>
          <div class="container-text-middle">
            Saka terbangun di malam penuh gemerlap bintang. Namun, badannya masih menempel pada kasur. Oh, sepertinya ia mengalami lucid dream. 
            <br> <br>
            Kerlap-kerlip bintang membuat Saka ingin meraih benda itu. Oh! ternyata ia bisa meraihnya. Hmmm mungkin ia bisa mengumpulkan bintang dahulu sebelum lanjut menjelajahi berbagai sisi dari manusia!
            <br> <br>
            Oiya, jika sudah selesai mengumpulkan bintang, jangan lupa  mencari portal dan pindahkan saka kedalamnya untuk menuju petualangan menarik selanjutnya!
          </div>
          <div class="container-segitiga">
            <img src="../assets/svg/MainPage/segitiga.svg" alt="" class="ungu">
          </div>
          <div class="container-penggaris">
            <img src="../assets/svg/MainPage/penggaris.svg" alt="" class="ungu">
          </div>
          <div class="container-ubur">
            <img src="../assets/svg/MainPage/ubur-ubur.svg" alt="" class="oren">
          </div>
          <div class="container-permen-bungkus">
            <img src="../assets/svg/MainPage/permen lagi.svg" alt="" class="oren">
          </div>
          <div class="container-papan">
            <img src="../assets/svg/MainPage/papan.svg" alt="" class="papan">
          </div>
          <div class="container-awan-main">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="bawah-permen">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="bawah-papan">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="belakang-kasur">
          </div>
          <div class="container-kasur">
            <img src="../assets/svg/MainPage/kasur.svg" alt="" class="kasur">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="depan-kasur1">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="depan-kasur2">
          </div>
          <div class="svg-container">
            <img src="../assets/png/MainPage/lubang revisi.png" alt="" class="lubang" />
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" class="lubang-atas" alt="">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" class="lubang-bawah" alt="">
            <img src="../assets/png/MainPage/mascot tidur + light.png" alt="" class="orang" />
          </div>
          <div class="container-bintang-putih" v-for="star in stars" :key="star.id">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" :class="star.class" class="bintank"
              @click="countBintang(star.id); " :style="star.opac">
          </div>
        </div>
      </div>
      <div class="score">
        <div class="container-box">
          <div class="container-text-box">
            {{score}}
          </div>
          <img src="../assets/svg/MainPage/bintang-item.svg" alt="" class="oren">
        </div>
      </div>
      <rcp/>
    </div>
</template>

<script>
import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable"
import rcp from '../components/rcp.vue';
if (process.client) {
  gsap.registerPlugin(Draggable);
}
    export default {
  components: { rcp },
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.

        beforeMount(){
            if(!localStorage.getItem('score')){
                localStorage.setItem('score', 0)
            }
            else{
                this.score = Number(localStorage.getItem('score'))
            }
            if(!localStorage.getItem('nama')){
                this.$router.push('/welcome')
            }
            
        },
        data(){
            return{
                score: '0',
                bintangCount: 10,
                isVolume: true,
                audio: undefined,
                isAudioPlaying: false,
                stars:[
                    {id :1, class:'putih1',opac:{opacity:1} },
                    {id :2, class:'putih2',opac:{opacity:1} },
                    {id :3, class:'putih3',opac:{opacity:1} },
                    {id :4, class:'putih4',opac:{opacity:1} },
                    {id :5, class:'putih5',opac:{opacity:1} },
                    {id :6, class:'putih6',opac:{opacity:1} },
                    {id :7, class:'putih7',opac:{opacity:1} },
                    {id :8, class:'putih8',opac:{opacity:1} },
                    {id :9, class:'putih9',opac:{opacity:1} },
                    {id :10, class:'putih10',opac:{opacity:1} },
                ],
            }
        },
        mounted(){
            console.log(localStorage.getItem('score'))
            this.dragAwanAtas()
            this.dragAwanBawah()
            this.dragOrang()
            if(localStorage.getItem('daritopeng') == 'true'){
                this.dariPersona()
            }
            this.audio = new Audio('/sound/1 main.mp3')
            this.audio.volume = 0.5
            this.audio.loop = true
            this.playAudio()

        },
        computed:{

        },
        methods:{
            countBintang(bintang){
                if(localStorage.getItem('score')<10){
                    localStorage.setItem('score',Number(this.score+1))
                    this.score = Number(localStorage.getItem('score'))
                    this.stars[bintang-1].opac.opacity = 0
                    this.munculBintang(bintang)
                }else{
                    this.stars[bintang-1].opac.opacity = 0
                    this.munculBintang(bintang)
                }
                
            },
            munculBintang(bintang){
                setTimeout(() => {
                    this.stars[bintang-1].opac.opacity = 1
                }, 3000);
            },
            dragAwanAtas(){
                Draggable.create(".lubang-atas",{

                })
            },
            dragAwanBawah(){
                Draggable.create(".lubang-bawah",{

                })
            },
            dragOrang(){
                const self = this
                Draggable.create(".orang",{
                    onDrag: function(){
                        if(this.hitTest(".lubang")){
                            gsap.to(this.target,{duration: 0.6, opacity:0, scale: 0, transformOrigin: "100% 90%"})
                            setTimeout(()=>{self.pindahPersona()}, 500)
                        }
                    }
                })
            },
            pindahPersona(){
                this.$router.push('/topeng')
            },
            dariPersona(){
                localStorage.setItem('daritopeng', 'false')
                location.reload()
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
    beforeDestroy(){
        this.audio.pause()
        this.audio.currentTime = 0;
    }
    }
</script>

<style >
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
html,body{
    margin-top: -1%;
}

 body, html{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    }

body{
    background-image: url("../assets/png/MainPage/bg_gelap.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}

.bintank{
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
    z-index: 5;
    transform: translate(1000%, -530%);
    cursor: pointer;
}
.container-main{
    overflow-x: hidden;
}

.svg-container{
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(0, 280%);
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

.container-text-box{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 5%;
    left: 45%;
    color: #30455A;
    
}

.container-text-middle-title{
    position: absolute;
    font-size: 5vw;
    margin: 10% 43%;
    font-family: Tf Grotesk;
    color: #D2D5D3;
    text-align: center;
}     

.container-text-middle{
    position: absolute;
    margin: 19% 20%;
    text-align: justify;
    font-size: 1.2vw;
    font-family: Tf Grotesk;
    color: #D2D5D3;
}

.container-bulan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bulan .oren{
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(0%,15%);
    animation-name: floating-bulan;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-bulan {
    0% { transform: translate(0%,15%); }
    50%  { transform: translate(0%,20%); }
    100%   { transform: translate(0%,15%); }   
}

.container-kelinci{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kelinci .oren{
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(230%,65%);
    animation-name: floating-kelinci;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-kelinci {
    0% { transform: translate(230%,65%); }
    50%  { transform: translate(230%,70%); }
    100%   { transform: translate(230%,65%); }   
}

.container-saturnus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-saturnus .ungu{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(20%, 270%);
    animation-name: floating-saturnus;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-saturnus {
    0% { transform: translate(20%, 270%); }
    50%  { transform: translate(20%, 265%); }
    100%   { transform: translate(20%, 270%); }   
}

.container-lolipop{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-lolipop .ungu{
    top: 50%;
    left: 50%;
    height: 110%;
    transform: translate(58%, 59%);
    animation-name: floating-lolipop-ungu;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-lolipop-ungu {
    0% { transform: translate(58%, 59%); }
    50%  { transform: translate(58%, 61%); }
    100%   { transform: translate(58%, 59%); }   
}

.container-permen{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-permen .oren{
    height: 120%;
    top: 50%;
    left: 50%;
    transform: translate(25%, 70%);
    animation-name: floating-permen-oren;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-permen-oren {
    0% { transform: translate(25%, 70%); }
    50%  { transform: translate(25%, 71%); }
    100%   { transform: translate(25%, 70%); }   
}

.container-kamera{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kamera .ungu{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(110%, 520%);
    animation-name: floating-kamera;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-kamera {
    0% { transform: translate(110%, 520%); }
    50%  { transform: translate(110%, 524.5%); }
    100%   { transform: translate(110%, 520%); }   
}

.container-ikan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-ikan .ungu{
    top: 50%;
    left: 50%;
    height: 25%;
    transform: translate(320%, 500%);
    animation-name: floating-ikan-ungu;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-ikan-ungu {
    0% { transform: translate(320%, 500%); }
    50%  { transform: translate(320%, 505%); }
    100%   { transform: translate(320%, 500%); }   
}

.container-ikan .oren{
    top: 50%;
    left: 50%;
    height: 35%;
    transform: translate(-40%, 400%);
    animation-name: floating-ikan-oren;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-ikan-oren {
    0% { transform: translate(-40%, 400%); }
    50%  { transform: translate(-40%, 405%); }
    100%   { transform: translate(-40%, 400%); }   
}

.container-penggaris{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-penggaris .ungu{
    top: 50%;
    left: 50%;
    height: 120%;
    transform: translate(45%, 120%);
    animation-name: floating-penggaris;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-penggaris {
    0% { transform: translate(45%, 120%); }
    50%  { transform: translate(45%, 121%); }
    100%   { transform: translate(45%, 120%); }   
}

.container-pita{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-pita .oren{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(15%, 660%);
    animation-name: floating-pita;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-pita {
    0% { transform: translate(15%, 660%); }
    50%  { transform: translate(15%, 668%); }
    100%   { transform: translate(15%, 660%); }   
}

.container-ubur{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-ubur .oren{
    top: 50%;
    left: 50%;
    height: 140%;
    transform: translate(90%, 95%);
    animation-name: floating-ubur;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-ubur {
    0% { transform: translate(90%, 95%); }
    50%  { transform: translate(90%, 98%); }
    100%   { transform: translate(90%, 95%); }   
}

/* score */
.score{
    position: fixed
}

.container-box{
    position: fixed;
    height: 7.5%;
    width: 13%;
    background-color: #fff;
    transform: translate(580%, 100%);
    border-radius: 50px;
}

.container-box .oren{
    position: fixed;
    height: 100%;
    transform: translate(10%, 0%);
}

.container-segitiga{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-segitiga .ungu{
    top: 50%;
    left: 50%;
    height: 13%;
    transform: translate(960%,500%);
}

.container-bintang-putih{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang-putih .putih1{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 9%;
    transform: translate(-690%,-60%);
    z-index: 1;
}

.container-bintang-putih .putih2{
    top: 50%;
    left: 50%;
    height: 11%;
    transform: translate(400%, 1050%);
}

.container-bintang-putih .putih3{
    height: 7%;
    top: 50%;
    left: 50%;
    transform: translate(1760%, 1720%);
}

.container-bintang-putih .putih4{
    top: 50%;
    left: 50%;
    height: 7%;
    transform: translate(350%, 2340%);
}

.container-bintang-putih .putih5{
    top: 50%;
    left: 50%;
    height: 7%;
    transform: translate(650%, 2630%);
}

.container-bintang-putih .putih6{
    height: 7%;
    top: 50%;
    left: 50%;
    transform: translate(270%, 3360%);
}

.container-bintang-putih .putih7{
    height: 7%;
    top: 50%;
    left: 50%;
    transform: translate(2180%, 3560%);
}

.container-bintang-putih .putih8{
    height: 7%;
    top: 50%;
    left: 50%;
    transform: translate(920%, 3900%);
}

.container-bintang-putih .putih9{
    top: 50%;
    left: 50%;
    height: 9%;
    transform: translate(1400%, 2150%);
}

.container-bintang-putih .putih10{
    top: 50%;
    left: 50%;
    height: 7%;
    transform: translate(1000%, 4580%);
}

.container-permen-bungkus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-permen-bungkus .oren{
    top: 50%;
    left: 50%;
    height: 60%;
    transform: translate(8%, 376%);
    animation-name: floating-bungkus;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-bungkus {
    0% { transform: translate(8%, 376%); }
    50%  { transform: translate(8%, 380%); }
    100%   { transform: translate(8%, 376%); }   
}

.container-awan-main{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awan-main .bawah-permen{
    top: 50%;
    left: 50%;
    height: 45%;
    transform: translate(-45%, 590%);
    animation-name: floating-awan-bawah-permen;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-awan-bawah-permen {
    0% { transform: translate(-45%,  590%); }
    50%  { transform: translate(-45%, 592%); }
    100%   { transform: translate(-45%, 590%); }   
}

.container-awan-main .bawah-papan{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(113%, 460%);
    animation-name: floating-awan-bawah-papan;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-awan-bawah-papan {
    0% { transform: translate(113%, 460%); }
    50%  { transform: translate(113%, 463%); }
    100%   { transform: translate(113%, 460%); }   
}

.svg-container .lubang-atas{
    top: 50%;
    left: 50%;
    height: 40%;
    transform: translate(150%, 145%);
    /* animation-name: floating-awan-lubang-atas;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out; */
}

@keyframes floating-awan-lubang-atas {
    0% { transform: translate(120%, 460%); }
    50%  { transform: translate(120%, 465%); }
    100%   { transform: translate(120%, 460%); }   
}

.svg-container .lubang-bawah{
    top: 50%;
    left: 50%;
    height: 40%;
    transform: translate(35%, 170%);
    /* animation-name: floating-awan-lubang-bawah;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out; */
}

@keyframes floating-awan-lubang-bawah {
    0% { transform: translate(-5%, 599%); }
    50%  { transform: translate(-5%, 606%); }
    100%   { transform: translate(-5%, 599%); }   
}

.container-awan-main .belakang-kasur{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(10%, 335%);
    animation-name: floating-awan-belakang-kasur;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-awan-belakang-kasur {
    0% { transform: translate(10%, 335%); }
    50%  { transform: translate(10%, 337%); }
    100%   { transform: translate(10%, 335%); }   
}

.container-papan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-papan .papan{
    top: 50%;
    left: 50%;
    width: 35%;
    transform: translate(165%, 390%);
    animation-name: floating-papan;
    animation-duration: 3.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-papan {
    0% { transform: translate(165%, 390%); }
    50%  { transform: translate(165%, 391.5%); }
    100%   { transform: translate(165%, 390%); }   
}

/* .container-lubang{
    position: absolute;
    height: 100%;
    width: 100%;
} */

.svg-container .lubang{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 15%;
    transform: translate(40%, 150%);
}

.container-kasur {
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kasur .kasur{
    top: 50%;
    left: 50%;
    width: 43%;
    transform: translate(-1%, 380%);
    animation-name: floating-kasur;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-kasur {
    0% { transform: translate(-1%, 380%); }
    50%  { transform: translate(-1%, 381.5%); }
    100%   { transform: translate(-1%, 380%); }   
}

.container-kasur .depan-kasur1{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-80%, 610%) rotate(180deg);
    animation-name: floating-depan-kasur1;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-depan-kasur1 {
    0% { transform: translate(-80%, 610%) rotate(180deg); }
    50%  { transform: translate(-80%, 612%) rotate(180deg); }
    100%   { transform: translate(-80%, 610%) rotate(180deg); }   
}

.container-kasur .depan-kasur2{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-30%, 500%);
    animation-name: floating-depan-kasur2;
    animation-duration: 3.7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating-depan-kasur2 {
    0% { transform: translate(-30%, 500%); }
    50%  { transform: translate(-30%, 503%); }
    100%   { transform: translate(-30%, 500%); }   
}

.container-orang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.svg-container .orang{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(15%, -35%);
    /* animation-name: floating-orang;
    animation-duration: 3.7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out; */
}

@keyframes floating-orang {
    0% { transform: translate(17%, 490%); }
    50%  { transform: translate(17%, 492.3%); }
    100%   { transform: translate(17%, 490%); }   
}

.container-awan-lubang{
    position: absolute;
    height: 100%;
    width: 100%;
}

/* -------------------------------------------------------------------- */



</style>