<template>
    <div class="bg-skor-surat">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-surat">
                    <img src="..\assets\png\FinishPage\Surat\amplop.png" alt="" class="surat">
                </div>
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back">
                </div>
                <div class="container-kertas">
                    <img src="..\assets\png\FinishPage\Surat\kertas.png" alt="" class="kertas">
                </div>
                <div class="container-pena">
                    <img src="..\assets\png\FinishPage\Surat\pena.png" alt="" class="pena">
                </div>                
                <div class="container-volume-surat">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on">
                </div>
                <div class="container-tinta">
                    <img src="..\assets\png\FinishPage\Surat\tint.png" alt="" class="tinta">
                </div>
                <div class="container-isi-surat">
                    <p class="judul-surat">Surat Cinta</p>
                    <p class="isi-surat">ini katanya ada surat kalo uda selesai gep-nya tapi isinya gatau apa ya siapa yang membuat isi surat semangat kru</p>
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

.bg-skor-surat{
    position: absolute;
    text-align: center;
    background-image: url("..\assets\png\FinishPage\Surat\background surat-min (1).png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-volume-surat{
    position: absolute;
    height: 100%;
    width: 100%;
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

.container-volume-surat .volume-on{
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1060%, 160%);
}

.container-surat{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-surat .surat{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-56.5%, 5%);
}

.container-kertas{
    position: absolute;
    height: 100%;
    width: 100%;    
}

.container-kertas .kertas{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-1%, 8.5%);
}

.container-pena{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-pena .pena{
    height: 87%;
    top: 50%;
    left: 50%;
    transform: translate(105%, 8%);
}

.container-tinta{
    position: absolute;
    height: 100%;
    width: 100%;     
}

.container-tinta .tinta{
    height: 28%;
    top: 50%;
    left: 50%;   
    transform: translate(-200%, 230%);
}

.container-isi-surat{
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: Tf Grotesk;
    font-weight: lighter;
}

.container-isi-surat .judul-surat{
    font-size: 4vw;
    transform: translate(-2%,330%);
}

.container-isi-surat .isi-surat{
    margin: 10% 40%;
    font-size: 1.5vw;
    transform: translate(-4%,90%);
}
</style>