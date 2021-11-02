<template>
    <div class="bg-narasi-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="cont-mas-nar-mamus-int">
                    <img src="~/assets/png/umum/mamus berdiri.png" alt="">
                </div>
                <div class="container-header-mamus">
                    <img src="../assets/png/MamusPage/header mamus.png" alt="" class="header-mamus">
                </div>
                <div class="container-box-mamus">
                    <p class="text-box-mamus">{{scoremamus}}</p>
                    <img src="../assets/png/MamusPage/topeng score putih mamus.png" alt="" class="topeng-score-mamus">                    
                </div>                
                <div class="container-kotak-mamus">
                    <kotak-pink/>          
                </div>
                <div class="container-teh-kiri-depan">
                    <img src="../assets/png/MamusPage/1. narasi/kiri depan.png" alt="" class="teh">
                </div>
                <div class="container-jamur-kanan-belakang">
                    <img src="../assets/png/MamusPage/1. narasi/kanan belakang.png" alt="" class="jamur">
                </div>
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="container-volume-mamus">
                    <img src="~/assets/png/umum/volumeon.png" alt="" class="volume-on" @click="volume" ref="volumeBtn">
                </div>
                 <div class="tombol-next-mamus" @click="next">
                    <p class="next-mamus">Next</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kotakPink from '../components/Mamus/kotakPink.vue'
    export default {
    components: { kotakPink },
    data(){
        return{
            isVolume: true,
            scoremamus: 0,
        }
    },
    methods:{
        back(){
                this.$router.push('/topeng')
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
        next(){
            this.$router.push('/pilihkaryamamus')
        }
    },
    beforeMount(){
            if(!localStorage.getItem('scoremamus')){
                localStorage.setItem('scoremamus', 0)
            }
            else{
                this.scoremamus = Number(localStorage.getItem('scoremamus'))
            }
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

.cont-mas-nar-mamus-int{
    position: absolute;
    height: 100%;
    width: 100%;
}

.cont-mas-nar-mamus-int img{
    position: absolute;
    height: 70%;
    transform: translate(-160%,35%);
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

.bg-narasi-mamus{
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
    transform: translate(-1100%, -530%);
    z-index: 5;
    cursor: pointer;
}

.container-jamur-kanan-belakang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-jamur-kanan-belakang .jamur{
    width: 38%;
    top: 50%;
    left: 50%;
    transform: translate(82%, 36.5%);
}

.container-teh-kiri-depan{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
}

.container-teh-kiri-depan .teh{
    width: 25.5%;
    top: 50%;
    left: 50%;
    transform: translate(-70%, 24%);
}

.tombol-next-mamus{
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