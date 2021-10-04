<template>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    <div class="container-main">
        <div class="container-bulan">
            <img src="../assets/svg/MainPage/bulan.svg" alt="" class="orenr">
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
        <div class="container-bintang-item">
            <img src="../assets/svg/MainPage/bintang-item.svg" alt="" class="oren">
        </div>
        <div class="container-bintang-putih-1">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="oren">
        </div>
    </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style >
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
body{
    margin: 0;
    padding: 0;
}

.container-main{
    background-image: url("../assets/png/MainPage/bg_terang.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
}
    
.container-bulan{
    height: 180px;
    top: 50%;
    left: 50%;
    transform: translate(0%, 25%);
}

.container-kelinci{
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(73%, 10%);
}
    
.container-saturnus{
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(3%, -60%);
}

.container-lolipop{
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(33%, 0%);
}

.container-kamera{
    height: 180px;
    top: 50%;
    left: 50%;
    transform: translate(0%, 25%);
}

.container-ikan .ungu{
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(340%, -260%);
}

.container-ikan .oren{
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-40%, 50%);
}

.container-pita{
    height: 650px;
    top: 50%;
    left: 50%;
    transform: translate(0%, 50%);
}

.container-permen{
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(22%, -172%);
}

.container-bintang-item{
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(80%, -5650%);
}

.container-bintang-putih-1{
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(13%, -3850%);
}

@media only screen and (max-width: 1366px) {
    .container-welcome{
        background-size: 1366px 768px;
    }
}
</style>