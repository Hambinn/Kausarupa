<template>
    <div class="bg-karya-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-mamus">
                    <img src="../assets/png/MamusPage/header mamus.png" alt="" class="header-mamus">
                </div>
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back">
                </div>

                <div class="container-volume-mamus">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on">
                </div>
                <div class="container-asep-mamus">
                    <img src="..\assets\gif\asep pink.GIF" alt="" class="asep-1">
                    <img src="..\assets\gif\asep.GIF" alt="" class="asep-2">
                </div>
                <div class="container-bg-element">
                    <img src="..\assets\png\MamusPage\3. scroll\kanan.png" alt="" class="kanan">
                    <img src="..\assets\png\MamusPage\3. scroll\kiri.png" alt="" class="kiri">
                </div>
                <div class="tombol-next-mamus">
                    <p class="next-mamus">Next</p>
                </div>                
                <div class="container-box-mamus">
                    <p class="text-box-mamus">00</p>
                    <img src="../assets/png/MamusPage/topeng score putih mamus.png" alt="" class="topeng-score-mamus">                    
                </div>   
            </div>
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

.bg-karya-mamus{
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

.container-header-mamus .header-mamus{
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-85%, 70%);
}

.container-volume-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-mamus .volume-on{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-box-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-mamus .text-box-mamus{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-mamus .topeng-score-mamus{
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-33%, -28%);
}

.container-back-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-mamus .back{
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1050%, 160%);
}

.container-bg-element{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-bg-element .kanan{
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(168%, 20%);
}

.container-bg-element .kiri{
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-165%, 18%);
}

.container-asep-mamus{
    position: absolute;
    height: 100%;
    width: 100%; 
}

.container-asep-mamus .asep-1{
    height: 30%;
    top: 50%;
    left: 50%;
    transform: rotate(180deg) translate(0%, -200%);
}

.container-asep-mamus .asep-2{
    height: 30%;
    top: 50%;
    left: 50%;
    transform:translate(0%, 30%);
}   

.tombol-next-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7%;
    width: 14%;
    transform: translate(230%, 454%);

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
    font-size: 2.1vw;
    color: white;
}
</style>