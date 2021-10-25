<template>
    <div class="bg-skor-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back">
                </div>
                <div class="container-volume-mamus">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on">
                </div>
                <div class="container-hiasan">
                    <img src="../assets/png/MamusPage/5. skor/kanan bawah.png" alt="" class="jamur-kanan-bawah">
                    <img src="../assets/png/MamusPage/5. skor/kiri bawah.png" alt="" class="jamur-kiri-bawah">
                </div>
                <div class="container-topeng">
                    <img src="../assets/png/MamusPage/5. skor/mamus tengah.png" alt="" class="topeng-tengah">
                    <img src="../assets/png/MamusPage/5. skor/mamus kanan.png" alt="" class="topeng-kanan">
                    <img src="../assets/png/MamusPage/5. skor/mamus kiri.png" alt="" class="topeng-kiri">
                </div>
                <div class="container-bintang-skor-mamus">
                    <img src="../assets/png/MamusPage/5. skor/bintang.png" alt="" class="bintang-kanan">
                    <img src="../assets/png/MamusPage/5. skor/bintang.png" alt="" class="bintang-kiri">
                </div>
                <div class="container-text-skor-mamus">
                    <p class="mamus-text-atas"> You've Got </p>
                    <p class="mamus-text-bawah"> 000 </p>
                </div>
                <div class="tombol-next-mamus">
                    <p class="next-mamus">Next</p>
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

.bg-skor-mamus{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/MamusPage/5. skor/background topenk.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
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
    transform: translate(1050%, 70%);
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
    transform: translate(-1050%, 70%);
}

.container-text-skor-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: Tf Grotesk;
    font-weight: lighter;
}

.container-text-skor-mamus .mamus-text-atas{
    font-size: 3.2vw;
    transform: translate(0%,1000%);
}

.container-text-skor-mamus .mamus-text-bawah{
    font-size: 4.5vw;
    transform: translate(0%,700%);
}

.container-hiasan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-hiasan .jamur-kanan-bawah{
    width: 38.5%;
    top: 50%;
    left: 50%;
    transform: translate(129%, 60.2%);
}

.container-hiasan .jamur-kiri-bawah{
    width: 37.3%;
    top: 50%;
    left: 50%;
    transform: translate(-137%, 58.5%);
}

.container-topeng{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-topeng .topeng-tengah{
    width: 33.5%;
    top: 50%;
    left: 50%;
    transform: translate(50%, 25%);
}

.container-topeng .topeng-kanan{
    width: 13.9%;
    top: 50%;
    left: 50%;
    transform: translate(92%, 60%);
}

.container-topeng .topeng-kiri{
    width: 18.9%;
    top: 50%;
    left: 50%;
    transform: translate(-240%, 60%);
}

.container-bintang-skor-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang-skor-mamus .bintang-kiri{
    width: 5.1%;
    top: 50%;
    left: 50%;
    transform: translate(-800%, 255%);
}

.container-bintang-skor-mamus .bintang-kanan{
    width: 7.44%;
    top: 50%;
    left: 50%;
    transform: translate(480%, 340%);
}

.tombol-next-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 8.4%;
    width: 15.88%;
    transform: translate(190%, 450%);

    background: #597FA3;
    border-radius: 11.4%/38.4%;
}

.tombol-next-mamus .next-mamus{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3vw;
    color: white;
}

</style>