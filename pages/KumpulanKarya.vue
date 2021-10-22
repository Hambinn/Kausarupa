<template>
    <div class="container-kumpulan-karya">
      <div class="top-cont">
        <div class="canvas">
          <div class="tombol-next-persona">
            <p class="next-persona">Next</p>
          </div>
          <div class="container-header">
            <img src="../assets/svg/PersonaPage/header persona.svg" alt="" class="header">
          </div>
          <div class= "container-rumah">
              <img src="../assets/svg/PersonaPage/rumah oren kanan bawah.svg" alt="" class="rumahKK1">
              <img src="../assets/svg/PersonaPage/rumah oren kiri bawah.svg" alt="" class="rumahKK2">
          </div>
          <div class="container-awan">
              <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="KK1">
              <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="KK2">
              <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="KK3">
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
    margin: 0;
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
    height: 12%;
    top: 50%;
    left: 50%;
    transform: translate(-150%,70%);
}

.container-rumah{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-rumah .rumahKK2{
    position: absolute;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-100%,-50%);
    z-index: 2;
}

.container-rumah .rumahKK1{
    position: absolute;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(0%,-70%);
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
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>