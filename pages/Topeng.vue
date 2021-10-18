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
    position: absolute;
    text-align: center;
    background-image: url("~/assets/svg/ChoosePage/background topeng.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.awan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.awan .kanan{
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(47%,20%)
}
.awan .tengah{
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-6%,-202%)
}
.awan .kiri{
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-59%,-70%)
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
    font-size: 5.5vw;
    line-height: 8vw;
    text-align: center;
}

.topeng{
    position: absolute;
    height: 100%;
    width: 100%;
}

.topeng .mamus{
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(2%,60%)
}
.topeng .persona{
    height: 35%;
    top: 50%;
    left: 50%;
    transform: translate(0%,45%)
}
.topeng .shadow{
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(5%,56.5%)
}

</style>