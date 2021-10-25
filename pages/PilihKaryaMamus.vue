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
                <div class="container-bg-element">
                    <img src="../assets/png/MamusPage/2. pilih/atas.png" alt="" class="atas">
                    <img src="../assets/png/MamusPage/2. pilih/bawah.png" alt="" class="bawah">
                </div>
                <div class="container-volume-mamus">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on">
                </div>
                <div class="pilih-tema-mamus">
                    <img src="../assets/png/MamusPage/2. pilih/king.png" alt="" class="king">
                    <img src="../assets/png/MamusPage/2. pilih/kq.png" alt="" class="kq">
                    <img src="../assets/png/MamusPage/2. pilih/queen.png" alt="" class="queen">
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

.container-bg-element .atas{
    top: 50%;
    left: 50%;
    transform: translate(50%, 30%);
}

.container-bg-element .bawah{
    top: 50%;
    left: 50%;
    transform: translate(13%, -8%);
}

.pilih-tema-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.pilih-tema-mamus .king{
    height: 62%;
    top: 50%;
    left: 50%;
    transform: translate(65%, 40%)
}

.pilih-tema-mamus .kq{
    height: 68%;
    top: 50%;
    left: 50%;
    transform: translate(-100%, 36%)
}

.pilih-tema-mamus .queen{
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-107%, -65%);
}
</style>