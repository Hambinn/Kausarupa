<template>
    <div class="bg-tema">
        <div class="awan">
            <img src="~/assets/svg/ChoosePage/awan biru.svg" alt="" class="kanan">
            <img src="~/assets/svg/ChoosePage/awan ungu.svg" alt="" class="kiri">
            <img src="~/assets/svg/ChoosePage/awan oren.svg" alt="" class="tengah">
        </div>
        <div class="ChooseOne" @click.stop>
            <h4>Choose one!</h4>
        </div>
        <div class="topeng">
            <img src="~/assets/svg/ChoosePage/Ma Mus 1.svg" alt="" class="mamus">
            <img src="~/assets/svg/ChoosePage/Persona 2 1.svg" alt="" class="persona">
            <img src="~/assets/svg/ChoosePage/Shadow 1.svg" alt="" class="shadow">
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
    transform: translate(-1%,22%)
}
.awan .tengah{
    position: absolute;
    height: 800px;
    transform: translate(-58%,55%)
}
.awan .kiri{
    position: absolute;
    height: 1000px;
    transform: translate(-110%,31%)
}

.ChooseOne{
    border-radius: 25px;
    position: absolute;
    width: 800px;
    height: 530px;
    left: 960px;
    top: 400px;
    transform: translate(-50%, -55%);
    color: #466584;

    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 150px;
    text-align: center;
}

.topeng{
    position: relative;
}

.topeng .mamus{
    position: absolute;
    height: 500px;
    transform: translate(-140%,60%)
}
.topeng .persona{
    position: absolute;
    height: 350px;
    transform: translate(-50%,90%)
}
.topeng .shadow{
    position: absolute;
    height: 500px;
    transform: translate(45%,58%)
}

</style>