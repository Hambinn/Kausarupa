<template>
    <div class="bg-karya-shadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-pkshadow">
                    <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header-pkshadow">
                </div>
                <div class="container-back-pkshadow">
                    <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back-pkshadow" @click="back">
                </div>
                <div class="container-box-pkshadow">
                    <p class="text-box-pkshadow">{{scoreshadow}}</p>
                    <img src="../assets/png/ShadowPage/topeng score putih shadow.png" alt="" class="score-pkshadow">                    
                </div>                
                <div class="container-volume-pkshadow">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-shadow2">
                </div>
                <div class="pilih-jenis">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/kanan atas (1).png" alt="" class="kanan-atas">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/kiri bawah.png" alt="" class="kiri-bawah">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/kanan bawah (1).png" alt="" class="kanan-bawah">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/hole tengah.png" alt="" class="hole-tengah" @click="keVideo">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/hole kanan.png" alt="" class="hole-kanan" @click="keKine">
                    <img src="~/assets/png/ShadowPage/2. pilih jenis/hole kiri.png" alt="" class="hole-kiri" @click="keFoto">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.push('/narasishadow')
        },
        keVideo(){
            this.$router.push('/Shadow/videoShadow')
        },
        keKine(){
            this.$router.push('/Shadow/kineShadow')
        },
        keFoto(){
            this.$router.push('/Shadow/fotoShadow')
        }
    },
    data(){
        return{
            scoreshadow: '0'
        }
    },
    beforeMount(){
            if(!localStorage.getItem('scoreshadow')){
                localStorage.setItem('scoreshadow', 0)
            }
            else{
                this.scoreshadow = Number(localStorage.getItem('scoreshadow'))
            }
        }
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

.container-header-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-pkshadow .header-pkshadow{
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-155%, 80%);
}

.container-back-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
    
}

.container-back-pkshadow .back-pkshadow{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -510%);
    z-index: 5;
    cursor: pointer;
}

.pilih-jenis{
    position: absolute;
    height: 100%;
    width: 100%;
}

.pilih-jenis .kanan-atas{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(165%,-57%)
}

.pilih-jenis .kanan-bawah{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(130%,-65%)
}

.pilih-jenis .kiri-bawah{
    height: 72%;
    top: 50%;
    left: 50%;
    transform: translate(-174%,32%)
}

.pilih-jenis .hole-kanan{
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-8%,-100%)
}

@keyframes hole-kanan{
    0%{transform: translate(-8%,-100%);}
    50%{transform: translate(-8%, -110%);}
    100%{transform: translate(-8%,-100%);}
}

.hole-kanan:hover{
    animation-name: hole-kanan;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    cursor: pointer;
}

.pilih-jenis .hole-tengah{
    height: 52%;
    top: 50%;
    left: 50%;
    transform: translate(-35%,-106%)
}

@keyframes hole-tengah{
    0%{transform: translate(-35%,-106%)}
    50%{transform: translate(-35%,-116%)}
    100%{transform: translate(-35%,-106%)}
}

.hole-tengah:hover{
    animation-name: hole-tengah;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    cursor: pointer;
}

.pilih-jenis .hole-kiri{
    height: 42%;
    top: 50%;
    left: 50%;
    transform: translate(-140%,-188%)
}

@keyframes hole-kiri{
    0%{transform: translate(-140%,-188%)}
    50%{transform: translate(-140%,-198%)}
    100%{transform: translate(-140%,-188%)}
}

.hole-kiri:hover{
    animation-name: hole-kiri;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    cursor: pointer;
}



.container-volume-pkshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-pkshadow .volume-shadow2{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-box-pkshadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
    z-index: 1;
}

.container-box-pkshadow .text-box-pkshadow{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-pkshadow .score-pkshadow{
    width: 38%;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -14%);
}

</style>