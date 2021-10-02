<template>
  <div class="container-landing">
    <div class="container-logo">
      <img src="../assets/svg/LandingPage/logo kausarupa.svg" alt="">
    </div>
    <div class="container-awan">
      <img src="../assets/svg/LandingPage/awan kanan bawah.svg" alt="" class="kanan">
      <img src="../assets/svg/LandingPage/awan kiri atas.svg" alt="" class="kiri">
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
    background-image: url("../assets/png/LandingPage/Background.png");
    background-repeat: no-repeat;
    background-size: 100% 1080px;
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
    transform: translate(83%,40%);
}

.container-bintang{
    position: absolute;
}

.container-bintang .kecil{
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(1700%,290%);
}

.container-bintang .besar{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(450%,430%);
}

.container-awan{
    position: absolute;
}
.container-awan .kiri{
    transform: translate(-100%,-10%);
}
.container-awan .kanan{
    transform: translate(266.5%,30%);
}

.tap-me{
    background: #30455A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
    width: 670px;
    height: 86px;
    position: relative;
    top: 755px;
    font-size: 50px;
    color: #F2F7ED;
}
   
</style>