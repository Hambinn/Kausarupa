<template>
    <div class="container-score">
        <div class="top-cont">
            <div class="canvas">
                <div class="topeng">
                    <img src="~/assets/svg/PersonaPage/Persona 2 1 (2).svg" alt="" class="tengah">
                    <img src="~/assets/svg/PersonaPage/topeng kiri.svg" alt="" class="kiri">
                    <img src="~/assets/svg/PersonaPage/topeng kanan.svg" alt="" class="kanan">
                </div>
                <div class="rumah">
                    <img src="~/assets/svg/PersonaPage/rumah kanan bawah.svg" alt="" class="kanan">
                    <img src="~/assets/svg/PersonaPage/rumah kiri bawah.svg" alt="" class="kiri">
                </div>
                <div class="awan">
                    <img src="~/assets/svg/PersonaPage/awan oren (1).svg" alt="" class="kiri">
                    <img src="~/assets/svg/PersonaPage/awan oren (1).svg" alt="" class="tengah">
                    <img src="~/assets/svg/PersonaPage/awan oren (1).svg" alt="" class="kanan">
                </div>
                <div class="tulisanbawah">
                    <p> You've Got </p>
                </div>
                <div class="skor">
                    <p> 000 </p>
                </div>
                <div class="tombol-next-persona">
                    <p class="next-persona">Next</p>
                </div>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import rcp from '../components/rcp.vue'
export default {
    
  components: { rcp },
    
}
</script>

<style>

html.body{
    all: unset
}

.top-cont{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container-score{
    position: absolute;
    text-align: center;
    background-image: url("../assets/svg/PersonaPage/bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.tulisanbawah{
    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5vw;
    transform: translate(0%,500%);
}

.skor{
    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 8vh;
    transform: translate(0%,230%);
}

.topeng{
    position: absolute;
    height: 100%;
    width: 100%;
}

.topeng .tengah{
    height: 110%;
    transform: translate(0%,-30%);
}

.topeng .kiri{
    position: absolute;
    height: 75%;
    transform: translate(-220%,30%)
}

.topeng .kanan{
    position: absolute;
    height: 75%;
    transform: translate(-25%,30%)
}

.awan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.awan .kiri{
    position: absolute;
    height: 160%;
    transform: translate(-120%,30%);
}

.awan .tengah{
    position: absolute;
    height: 160%;
    transform: translate(-20%,45%);
}

.awan .kanan{
    position: absolute;
    height: 130%;
    transform: translate(20%,50%);
}

.rumah{
    position: absolute;
    height: 100%;
    width: 100%;
}

.rumah .kanan{
    position: absolute;
    height: 160%;
    transform: translate(140%, 10%);
}

.rumah .kiri{
    position: absolute;
    height: 160%;
    transform: translate(-240%, 0%);
}

.tombol-next-persona{
    position: fixed;
    height: 20%;
    width: 13%;
    transform: translate(630%, 260%);
    background: #597FA3;
    border-radius: 25px;
}

.tombol-next-persona .next-persona{
    position: absolute;
    width: 116%;
    height: 60%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-170%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3vw;
/* identical to box height */

color: #fff;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>