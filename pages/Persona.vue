<template>
    <div class="container-persona">
        <div class="container-kotak">
            <kotak-item/>
        </div>
        <div class="tombol-next-persona">
            <p class="next-persona">Next</p>
        </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
import kotakItem from '../components/Persona/kotakItem.vue'
    export default {
    components: { kotakItem },
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
        
}


.container-persona{
    text-align: center;
    background-image: url("../assets/png/PersonaPage/bgPersona.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    }

.tombol-next-persona{
    position: absolute;
    width: 305px;
    height: 80px;
    left: 1430px;
    top: 850px;

    background: #597FA3;
    border-radius: 35px;
}

.tombol-next-persona .next-persona{
    position: absolute;
    width: 116px;
    height: 58px;
    left: 90px;
    top: 10px;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 58px;
/* identical to box height */


color: #fff;
}
</style>