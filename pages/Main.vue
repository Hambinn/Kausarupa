<template>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    <div class="container-main">
        <div class="container-bulan">
            <img src="../assets/svg/MainPage/bulan.svg" alt="" class="oren">
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
        <div class="container-bintang-putih">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih1">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih2">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih3">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih4">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih5">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih6">
        </div>
        <div class="container-penggaris">
            <img src="../assets/svg/MainPage/penggaris.svg" alt="" class="ungu">
        </div>
        <div class="container-ubur">
            <img src="../assets/svg/MainPage/ubur-ubur.svg" alt="" class="oren">
        </div>
        <div class="container-permen-bungkus">
            <img src="../assets/svg/MainPage/permen lagi.svg" alt="" class="oren">
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
    background-position: center center;
    background-size: 1920px 4592px;
    height: 4592px;
}

.container-bulan{
    position: relative;
}

.container-bulan .oren{
    position: absolute;
    transform: translate(0%, 30%);
}

.container-kelinci{
    position: relative;
}

.container-kelinci .oren{
    position: absolute;
    transform: translate(225%, 67%);
}

.container-saturnus{
    position: relative;
}

.container-saturnus .ungu{
    position: absolute;
    height: 320px;
    transform: translate(20%, 300%);
}

.container-lolipop{
    position: relative;
}

.container-lolipop .ungu{
    position: absolute;
    transform: translate(58%, 59%);
}

.container-kamera{
    position: relative;
}

.container-kamera .ungu{
    position: absolute;
    transform: translate(90%, 490%);
}

.container-ikan{
    position: relative;
}

.container-ikan .ungu{
    position: absolute;
    transform: translate(500%, 560%);
}

.container-ikan .oren{
    position: absolute;
    transform: translate(-40%, 400%);
}

.container-penggaris{
    position: relative;
}

.container-penggaris .ungu{
    position: absolute;
    transform: translate(20%, 125%);
}

.container-pita{
    position: relative;
}

.container-pita .oren{
    position: absolute;
    height: 350px;
    transform: translate(15%, 660%);
}

.container-permen{
    position: relative;
}

.container-permen .oren{
    position: absolute;
    transform: translate(30%, 81%);
}

.container-bintang-item{
    position: relative;
}

.container-bintang-putih{
    position: relative;
}

.container-bintang-putih .putih1{
    position: absolute;
    width: 114px;
    height: 105.44px;
    left: 246px;
    top: 524px;
}

.container-bintang-putih .putih2{
    position: absolute;
    width: 143.8px;
    height: 133px;
    left: 538px;
    top: 1359px;
}

.container-bintang-putih .putih3{
    position: absolute;
    width: 82.17px;
    height: 76px;
    left: 1529px;
    top: 1321px;
}

.container-bintang-putih .putih4{
    position: absolute;
    width: 82.17px;
    height: 76px;
    left: 270px;
    top: 1879px;
}

.container-bintang-putih .putih5{
    position: absolute;
    width: 93px;
    height: 86.02px;
    left: 561px;
    top: 2107px;
}

.container-bintang-putih .putih6{
    position: absolute;
    width: 143.8px;
    height: 133px;
    left: 424px;
    top: 2575px;
}

.container-ubur{
    position: relative;
}

.container-ubur .oren{
    position: absolute;
    transform: translate(48%, 68%);
}

.container-permen-bungkus{
    position: relative;
}

.container-permen-bungkus .oren{
    position: absolute;
    transform: translate(15%, 442%);
}

@media only screen and (max-width: 1366px) {
    .container-welcome{
        background-size: 1366px 768px;
    }
}
</style>