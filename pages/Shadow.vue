<template>
    <div class="bg-shadow">
        <div class="assets">
            <img src="~/assets/svg/ShadowPage/awan biru (1).svg" alt="" class="awan">
            <img src="~/assets/svg/ShadowPage/v_pohon_1.svg" alt="" class="pohon1">
        </div>
    </div>
</template>

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

.assets{
    position: absolute;
    height: 100%;
    width: 100%;
}

.assets .awan{
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(47%,20%)
}
.assets .pohon1{
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(47%,20%)
}
</style>