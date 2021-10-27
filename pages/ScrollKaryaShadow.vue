<template>
    <div class="bg-skshadow">
      <div class="top-cont">
        <div class="canvas">
          <div class="scroll-karya">
              <img src="~/assets/png/ShadowPage/3. scroll karya/kanan atas (2).png" alt="" class="kan-tas">
              <img src="~/assets/png/ShadowPage/3. scroll karya/kiri bawah (1).png" alt="" class="kir-baw">
          </div>     
          <div class="score">   
            <div class="box-skshadow">
              <div class="text-box-skshadow">
                {{score}} 
              </div>
              <img src="../assets/png/ShadowPage/topeng score (1).png" alt="" class="score-skshadow">
            </div>
          </div>
          <img src="../assets/png/umum/volumeon.png"  alt="" class="volume-shadow3" @click="volume()" ref="volumeBtn">
        </div>  
      </div>
    </div>
</template>

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

.scroll-karya{
    position: absolute;
    height: 100%;
    width: 100%;
}

.scroll-karya .kan-tas{
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(233%,-35%)
}

.scroll-karya .kir-baw{
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-138%,56%)
}

/* score */
.score-skshadow{
    position: absolute;
    height: 100%;
    width: 100%;
}

.box-skshadow{
    position: absolute;
    height: 6%;
    width: 13%;
    background-color: #33485C;
    transform: translate(630%, 160%);
    border-radius: 50px;
}

.box-skshadow .score-skshadow{
    position: absolute;
    height: 90%;
    transform: translate(-50%, 5%);
}

.text-box-skshadow{
    font-size: 3vw;
}

</style>