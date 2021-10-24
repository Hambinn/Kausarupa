<template>
    <div class="bg-narasi-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-mamus">
                    <img src="../assets/png/MamusPage/header mamus.png" alt="" class="header">
                </div>
                <div class="tombol-next-mamus">
                    <p class="next-mamus">Next</p>
                </div>
                <div class="container-kotak-mamus">
                    <kotak-pink/>          
                </div>
                <div class="container-teh-kiri-depan">
                    <img src="../assets/png/MamusPage/1. narasi/kiri depan.png" alt="" class="teh">
                </div>
                <div class="container-jamur-kanan-belakang">
                    <img src="../assets/png/MamusPage/1. narasi/kanan belakang.png" alt="" class="jamur">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kotakPink from '../components/Mamus/kotakPink.vue'
    export default {
  components: { kotakPink },
        
    }
</script>

<style>
html,body{
    all: unset;
    margin: 0;
    padding: 0;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
}

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

.bg-narasi-mamus{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/MamusPage/background mamus.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-header-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-header-mamus .header{
    width: 37%;
    top: 50%;
    left: 50%;
    transform: translate(-65%,13%);
}

.container-jamur-kanan-belakang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-jamur-kanan-belakang .jamur{
    width: 44.3%;
    top: 50%;
    left: 50%;
    transform: translate(63%,20%);
}

.container-teh-kiri-depan{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 4;
}

.container-teh-kiri-depan .teh{
    width: 29.7%;
    top: 50%;
    left: 50%;
    transform: translate(-61%,14%);
}

.tombol-next-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 8.4%;
    width: 15.88%;
    transform: translate(180%, 400%);

    background: #597FA3;
    border-radius: 11.4%/38.4%;
}

.tombol-next-mamus .next-mamus{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3vw;
    color: white;
}

</style>