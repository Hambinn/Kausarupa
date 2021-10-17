<template>
  <div class="container-landing">
    <div class="top-cont">
      <div class="canvas">
        <div class="container-logo">
          <img src="../assets/svg/LandingPage/logo kausarupa.svg" alt="">
        </div>
        <div class="container-awan">
          <img src="../assets/svg/LandingPage/awan kanan bawah ver 2.svg" alt="" class="kanan">
          <img src="../assets/svg/LandingPage/awan kiri atas ver 1.svg" alt="" class="kiri">
        </div>
        <div class="container-bintang">
          <img src="../assets/svg/LandingPage/bintang oren.svg" alt="" class="kecil">
          <img src="../assets/svg/LandingPage/bintang oren.svg" alt="" class="besar">
        </div>
        <div class="container-tombol">
          <Nuxt-link to="/Welcome">
            <button class="tap-me">Tap Me!</button>
          </Nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
        
    }
</script>

<style>
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

.container-landing{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/LandingPage/bg panjang 16_9.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

@media only  screen and (max-width: 1366px) {
    /* .container-landing{
        background-size: 100% 100%;
    } */
}

.container-logo{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-logo img{
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(5%,37%);
}

.container-bintang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang .kecil{
    height: 8%;
    top: 50%;
    left: 50%;
    transform: translate(570%,150%);
}

.container-bintang .besar{
    height: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-320%,390%);
}

.container-awan{
    position: absolute;
    height: 100%;
    width: 100%;
}
.container-awan .kiri{
    position: absolute;
    height: 35%;
    transform: translate(-183%,0%);
}
.container-awan .kanan{
    position: absolute;
    height: 40%;
    transform: translate(144%,130%);
}

.container-tombol{
    position: absolute;
    height: 100%;
    width: 100%;
}



.tap-me{
    all: unset;
    font-family: 'Tf Grotesk';
    font-weight: normal;
    font-style: italic;
    background: #30455A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
    width: 35%;
    height: 9%;
    transform: translate(0%,770%);
    font-size: 2.7vw;
    color: #F2F7ED;
}
 
a{
    text-decoration: none;
}

@media only  screen and (max-width: 1366px) {
    /* .container-logo img{
        height: 400px;
        top: 50%;
        left: 50%;
        transform: translate( 66%, 33% );
    }
    .container-bintang .kecil{
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(1800%,200%);
    }
    .container-bintang .besar{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(250%,460%);
}
.container-awan .kiri{
    height: 250px;
    transform: translate(-95%, -35%);
}
.container-awan .kanan{
    height: 350px;
    transform: translate(275%,110%);
}
.tap-me{
    width: 470px;
    height: 56px;
    position: relative;
    top: 550px;
    font-size: 32px;
    border-radius: 18px;
} */
}

/* @media only screen and (max-width: 1280px){
    .container-awan .kiri{
    position: absolute;
    height: 35%;
    transform: translate(-197%,0%);
}
.container-awan .kanan{
    position: absolute;
    height: 40%;
    transform: translate(162%,130%);
}
} */
</style>