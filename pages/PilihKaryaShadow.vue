<template>
    <div class="bg-karya-shadow">
        <div class="pilih-jenis">
            <img src="~/assets/png/ShadowPage/2. pilih jenis/kanan atas (1).png" alt="" class="kanan-atas">
            <img src="~/assets/png/ShadowPage/2. pilih jenis/kiri bawah.png" alt="" class="kiri-bawah">
            <img src="~/assets/png/ShadowPage/2. pilih jenis/hole kanan.png" alt="" class="hole-kanan">
            <img src="~/assets/png/ShadowPage/2. pilih jenis/kanan bawah (1).png" alt="" class="kanan-bawah">
            <img src="~/assets/png/ShadowPage/2. pilih jenis/hole tengah.png" alt="" class="hole-tengah">
            <img src="~/assets/png/ShadowPage/2. pilih jenis/hole kiri.png" alt="" class="hole-kiri">
        </div>
        <div class="container-header-shadow">
            <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header-shadow">
            <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="tombol-back">
        </div>
        <div class="scoreshadow">
            <div class="container-box-shadow">
                {{score}}
            </div>
            <img src="../assets/png/ShadowPage/topeng score (1).png" alt="" class="topengscore-shadow">
        </div>
    </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
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

.pilih-jenis{
    position: absolute;
    height: 100%;
    width: 100%;
}

.pilih-jenis .kanan-atas{
    height: 47%;
    top: 50%;
    left: 50%;
    transform: translate(160%,-81%)
}

.pilih-jenis .kanan-bawah{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(131%,-84%)
}

.pilih-jenis .kiri-bawah{
    height: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-108%,18%)
}

.pilih-jenis .hole-kanan{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(-40%,-5%)
}

.pilih-jenis .hole-tengah{
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-40%,-140%)
}

.pilih-jenis .hole-kiri{
    height: 46%;
    top: 50%;
    left: 50%;
    transform: translate(-263%,-113%)
}

.container-header-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-shadow .header-shadow{
    height: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-135%,20%);
}

.container-header-shadow .tombol-back{
    height: 6%;
    top: 50%;
    left: 50%;
    transform: translate(-1650%,-50%);
}

/* score */
.scoreshadow{
    position: absolute
}

.container-box-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translate(620%, 150%);
    border-radius: 50px;
}

.container-box-shadow .topengscore-shadow{
    position: absolute;
    height: 90%;
    transform: translate(-150%, 20%);
}

</style>