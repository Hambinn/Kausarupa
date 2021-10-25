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

                <div class="container-bg-element">
                    <img src="..\assets\png\MamusPage\4. karya\kanan atas.png" alt="" class="atas">
                    <img src="..\assets\png\MamusPage\4. karya\kiri bawah.png" alt="" class="bawah">
                </div>
                <div class="container-bulet">
                    <img src="..\assets\png\MamusPage\4. karya\buletan.png" alt="" class="bulet-1">
                    <img src="..\assets\png\MamusPage\4. karya\buletan.png" alt="" class="bulet-2">
                </div>
                <div class="container-volume-mamus">
                    <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on">
                </div>
                <div class="tombol-next-mamus">
                    <p class="next-mamus">Next</p>
                </div>
                <div class="container-bulet-karya">
                    <img src="..\assets\png\MamusPage\4. karya\buletan.png" alt="" class="bulet-karya">
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

.container-bg-element .atas{
    height: 35%;
    top: 50%;
    left: 50%;
    transform: translate(103.5%, -7.5%); 
}

.container-bg-element .bawah{
    height: 45%;
    top: 50%;
    left: 50%; 
    transform: translate(-180.5%, 105%);
}

.container-bulet{
    position: absolute;
    height: 100%;
    width: 100%;    
}

.container-bulet .bulet-1{
    height: 27%;
    top: 50%;
    left: 50%;
    transform: translate(-170%, 90%); 
}

.container-bulet .bulet-2{
    height: 27%;
    top: 50%;
    left: 50%;
    transform: translate(202%, 190%); 
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

.container-bulet-karya{
    position: absolute;
    height: 100%;
    width: 100%;   
}

.container-bulet-karya .bulet-karya{
    height: 78%;
    top: 50%;
    left: 50%;  
    transform: translate(0%, 17.5%);
}
</style>