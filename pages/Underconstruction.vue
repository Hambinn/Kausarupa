<template>
    <div class="container-underconstruction">
      <div class="top-cont">
        <div class="canvas">
          <div class="container-monitor">
            <img src="..\assets\svg\UnderConstruction\pc.png" alt="" class="monitor">
          </div>
          <div class="container-bintang-undercons">
            <img src="..\assets\png\UnderConstruction\bintang oren.png" alt="" class="oren">
            <img src="..\assets\png\UnderConstruction\bintang pink.png" alt="" class="ungu">
          </div>
          <div class="container-hewan">
            <img src="..\assets\png\UnderConstruction\kiri atas.png" alt="" class="dino">
            <img src="..\assets\png\UnderConstruction\bawah kanan.png" alt="" class="kelinci">
          </div>
          <div class="container-oops">
              <h1 class="oops">OOPS!</h1>
              <h2 class="this">This website is under construction</h2>
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
    margin: 0;
    padding: 0;
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
.container-underconstruction{
    position: absolute;
    background-position: center;
    background-image: url("../assets/svg/UnderConstruction/Copy of bg panjang 16_9.png");
    background-attachment: fixed;    
    overflow: hidden;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    }

.container-monitor{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-monitor img{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(-50%, -135%);
}

.container-bintang-undercons{
    position: absolute;
    height: 100%;
    width: 100%;
}


.container-bintang-undercons .ungu{
    top: 50%;
    left: 50%;
    height: 9%;
    transform: translate(1300%, 200%);
}

.container-bintang-undercons .oren{
    top: 50%;
    left: 50%;
    height: 12%;
    transform: translate(300%, 250%);
}
.container-hewan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-hewan .dino{
    top: 50%;
    left: 50%;
    height: 40%;
    transform: translate(10%, 100%);
}

.container-hewan .kelinci{
    top: 50%;
    left: 50%;
    height: 40%;
    transform: translate(160%, 140%);
}

.container-oops{
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: Tf Grotesk-italic;
    font-weight: lighter;
}

.container-oops .oops{
    transform: translate(0%, 770%);
    font-size: 4vw;
}

.container-oops .this{
    transform: translate(0%, 1340%);
    font-size: 2.3vw;
}

</style>