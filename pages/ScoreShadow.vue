<template>
    <div class="bg-score-shadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-back-score-shadow">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back-score-shadow">
                </div>
                <div class="container-hiasan-score-shadow">
                    <img src="../assets/png/ShadowPage/5. score/kanan-bawah.png" alt="" class="score-shadow-kanan-bawah">
                    <img src="../assets/png/ShadowPage/5. score/kiri-bawah.png" alt="" class="score-shadow-kiri-bawah">
                    <img src="../assets/png/ShadowPage/5. score/kanan-atas.png" alt="" class="score-shadow-kanan-atas">
                </div>
                <div class="container-topeng-score-shadow">
                    <img src="../assets/png/ShadowPage/5. score/topeng-utama.png" alt="" class="topeng-utama-score-shadow">
                    <img src="../assets/png/ShadowPage/5. score/topeng-kanan.png" alt="" class="topeng-kanan-score-shadow">
                    <img src="../assets/png/ShadowPage/5. score/topeng-kiri.png" alt="" class="topeng-kiri-score-shadow">
                </div>
                <div class="container-text-score-shadow">
                    <p class="score-shadow-text-atas"> You've Got </p>
                    <p class="score-shadow-text-bawah"> 000 </p>
                </div>
                <div class="container-volume-score-shadow">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on-score-shadow">
                </div>
                <div class="tombol-next-score-shadow">
                    <p class="next-score-shadow">Next</p>
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

.container-volume-score-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-score-shadow .volume-on-score-shadow{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-back-score-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-score-shadow .back-score-shadow{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}

.container-text-score-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: Tf Grotesk;
    font-weight: lighter;
}

.container-text-score-shadow .score-shadow-text-atas{
    font-size: 3.2vw;
    transform: translate(0%,1000%);
}

.container-text-score-shadow .score-shadow-text-bawah{
    font-size: 4.5vw;
    transform: translate(0%,700%);
}

.container-hiasan-score-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-hiasan-score-shadow .score-shadow-kanan-bawah{
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(86%, 83%);
}

.container-hiasan-score-shadow .score-shadow-kiri-bawah{
    width: 35%;
    top: 50%;
    left: 50%;
    transform: translate(-165%, 50%);
}

.container-hiasan-score-shadow .score-shadow-kanan-atas{
    width: 23%;
    top: 50%;
    left: 50%;
    transform: translate(168%, -110%);
}

.container-topeng-score-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-topeng-score-shadow .topeng-utama-score-shadow{
    width: 33.5%;
    top: 50%;
    left: 50%;
    transform: translate(50%, 25%);
}

.container-topeng-score-shadow .topeng-kanan-score-shadow{
    width: 13.9%;
    top: 50%;
    left: 50%;
    transform: translate(80%, 60%);
}

.container-topeng-score-shadow .topeng-kiri-score-shadow{
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-280%, 60%);
}

.tombol-next-score-shadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);

    background: #597FA3;
    border-radius: 11.4%/38.4%;
}

.tombol-next-score-shadow .next-score-shadow{
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

</style>

