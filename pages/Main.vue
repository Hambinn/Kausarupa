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
    </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style  scoped>
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */

    .container-main{
        background-image: url("../assets/png/MainPage/bg_terang.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
    }

    .container-bulan{
        position: absolute;
        transform: translate(40%, 30%);
    }

    .container-kelinci{
        position: absolute;
        transform: translate(140%, 150%);
    }

    @media only screen and (max-width: 1366px) {
        .container-welcome{
            background-size: 1366px 768px;
        }
    }
</style>