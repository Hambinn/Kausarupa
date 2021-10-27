<template>
    <div class="bg-karya-shadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-pkshadow">
                    <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header-pkshadow">
                </div>
                <div class="container-back-pkshadow">
                    <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back-pkshadow">
                </div>
                <div class="pilih-jenis">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/kanan atas (1).png" alt="" class="kanan-atas">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/kiri bawah.png" alt="" class="kiri-bawah">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/hole kanan.png" alt="" class="hole-kanan">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/kanan bawah (1).png" alt="" class="kanan-bawah">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/hole tengah.png" alt="" class="hole-tengah">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/hole kiri.png" alt="" class="hole-kiri">
                </div>
                <div class="container-box-pkshadow">
                    <p class="text-box-pkshadow">00</p>
                    <img src="../assets/png/ShadowPage/topeng score putih shadow.png" alt="" class="score-pkshadow">                    
                </div>                
                <div class="container-volume-pkshadow">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-shadow2">
                </div>
            </div>
        </div>
    </div>
</template>

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

.bg-karya-shadow{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/ShadowPage/main bg shadow.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-pkshadow .header-pkshadow{
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-155%, 80%);
}

.container-back-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-pkshadow .back-pkshadow{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}

.pilih-jenis{
    position: absolute;
    height: 100%;
    width: 100%;
}

.pilih-jenis .kanan-atas{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(165%,-57%)
}

.pilih-jenis .kanan-bawah{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(130%,-65%)
}

.pilih-jenis .kiri-bawah{
    height: 72%;
    top: 50%;
    left: 50%;
    transform: translate(-134%,30%)
}

.pilih-jenis .hole-kanan{
    height: 38%;
    top: 50%;
    left: 50%;
    transform: translate(-22%,20%)
}

.pilih-jenis .hole-tengah{
    height: 52%;
    top: 50%;
    left: 50%;
    transform: translate(-45%,-106%)
}

.pilih-jenis .hole-kiri{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(-299%,-104%)
}

.container-volume-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-pkshadow .volume-shadow2{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-box-pkshadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-pkshadow .text-box-pkshadow{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-pkshadow .score-pkshadow{
    width: 38%;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -14%);
}

</style>