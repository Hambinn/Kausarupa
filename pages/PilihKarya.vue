<template>
    <div class="container-persona">
        <div class="top-cont">
            <div class="canvas">
                <div class="tombol-next-persona">
                    <p class="next-persona">Next</p>
                </div>
                <div class= "container-rumah-PKP">
                    <img src="../assets/svg/PersonaPage/rumah coklat 1.svg" alt="" class="coklatsatu">
                    <img src="../assets/svg/PersonaPage/rumah coklat 2.svg" alt="" class="coklatdua">
                    <img src="../assets/svg/PersonaPage/rumah coklat 3.svg" alt="" class="coklattiga">
                    <img src="../assets/svg/PersonaPage/rumah oren 1.svg" alt="" class="orensatu">
                    <img src="../assets/svg/PersonaPage/rumah oren 2.svg" alt="" class="orendua">
                    <img src="../assets/svg/PersonaPage/rumah oren 3.svg" alt="" class="orentiga">
                </div>
                <div class="container-awan">
                    <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="satu">
                    <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="dua">
                </div>
                <div class="container-header">
                    <img src="../assets/svg/PersonaPage/header persona.svg" alt="">
                </div>

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
    background-image: url("../assets/png/PersonaPage/bgPersona.png");
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


.container-header{
    position: absolute;
    height: 70%;
    width: 70%;
    transform: translate(-25%,15%);
}

.container-awan{
position: absolute;
}

.container-awan .satu{
    position: absolute;
    width: 800px;
    height: 800px;
    transform: translate(90%,-16%);
    z-index: 2;
}

.container-awan .dua{
    position: absolute;
    width: 1000px;
    height: 1000px;
    transform: translate(120%,3%);
    z-index: 2;
}
.container-rumah-PKP{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-rumah-PKP .coklatsatu {
    position: absolute;
    width: 25%;
    height: 25%;
    transform: translate(-45%,0%);
}

.container-rumah-PKP .coklatdua {
    position: absolute;
    width: 25%;
    height: 25%;
    transform: translate(180%, 170%);
}

.container-rumah-PKP .coklattiga {
    position: absolute;
    width: 25%;
    height: 25%;
    transform: translate(180%, 170%);
}

.tombol-next-persona{
    position: absolute;
    width: 305px;
    height: 80px;
    transform: translate(460%,1100%);

    background: #597FA3;
    border-radius: 35px;
}

.tombol-next-persona .next-persona{
    position: absolute;
    width: 116px;
    height: 58px;
    left: 90px;
    top: 10px;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 58px;
/* identical to box height */


color: #fff;
}
</style>