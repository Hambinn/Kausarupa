<template>
    <div class="bg-tema">
        <div class="awan">
            <img src="~/assets/svg/ChoosePage/awan biru.svg" alt="" class="kanan">
            <img src="~/assets/svg/ChoosePage/awan oren.svg" alt="" class="tengah">
            <img src="~/assets/svg/ChoosePage/awan ungu.svg" alt="" class="kiri">
        </div>
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



.awan .kanan{
    height: 620px;
    transform: translate(53%,10%);
}
.awan .kiri{
    height: 620px;
    transform: translate(-66%,-170%);
}
.awan .tengah{
    height: 560px;
    transform: translate(-6%,-85%);
}
</style>