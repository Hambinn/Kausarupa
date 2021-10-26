<template>
    <div class="bg-skshadow">
        <div class="top-cont">
            <div class="canvas">
                <div class="score">
                    <div class="box-skshadow">
                        <div class="text-box-skshadow">
                         {{score}}
                        </div>
                    </div>
                    <img src="../assets/png/ShadowPage/topeng score (1).png" alt="" class="score-skshadow">
                </div>
                <div class="scroll-karya">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/kanan atas (2).png" alt="" class="kan_tas">
                    <img src="~/assets/png/ShadowPage/3. scroll karya/kiri bawah (1).png" alt="" class="kir_baw">
                </div>
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

.scroll-karya .kan_tas{
    height: 55%;
    top: 50%;
    left: 50%;
    transform: translate(93%,-3%)
}

.scroll-karya .kir_baw{
    height: 63%;
    top: 50%;
    left: 50%;
    transform: translate(5%,49%)
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
    height: 20%;
    transform: translate(-160%, -100%);
}

.text-box-skshadow{
    font-size: 3vw;
}

</style>