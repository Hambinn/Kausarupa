<template>
    <div class="container-persona">
      <div class="top-cont">
        <div class="canvas">
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
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style>
html,body{
    all: unset;
    margin: 0;
    padding: 0;
}

*{
    padding: 0;
    margin: 0;
        
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
    background-image: url("../assets/png/PersonaPage/bgPersona.png");
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
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(-150%,70%);
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
    width: 15%;
    height: 7%;
    transform: translate(520%,1200%);

    background: #597FA3;
    border-radius: 35px;
}

.tombol-next-persona .next-persona{
    position: absolute;
    width: 116%;
    height: 58%;
    left: 50%;
    top: 50%;
    transform: translate(-48%,-70%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5vw;
/* identical to box height */


color: #fff;
}
</style>