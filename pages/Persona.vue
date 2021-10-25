<template>
    <div class="container-persona">
      <div class="top-cont">
        <div class="canvas">
          <div class="score">   
            <div class="container-box">
              <div class="container-text-box">
                {{score}}
              </div>
              <img src="../assets/svg/PersonaPage/topeng score.svg" alt="" class="topeng-score">
            </div>
          </div>
          <div class="container-orang">
              <img src="../assets/svg/PersonaPage/mascot berdiri.png" alt="">
          </div>
          <div class="container-kotak">
          <kotak-item/>
          </div>
          <div class="tombol-next-persona">
              <p class="next-persona">Next</p>
          </div>
          <div class= "container-rumah">
              <img src="../assets/svg/PersonaPage/rumah coklat 2.svg" alt="" class="coklat">
          </div>
          <div class="container-awan">
              <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="satu">
              <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="dua">
          </div>
          <div class="container-header">
              <img src="../assets/svg/PersonaPage/header persona.svg" alt="" class="header">
              <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
          </div>
          <img src="../assets/png/umum/volumeon.png"  alt="" class="volume-persona1" @click="volume()" ref="volumeBtn">
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
            score: 0
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
            }else{
                this.$refs.volumeBtn.src = require('../assets/png/umum/volumeoff.png')
            }
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

.volume-persona1{
    position: fixed;
    height: 5%;
    transform: translate(1600%, 200%);
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
}

.container-orang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-orang img{
    top: 50%;
    left: 50%;
    transform: translate(-27%,0%);
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
    position: absolute;
    height: 6.5%;
    width: 13%;
    transform: translate(630%, 1300%);

    background: #597FA3;
    border-radius: 35px;
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
.score{
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
</style>