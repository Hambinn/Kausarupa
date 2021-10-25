<template>
    <div class="bg-score-shadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-kk-shadow">
                    <img src="../assets/png/ShadowPage/header shadow.png" alt="" class="header-kk-shadow">
                </div>
                <div class="container-back-kk-shadow">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back-kk-shadow">
                </div>
                <div class="container-hiasan-kk-shadow">
                    <img src="../assets/png/ShadowPage/4. kk/kanan-atas.png" alt="" class="kanan-atas-kk-shadow">
                    <img src="../assets/png/ShadowPage/4. kk/kiri-bawah.png" alt="" class="kiri-bawah-kk-shadow">
                </div>
                <div class="container-jaring-laba-kk-shadow">
                    <img src="../assets/png/ShadowPage/4. kk/jaring-laba.png" alt="" class="jaring-laba-kk-shadow-1">
                    <img src="../assets/png/ShadowPage/4. kk/jaring-laba.png" alt="" class="jaring-laba-kk-shadow-2">
                    <img src="../assets/png/ShadowPage/4. kk/jaring-laba.png" alt="" class="jaring-laba-kk-shadow-3">
                </div>
                <div class="container-volume-kk-shadow">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on-kk-shadow">
                </div>
                <div class="tombol-next-kk-shadow">
                    <p class="next-kk-shadow">Next</p>
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
html,body{
    all: unset;
    margin: 0;
    padding: 0;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
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

.bg-score-shadow{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/ShadowPage/5. score/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-kk-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-kk-shadow .header-kk-shadow{
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-85%, 70%);
}


.container-back-kk-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-kk-shadow .back-kk-shadow{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}


.tombol-next-kk-shadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);

    background: #597FA3;
    border-radius: 11.4%/38.4%;
}

.tombol-next-kk-shadow .next-kk-shadow{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.1vw;
    color: white;
}

.container-volume-kk-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-kk-shadow .volume-on-kk-shadow{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-hiasan-kk-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-hiasan-kk-shadow .kanan-atas-kk-shadow{
    width: 33%;
    top: 50%;
    left: 50%;
    transform: translate(175%, -40%);
}

.container-hiasan-kk-shadow .kiri-bawah-kk-shadow{
    width: 28%;
    top: 50%;
    left: 50%;
    transform: translate(-200%, 47%);
}

.container-jaring-laba-kk-shadow{
    position: absolute;
    height: 100%;
    width: 100%;    
}

.container-jaring-laba-kk-shadow .jaring-laba-kk-shadow-1{
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-80%,-110%);
}

.container-jaring-laba-kk-shadow .jaring-laba-kk-shadow-2{
    width: 39%;
    top: 50%;
    left: 50%;
    transform: translate(0%,%);
}

.container-jaring-laba-kk-shadow .jaring-laba-kk-shadow-3{
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(80%,15%);
}


</style>