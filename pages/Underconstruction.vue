<template>
    <div class="container-underconstruction">
      <div class="top-cont">
        <div class="canvas">
          <div class="container-monitor">
            <img src="../assets/svg/UnderConstruction/pc.png" alt="" class="monitor">
          </div>
          <div class="container-bintang-undercons">
            <img src="../assets/gif/bintang oren.GIF" alt="" class="oren">
            <img src="../assets/gif/bintang pink.GIF" alt="" class="ungu">
          </div>
          <div class="container-hewan">
            <img src="../assets/png/UnderConstruction/kiri atas.png" alt="" class="dino">
            <img src="../assets/png/UnderConstruction/bawah kanan.png" alt="" class="kelinci">
          </div>
          <div class="container-oops">
              <h1 class="oops">OOPS!</h1>
              <h2 class="this">This website is under construction</h2>
          </div>
          <div class="container-kotak-countdown">
            <img src="../assets/png/UnderConstruction/countdown (1).png" alt="" class="kotak-ungu">
          </div>
          <div class="container-countdown">
            <div class="days">
              {{days}}D
            </div>
            <div class="hours">
              {{hour}}H
            </div>
            <div class="minutes">
              {{minute}}M
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
const gepDate = new Date("Nov 8, 2021 21:00:00").getTime();
    export default {
        data(){
          return{
            days: 0,
            hour: 0,
            minute:0,
            timerInterval: null
          }
        },
        mounted(){
          this.updateTimer()
          this.startCountdown()
        },
        methods: {
          updateTimer(){
            const now = new Date().getTime();
            const remainingTime = gepDate - now
            this.days = Math.floor(remainingTime/ (1000*60*60*24))
            this.hour = Math.floor((remainingTime % (1000*60*60*24)) / (1000 * 60 * 60))
            this.minute = Math.floor((remainingTime %(1000*60 * 60))/(1000*60))
          },
          startCountdown(){
            this.timerInterval = setInterval(()=> this.updateTimer(), 1000 * 60 * 60)
          }
        }
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

.container-countdown{
    position: absolute;
    display: flex;
    height: 100%;
    width: 25%;
    font-size: 3vw;
    text-align: center;
    font-family: Tf Grotesk;
    top: 49%;
    left: 38%;
    justify-content: space-between;
    color: white;
}

.container-kotak-countdown{
  position: absolute;
  height: 100%;
  width: 100%;
}

.kotak-ungu{
  height: 25%;
  top: 50%;
  left: 50%;
  transform: translate(90%, 160%);
}

</style>