<template>
    <div class="bg-kk-shadow">
        <div class="container_header">
            <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header">
            <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back">
        </div>
        <div class="tombol-next-kk-shadow">
            <p class="next-kk-shadow">Next</p>
        </div>
        <div class="container-kk-pohon">
            <img src="../assets/svg/ShadowPage/4. kumpulan karya - akhir/kanan-atas-kk.svg" alt="" class="kanan-atas-kk">
            <img src="../assets/svg/ShadowPage/4. kumpulan karya - akhir/kanan-bawah-kk.svg" alt="" class="kanan-bawah-kk">
        </div>
    </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
}

.bg-kk-shadow{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/ShadowPage/main bg shadow.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }


.tombol-next-kk-shadow{
    position: fixed;
    height: 6.5%;
    width: 13%;
    transform: translate(625%, 1365%);
    background: #597FA3;
    border-radius: 35px;
}

.tombol-next-kk-shadow .next-kk-shadow{
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
}

.container-kk-pohon{
    position: absolute;
    height: 100%;
    width: 100%;
}

</style>