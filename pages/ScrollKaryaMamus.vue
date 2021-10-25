<template>
    <div class="bg-karya-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-mamus">
                    <img src="../assets/png/MamusPage/header mamus.png" alt="" class="header-mamus">
                </div>
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back">
                </div>
                <div class="container-volume-mamus">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on">
                </div>
                <div class="container-asep-mamus">
                    <img src="..\assets\gif\asep pink.GIF" alt="" class="asep-1">
                    <img src="..\assets\gif\asep.GIF" alt="" class="asep-2">
                </div>
                <div class="container-bg-element">
                    <img src="..\assets\png\MamusPage\3. scroll\kanan.png" alt="" class="kanan">
                    <img src="..\assets\png\MamusPage\3. scroll\kiri.png" alt="" class="kiri">

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

.bg-karya-mamus{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/MamusPage/background mamus.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-mamus .header-mamus{
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-85%, 70%);
}

.container-volume-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-mamus .volume-on{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-back-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-mamus .back{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}

.container-bg-element{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-bg-element .kanan{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(67%, -39.5%);
}

.container-bg-element .kiri{
    position: absolute;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-165%, -47%);
}

.container-asep-mamus{
    position: absolute;
    height: 100%;
    width: 100%; 
}

.container-asep-mamus .asep-1{
    position: absolute;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: rotate(180deg) translate(150%, -15%);
}

.container-asep-mamus .asep-2{
    position: absolute;
    height: 30%;
    top: 50%;
    left: 50%;
}
</style>