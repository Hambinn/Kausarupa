<template>
    <div class="bg-shadow">
        <div class="container-kotak">
          <kotak-biru/>
        </div>
        <div class="narasi">
            <img src="~/assets/png/ShadowPage/1. narasi/kanan atas.png" alt="" class="kanan_atas">
            <img src="~/assets/png/ShadowPage/1. narasi/kanan bawah.png" alt="" class="kanan_bawah">
            <img src="~/assets/svg/ShadowPage/header shadow.svg" alt="" class="header">
        </div>
        <div class="container_header">
            <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header">
            <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back">
        </div>
        <div class="score-shadow">
            <div class="container-text-box-shadow">
                {{score}}
            </div>
            <img src="../assets/png/ShadowPage/topeng score (1).png" alt="" class="topeng-score-shadow">
        </div>
        <div class="tombol-next-shadow">
            <p class="next-shadow">Next</p>
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
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(41%,0%)
}

.narasi .kanan_bawah{
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(75%,-43%)
}

.container_header{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container_header .header{
    height: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-135%,20%);
}

.container_header .back{
    height: 6%;
    top: 50%;
    left: 50%;
    transform: translate(-1650%,-50%);
}

.tombol-next-shadow{
    position: fixed;
    height: 6.5%;
    width: 13%;
    transform: translate(625%, 1365%);
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

.score-shadow{
    position: absolute
}

.container-text-box-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translate(620%, 150%);
    border-radius: 50px;
}

.container-text-box-shadow .topeng-score-shadow{
    position: absolute;
    height: 90%;
    transform: translate(-120%, 20%);
}

</style>