<template>
    <div class="bg-tema">
        <div class="awan">
            <img src="~/assets/svg/ChoosePage/awan biru.svg" alt="" class="kanan">
            <img src="~/assets/svg/ChoosePage/awan ungu.svg" alt="" class="kiri">
            <img src="~/assets/svg/ChoosePage/awan oren.svg" alt="" class="tengah">
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
    overflow: hidden;
    }

.awan{
    position: relative;
}

.awan .kanan{
    position: absolute;
    height: 1000px;
    transform: translate(-2%,22%)
}
.awan .tengah{
    position: absolute;
    height: 800px;
    transform: translate(-59%,55%)
}
.awan .kiri{
    position: absolute;
    height: 1000px;
    transform: translate(-110%,31%)
}
</style>