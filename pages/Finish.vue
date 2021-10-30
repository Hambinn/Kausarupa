<template>
    <div class="container-finish">
      <div class="top-cont-finish">
        <div class="canvas-finish">
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
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style>

html body{
    all: unset
}

*{
        padding: 0;
        margin: 0;
        
}

.top-cont-finish{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 56.25%;
}

.container-finish{
    position: absolute;
    text-align: center;
    background-image: url("../assets/png/FinishPage/bg umum last page.png");
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
    height: 65%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-52%);
}

.container-meja-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-meja-last .MejaLast{
    position: absolute;
    height: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-100%,150%);
}

.container-vas-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-vas-last .VasLast{
    position: absolute;
    height: 65%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-52%);
}

.container-topeng-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-topeng-last .TopengLast{
    position: absolute;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(0%,0%);
}

.container-lemari-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-lemari-last .LemariLast{
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-52%);
}

.container-logo-last{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-logo-last .LogoLast{
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-52%);
}
</style>