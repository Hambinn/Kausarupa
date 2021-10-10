<template>
    <div class="bg-tema">
        <div class="awan">
            <img src="~/assets/svg/ChoosePage/awan biru.svg" alt="" class="kanan">
            <img src="~/assets/svg/ChoosePage/awan oren.svg" alt="" class="tengah">
            <img src="~/assets/svg/ChoosePage/awan ungu.svg" alt="" class="kiri">
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

.bg-tema{
    text-align: center;
    background-image: url("~/assets/svg/ChoosePage/background (3).svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    }

.awan{
    position: absolute;
}
.awan .kanan{
    height: 476px;
    transform: translate(287.9%,99%);
}
.awan .kanan{
    height: 350px;
    transform: translate(275%,110%);
}
</style>