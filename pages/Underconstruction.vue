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
              <h1 class="oops">Sorry, Kausarupa is closed</h1>
              <h2 class="this">Thank you for coming!</h2>
          </div>
        </div>
      </div>
      <rcp/>
    </div>
</template>

<script>
import rcp from '../components/rcp.vue';
const gepDate = new Date("Nov 8, 2021 20:45:00").getTime();
    export default {
      
  components: { rcp },
        data(){
          return{
            days: 0,
            hour: 0,
            minute:0,
            second:0,
            distance:0,
            timerInterval: null
          }
        },
        mounted(){
          this.updateTimer()
          this.startCountdown()
          const now = new Date().getTime();
          this.distance = gepDate - now;
          this.countDownTime()
        },
        methods: {
          updateTimer(){
            const now = new Date().getTime();
            const remainingTime = gepDate - now
            this.days = Math.floor(remainingTime/ (1000*60*60*24))
            this.hour = Math.floor((remainingTime % (1000*60*60*24)) / (1000 * 60 * 60))
            this.minute = Math.floor((remainingTime %(1000*60 * 60))/(1000*60))
            this.second = Math.floor((remainingTime % (1000*60))/1000)
            this.startCountdown()
          },
          startCountdown(){
            this.timerInterval = setInterval(()=> this.updateTimer(), 1000 * 60 * 60)
          },
          countDownTime(){
            if(this.distance > 0){
              setTimeout(()=>{
                this.distance -=1
                this.countDownTime()
              }, 1000)
            }
            this.updateTimer()
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
    transform: translate(0%, 470%);
    font-size: 4vw;
}

.container-oops .this{
    transform: translate(0%, 900%);
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