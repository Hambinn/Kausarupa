<template>
    <div class="container-kumpulan-karya">
      <div class="top-cont">
        <div class="canvas">
          <div class="tombol-next-persona">
            <p class="next-persona">Next</p>
          </div>
          <div class="container-header">
            <img src="../assets/svg/PersonaPage/header persona.svg" alt="" class="header">
            <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back">
          </div>
          <div class="container-carousel">
            <img src="../assets/svg/PersonaPage/carousel.svg" alt="" class="CRBesar">
            <img src="../assets/svg/PersonaPage/carousel.svg" alt="" class="CRKecil1">
            <img src="../assets/svg/PersonaPage/carousel.svg" alt="" class="CRKecil2">
          </div>
          <div class= "container-rumah">
            <img src="../assets/svg/PersonaPage/rumah oren 3.svg" alt="" class="rumahKK1">
            <img src="../assets/svg/PersonaPage/rumah oren 4.svg" alt="" class="rumahKK2">
          </div>
          <div class="container-awan">
            <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="KK1">
            <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="KK2">
          </div>
          <div class="score">
            <div class="container-box">
              <div class="container-text-box">
                {{score}}
              </div>
              <img src="../assets/svg/PersonaPage/topeng score.svg" alt="" class="topeng-score">
            </div>
          </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
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

.container-kumpulan-karya{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/PersonaPage/bgPersona.png");
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
}

.container-carousel{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-carousel .CRBesar{
    position: absolute;
    height: 65%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-52%);
}

.container-carousel .CRKecil1{
    position: absolute;
    height: 25%;
    top: 50%;
    left: 50%;
    transform: translate(210%,20%);
    z-index: 1;
}

.container-carousel .CRKecil2{
    position: absolute;
    height: 25%;
    top: 50%;
    left: 50%;
    transform: translate(-310%,-110%);
    z-index: 1;
}

.container-rumah{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-rumah .rumahKK2{
    position: absolute;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(170%,-114%);
    z-index: 2;
}

.container-rumah .rumahKK1{
    position: absolute;
    height: 55%;
    top: 50%;
    left: 50%;
    transform: translate(-160%,12%);
    z-index: 2;
}

.container-awan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awan .KK1{
    position: absolute;
    height: 50%;
    transform: translate(25%,-15%);
    z-index: 1;
}

.container-awan .KK2{
    position: absolute;
    height: 60%;
    transform: translate(-128%,65%);
    z-index: 1;
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
.score{
    position: fixed
}

.container-box{
    position: fixed;
    height: 6%;
    width: 13%;
    background-color: #33485C;
    transform: translate(630%, 150%);
    border-radius: 50px;
    z-index: 3;
}

.container-box .topeng-score{
    position: fixed;
    height: 90%;
    transform: translate(-150%, 10%);
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>