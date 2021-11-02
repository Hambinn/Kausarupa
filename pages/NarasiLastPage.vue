<template>
    <div class="bg-narasi-last">
        <div class="top-cont">
            <div class="canvas">
                <div class="cont-mas-nar-last">
                    <img src="~/assets/png/umum/mamus berdiri.png" alt="">
                </div>
                <div class="container-back-last">
                    <img src="../assets/png/FinishPage/keyboard_backspace.png" alt="" class="back">
                </div>
                <div class="container-sound-last">
                    <img src="../assets/png/FinishPage/sound on.png" alt="" class="sound-on">
                </div>                
                <div class="container-kotak-last">
                    <kotak-last/>
                </div>
                <div class="container-jendela-last">
                    <img src="../assets/png/FinishPage/Narasi/jendela (3).png" alt="" class="jendela-biru">
                </div>
                <div class="container-foto-last">
                    <img src="../assets/png/FinishPage/Narasi/foto.png" alt="" class="foto-abu">
                </div>                
                <div class="container-kasur-last">
                    <img src="../assets/png/FinishPage/Narasi/kasur.png" alt="" class="kasur-biru">
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import kotakLast from '../components/Last/kotakLast.vue'
    export default {
  components: { kotakLast },
        
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

.cont-mas-nar-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.cont-mas-nar-last img{
    position: absolute;
    height: 65%;
    transform: translate(75%,45%);
    z-index: 5;
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

.bg-narasi-last{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/FinishPage/bg umum last page.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-jendela-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-jendela-last .jendela-biru{
    width: 37.4%;
    top: 50%;
    left: 50%;
    transform: translate(-84%, 9%);
}

.container-foto-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-foto-last .foto-abu{
    width: 22.4%;
    top: 50%;
    left: 50%;
    transform: translate(80%, -20%);
}

.container-kasur-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kasur-last .kasur-biru{
    width: 37%;
    top: 50%;
    left: 50%;
    transform: translate(85.2%, 65.5%);
}

.container-back-last{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
}

.container-back-last .back{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}

.container-sound-last{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-sound-last .sound-on{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

</style>