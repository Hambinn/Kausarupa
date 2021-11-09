<template>
    <div class="bg-skshadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-skshadow">
                    <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header-skshadow">
                </div>
                <div class="container-back-skshadow">
                    <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back-skshadow">
                </div>
                <div class="scroll-karya">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/kanan atas (2).png" alt="" class="kan-tas">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/kanan bawah.png" alt="" class="kan-baw">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/tangga.png" alt="" class="tangga">                
                </div>
                <div class="container-box-skshadow">
                    <p class="text-box-skshadow">00</p>
                    <img src="../assets/png/ShadowPage/topeng score putih shadow.png" alt="" class="score-skshadow">                    
                </div>                
                <div class="container-volume-skshadow">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-shadow3">
                </div>
                <div class="tombol-next-skshadow">
                    <p class="next-skshadow">Next</p>
                </div>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import rcp from '../components/rcp.vue'
export default {
  components: { rcp },
    
}
</script>

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

.bg-skshadow{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/ShadowPage/main bg shadow.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-skshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-skshadow .header-skshadow{
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-155%, 80%);
}

.container-back-skshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-skshadow .back-skshadow{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}

.scroll-karya{
    position: absolute;
    height: 100%;
    width: 100%;
}

.scroll-karya .kan-tas{
    height: 45%;
    top: 50%;
    left: 50%;
    transform: translate(199%,11%)
}

.scroll-karya .kan-baw{
    height: 43%;
    top: 50%;
    left: 50%;
    transform: translate(67%,113%)
}

.scroll-karya .tangga{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-14%,-46%)
}

.container-volume-skshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-skshadow .volume-shadow3{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-box-skshadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-skshadow .text-box-skshadow{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-skshadow .score-skshadow{
    width: 38%;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -14%);
}

.tombol-next-skshadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);

    background: #597FA3;
    border-radius: 11.4%/38.4%;
}

.tombol-next-skshadow .next-skshadow{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.1vw;
    color: white;
}

</style>