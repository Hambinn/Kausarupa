<template>
    <div class="container-persona">
        <div class="top-cont">
            <div class="canvas">
                <div class= "container-rumahoren">
                    <img src="../assets/svg/PersonaPage/rumah oren 1.svg" alt="" class="orensatu">
                    <img src="../assets/svg/PersonaPage/rumah oren 2.svg" alt="" class="orendua">
                    <img src="../assets/svg/PersonaPage/rumah oren 3.svg" alt="" class="orentiga">
                </div>
                <div class="container-rumahcoklat">
                    <img src="../assets/svg/PersonaPage/rumah coklat 1.svg" alt="" class="coklatsatu">
                    <img src="../assets/svg/PersonaPage/rumah coklat 2.svg" alt="" class="coklatdua">
                    <img src="../assets/svg/PersonaPage/rumah coklat 3.svg" alt="" class="coklattiga">
                </div>
                <div class="container-awankuning">
                    <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="satu">
                    <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="dua">
                </div>
                <div class="container-awanoren">
                    <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="satu">
                    <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="dua">
                    <img src="../assets/svg/PersonaPage/awan oren (1).svg" alt="" class="tiga">
                </div>
                <div class="container-header-persona">
                    <img src="../assets/svg/PersonaPage/header persona.svg" alt="" class="header">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="topeng-score-atas">
                    <img src="../assets/png/PersonaPage/topeng score.png" alt="">
                </div>
                <img src="../assets/png/umum/volumeon.png"  alt="" class="volume-persona1" @click="volume()" ref="volumeBtn">
            </div>
        </div>
    </div>
</template>

<script>
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
</script>

<style>

html,body{
    margin: 0;
}


*{
    padding: 0;
    margin: 0;
        
}

.container-persona{
    text-align: center;
    background-image: url("../assets/png/PersonaPage/backgroudn umum persona.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
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


.container-header-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-persona .header{
    height: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-185%,90%);
}

.container-header-persona .back{
    height: 6%;
    top: 50%;
    left: 50%;
    transform: translate(-1650%,90%);
}

.container-header-persona .volume-persona1{
    position: fixed;
    height: 5%;
    transform: translate(1200%, 180%);
}

.topeng-score-atas{
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translate(0%,50%);
}

.container-awankuning{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awankuning .satu{
    position: absolute;
    height: 25%;
    transform: translate(-200%, 150%);
}

.container-awankuning .dua{
    position: absolute;
    transform: translate(30%,180%);
    height: 25%;
    z-index: 2;
}

.container-awanoren{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awanoren .satu{
    position: absolute;
    height: 28%;
    transform: translate(-100%,120%);
}

.container-awanoren .dua{
    position: absolute;
    height: 27%;
    transform: translate(-70%, 250%);
}

.container-awanoren .tiga{
    position: absolute;
    height: 22%;
    transform: translate(-5%, 45%);
}

.container-rumahoren{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-rumahoren .orensatu{
    position: absolute;
    height: 50%;
    width: 50%;
    transform: translate(-100%,20%);
}

.container-rumahoren .orendua{
    position: absolute;
    height: 45%;
    width: 45%;
    transform: translate(0%, 25%);
    z-index: 3;
}

.container-rumahoren .orentiga{
    position: absolute;
    height: 60%;
    width: 60%;
    transform: translate(-55%, 62%);
}

.container-rumahcoklat{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-rumahcoklat .coklatsatu{
    position: absolute;
    height: 25%;
    width: 25%;
    transform: translate(-210%, 198%);
    z-index: 3;
}

.container-rumahcoklat .coklatdua{
    position: absolute;
    height: 25%;
    width: 25%;
    transform: translate(12%, 250%);
}

.container-rumahcoklat .coklattiga{
    position: absolute;
    height: 38%;
    width: 38%;
    transform: translate(35%, 85%);
}

</style>