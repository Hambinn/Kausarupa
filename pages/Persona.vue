<template>
    <div class="container-persona">
        <div class="container-kotak">
            <kotak-item/>
        </div>
        <div class="tombol-next-persona">
            <p class="next-persona">Next</p>
        </div>
        <div class= "container-rumah">
            <img src="../assets/svg/PersonaPage/rumah coklat 2.svg" alt="" class="coklat">
            <img src="../assets/svg/PersonaPage/rumah oren 3.svg" alt="" class="oren">
        </div>
        <div class="container-awan">
            <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="satu">
            <img src="../assets/svg/PersonaPage/awan kuning.svg" alt="" class="dua">
        </div>
        <div class="container-header">
            <img src="../assets/svg/PersonaPage/header persona.svg" alt="">
        </div>
    </div>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
</template>

<script>
import kotakItem from '../components/Persona/kotakItem.vue'
    export default {
    components: { kotakItem },
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
        
}


.container-persona{
    text-align: center;
    background-image: url("../assets/png/PersonaPage/bgPersona.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    }

.container-header{
    position: absolute;
    height: 50px;
    width: 50px;
    transform: translate(175%,20%);
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
.container-rumah{
    position: absolute;
}

.container-rumah .coklat{
    position: absolute;
    transform: scaleX(-1);
    width: 650px;
    height: 650px;
    transform: translate(190%,10%);
    z-index: 2;
}

.container-rumah .oren{
    position: absolute;
    width: 1100px;
    height: 1100px;
    transform: translate(70%,-40%);
    z-index: 1;
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