<template>
  <div class="container-landing">
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


.container-landing{
    text-align: center;
    background-image: url("../assets/png/LandingPage/bg panjang 16_9.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    }

@media only  screen and (max-width: 1366px) {
    .container-landing{
        background-size: 1366px 768px;
    }
}

.container-logo{
    position: absolute;
}

.container-logo img{
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(83%,30%);
}

.container-bintang{
    position: absolute;
}

.container-bintang .kecil{
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(1770%,200%);
}

.container-bintang .besar{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(450%,540%);
}

.container-awan{
    position: absolute;
}
.container-awan .kiri{
    height: 340px;
    transform: translate(-93%,-30%);
}
.container-awan .kanan{
    height: 476px;
    transform: translate(287.9%,99%);
}

.tap-me{
    all: unset;
    font-family: 'Tf Grotesk';
    font-weight: normal;
    font-style: italic;
    background: #30455A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
    width: 670px;
    height: 86px;
    position: relative;
    top: 670px;
    font-size: 50px;
    color: #F2F7ED;
}
 
a{
    text-decoration: none;
}

@media only  screen and (max-width: 1366px) {
    .container-logo img{
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
}
}
</style>