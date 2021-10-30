<template>
    <div class="container-finish">
      <div class="top-cont">
        <div class="canvas">
          <div class="container-orang">
            <img src="../assets/svg/LastPage/orang-min.png" alt="" class="OrangLast">
          </div>
          <div class="container-meja-last">
            <img src="../assets/svg/LastPage/meja (1)-min.png" alt="" class="MejaLast">
          </div>
          <div class="container-vas-last">
            <img src="../assets/svg/LastPage/vas bunga-min.png" alt="" class="VasLast">
          </div>
          <div class="container-topeng-last">
            <img src="../assets/svg/LastPage/3 topeng.png" alt="" class="TopengLast">
          </div>
          <div class="container-lemari-last">
            <img src="../assets/svg/LastPage/lemari (1)-min.png" alt="" class="LemariLast">
          </div>
          <div class="container-logo-last">
            <img src="../assets/svg/LastPage/logo kausarupa.png" alt="" class="LogoLast">
          </div>
          <div class="container-jendela-last">
            <img src="../assets/svg/LastPage/jendela (1)-min.png" alt="" class="JendelaLast">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style>
html,body{
    all: unset;
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

.container-finish{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/FinishPage/bg umum last page.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-orang{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-orang .OrangLast{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(106%,-35%);
    z-index: 1;
}

.container-meja-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-meja-last .MejaLast{
    position: absolute;
    height: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-120%,200%);
    z-index: 1;
}

.container-vas-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-vas-last .VasLast{
    position: absolute;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-180%, 30%);
    z-index: 2;
}

.container-topeng-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-topeng-last .TopengLast{
    position: absolute;
    height: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-380%);
}

.container-lemari-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-lemari-last .LemariLast{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-450%,-35%);
}

.container-logo-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-logo-last .LogoLast{
    position: absolute;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(28%,-52%);
    z-index: 2;
}

.container-jendela-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-jendela-last .JendelaLast{
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(70%,5%);
}

</style>