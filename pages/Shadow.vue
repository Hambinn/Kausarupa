<template>
    <div class="bg-shadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="score">
                    <div class="box-shadow">
                        <div class="text-box-shadow">
                         {{score}}
                        </div>
                    </div>
                    <img src="../assets/png/ShadowPage/topeng score (1).png" alt="" class="topeng-score-shadow">
                </div>
                <div class="container-kotak">
                <kotak-biru/>
                </div>
                <div class="narasi">
                    <img src="~/assets/png/ShadowPage/1. narasi/kanan atas.png" alt="" class="kanan_atas">
                    <img src="~/assets/png/ShadowPage/1. narasi/kanan bawah.png" alt="" class="kanan_bawah">
                    <img src="~/assets/png/ShadowPage/1. narasi/mascot narasi.png" alt="" class="mascot-narasi">
                </div>
                <div class="container_header">
                    <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header">
                    <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back">
                </div>
                <div class="tombol-next-shadow">
                    <p class="next-shadow">Next</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kotakBiru from '../components/Shadow/kotakBiru.vue'
    export default {
    components: { kotakBiru },
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
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

.bg-shadow{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/ShadowPage/main bg shadow.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.narasi{
    position: absolute;
    height: 100%;
    width: 100%;
}

.narasi .kanan_atas{
    height: 55%;
    top: 50%;
    left: 50%;
    transform: translate(93%,-3%)
}

.narasi .kanan_bawah{
    height: 63%;
    top: 50%;
    left: 50%;
    transform: translate(5%,49%)
}

.narasi .mascot-narasi{
    height: 190%;
    top: 50%;
    left: 50%;
    transform: translate(55.5%,-39.5%) rotate(-39deg);
}

.container_header{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container_header .header{
    height: 1000%;
    top: 50%;
    left: 50%;
    transform: translate(0%,0%);
}

.container_header .back{
    height: 1000%;
    top: 50%;
    left: 50%;
    transform: translate(-1000%,60%);
}

.tombol-next-shadow{
    position: fixed;
    height: 6.5%;
    width: 13%;
    transform: translate(635%, 1285%);
    background: #597FA3;
    border-radius: 35px;
}

.tombol-next-shadow .next-shadow{
    position: absolute;
    width: 116%;
    height: 60%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-70%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3vw;
/* identical to box height */

color: #fff;
}

/* score */
.score-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.box-shadow{
    position: absolute;
    height: 6%;
    width: 13%;
    background-color: #33485C;
    transform: translate(630%, 160%);
    border-radius: 50px;
}

.box-shadow .topeng-score-shadow{
    position: fixed;
    height: 90%;
    transform: translate(-150%, -100%);
}

.text-box-shadow{
    font-size: 3vw;
}
</style>