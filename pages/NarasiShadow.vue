<template>
    <div class="bg-shadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-shadow">
                    <img src="~/assets/png/ShadowPage/header shadow.png" alt="" class="header-shadow">
                </div>
                <div class="container-kotak">
                <kotak-biru/>
                </div>
                <div class="narasi">
                    <img src="~/assets/png/ShadowPage/1. narasi/kanan atas.png" alt="" class="kanan_atas">
                    <img src="~/assets/png/ShadowPage/1. narasi/kanan bawah.png" alt="" class="kanan_bawah">
                    <img src="~/assets/png/ShadowPage/1. narasi/mascot narasi.png" alt="" class="mascot-narasi">
                </div>
                <div class="container-box-shadow">
                    <p class="text-box-shadow">{{scoreshadow}}</p>
                    <img src="../assets/png/ShadowPage/topeng score putih shadow.png" alt="" class="score-shadow">                    
                </div>                
                <div class="container-volume-shadow">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-shadow1">
                    <img src="~/assets/svg/ShadowPage/back.svg" alt="" class="back-shadow" @click="back()">
                </div>
                <div class="tombol-next-shadow" @click="next">
                    <p class="next-shadow">Next</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kotakBiru from '../components/Shadow/kotakBiru.vue'
    export default {
        components: { kotakBiru },
        data(){
            return{
                scoreshadow: '0',
            }
        },
        methods:{
            back(){
                this.$router.push('/topeng')
            },
            next(){
                this.$router.push('/pilihkaryashadow')
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

.container-header-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-shadow .header-shadow{
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-155%, 80%);
}

.container-back-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-shadow .back-shadow{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, 160%);
    cursor: pointer;
}

.narasi{
    position: absolute;
    height: 100%;
    width: 100%;
}

.narasi .kanan_atas{
    height: 55%;
    top: 50%;
    left: 50%;
    transform: translate(93%,-7%)
}

.narasi .kanan_bawah{
    height: 63%;
    top: 50%;
    left: 50%;
    transform: translate(5%,49%)
}

.narasi .mascot-narasi{
    height: 190%;
    top: 50%;
    left: 50%;
    transform: translate(55.5%,-39.5%) rotate(-39deg);
}

.container-volume-shadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-shadow .volume-shadow1{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1100%, 160%);
    cursor: pointer;
}

.container-box-shadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-shadow .text-box-shadow{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-shadow .score-shadow{
    width: 38%;
    top: 50%;
    left: 50%;
    transform: translate(-48%, -14%);
}

.tombol-next-shadow{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);
    background: #597FA3;
    border-radius: 11.4%/38.4%;
    cursor: pointer;
}

.tombol-next-shadow .next-shadow{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);
    z-index: 5;
    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.1vw;
    color: white;
}

</style>