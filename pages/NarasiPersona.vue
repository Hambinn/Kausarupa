<template>
    <div class="container-persona">
      <div class="top-cont">
        <div class="canvas">
          <div class="container-box-persona">
                <p class="text-box-persona">{{scorepersona}}</p>
                <img src="../assets/png/PersonaPage/topeng score putih persona.png" alt="" class="topeng-score-persona">                    
          </div>
          <div class="container-orang">
              <img src="../assets/png/umum/persona berdiri.png" alt="">
          </div>
          <div class="container-kotak">
          <kotak-item/>
          </div>
          <div class= "container-rumah">
              <img src="../assets/svg/PersonaPage/rumah coklat 2.svg" alt="" class="coklat">
          </div>
          <div class="container-awan">
              <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="satu">
              <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="dua">
          </div>
          <div class="container-header-persona">
                <img src="../assets/svg/PersonaPage/header persona.svg" alt="" class="header-persona">
          </div>
            <div class="container-volume-persona">
                <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on" @click="volume" ref="volumeBtn">
            </div>
          <div class="container-back-persona">
                <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
          </div>
          <div class="tombol-next-persona" @click="next">
              <p class="next-persona">Next</p>
          </div>
        </div>  
      </div>
    </div>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
</template>

<script>
import kotakItem from '../components/Persona/kotakItem.vue'
    export default {
    components: { kotakItem },
    data(){
        return{
            scorepersona: 0,
            isVolume: true
        }
    },
    methods:{
        back(){
            this.$router.push('/topeng')
        },
        volume(){
            this.isVolume = !this.isVolume
            if(this.isVolume){
                this.$refs.volumeBtn.src = require('../assets/png/umum/volumeon.png')
                console.log('masuk on')
            }else{
                this.$refs.volumeBtn.src = require('../assets/png/umum/volumeoff.png')
                console.log('masuk off')
            }
        },
        next(){
             this.$router.push('/pilihkarya')
        }
    },
    beforeMount(){
            if(!localStorage.getItem('scorepersona')){
                localStorage.setItem('scorepersona', 0)
            }
            else{
                this.scorepersona = Number(localStorage.getItem('scorepersona'))
            }
        }
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
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

.container-persona{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/PersonaPage/bg-lain.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
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

.container-orang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-orang img{
    top: 50%;
    left: 50%;
    height: 80%;
    transform: translate(-95%,25%);
}

.container-awan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awan .satu{
    position: absolute;
    height: 40%;
    transform: translate(35%,75%);
    z-index: 2;
}

.container-awan .dua{
    position: absolute;
    height: 40%;
    transform: translate(-10%,10%);
    z-index: 2;
}

.container-rumah{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-rumah .coklat{
    position: absolute;
    transform: scaleX(-1);
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(90%,-70%);
    z-index: 2;
}

.tombol-next-persona{
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

.tombol-next-persona .next-persona{
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
</style>