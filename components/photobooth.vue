<template>
    <div class="photobooth-container" @click="$emit(`close-modal`)">
        <div class="video-container" @click.stop>
            <video id="videoElement" autoplay="true"/>
            <img :src="`/frame/Frame Photobooth ${frame}.png`" alt="frame" id="skeleton-frame">
            <img :src="`/frame/Frame Photobooth ${frame}.png`" alt="frame" id="frame">
            <canvas id="snapshotCanvas" style="display: none"/>
        </div>
        <div class="control-container" >
            <button id="captureButton" @click="capture" @click.stop>
                Capture
            </button>
            <img src="../assets/png/umum/next.png" alt="" class="next-pho" @click="switchFrame(1)" @click.stop>
            <img src="../assets/png/umum/pevious.png" alt="" class="prev-pho" @click="switchFrame(-1)" @click.stop>
            <a id="link" style="display: none" @click.stop/>
            <button v-show="displayBlackScreen" id="downloadButton" @click="download" @click.stop>
                Download
            </button>
        </div>
    </div>
</template>

<script>
const MAX_FRAME = 5
    export default {
        data(){
            return{
                canvas: undefined,
                ctx: undefined,
                video: undefined,
                frame: 1,
                displayBlackScreen: false,
                newCanvas: undefined,
                audio: undefined,
            }
        },
        mounted(){
            this.setupScreenshot()
            this.startCamera()
            this.preloadImages()
        },
        methods: {
      preloadImages(){
        for (let i = 1; i <= MAX_FRAME; i++){
          new Image().src = `/frame/Frame Photobooth ${this.frame}.png`
        }
      },
      setupScreenshot(){
        this.canvas = document.querySelector("#snapshotCanvas")
        console.log(this.canvas)
        this.ctx = this.canvas.getContext('2d')
        this.video = document.querySelector("#videoElement")
      },
      switchFrame(n){
        if (this.frame + n < 1){
          this.frame += MAX_FRAME+n
        } else if (this.frame + n > MAX_FRAME) {
          this.frame = this.frame%MAX_FRAME + 1
        } else {
          this.frame = this.frame+n
        }
      },
      capture(){
        var newContext
        var scaleFactor
        if (window.matchMedia("(orientation: portrait)").matches){
          scaleFactor = 720/this.canvas.width //How much we scale?
        } else {
          scaleFactor = 1280/this.canvas.width //How much we scale?
        }
        this.newCanvas = document.createElement('canvas')
        newContext = this.newCanvas.getContext('2d')
        this.newCanvas.width = this.canvas.width * scaleFactor
        this.newCanvas.height = this.canvas.height * scaleFactor
        console.log(scaleFactor)
        console.log(this.canvas.height)
        console.log(this.canvas.width)
        console.log(this.newCanvas.height)
        console.log(this.newCanvas.width)
        newContext.scale(scaleFactor, scaleFactor)
        this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)
        newContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)
        var frameObj = new Image()
        frameObj.src = `/frame/Frame Photobooth ${this.frame}.png`
        frameObj.onload = () => {
          this.ctx.drawImage(frameObj, 0, 0, this.canvas.width, this.canvas.height)
          newContext.drawImage(frameObj, 0, 0, this.canvas.width, this.canvas.height)
        }
        this.canvas.style.display = "block"
        this.displayBlackScreen = true
        setTimeout(() => {
          this.canvas.style.display = "none"
          this.displayBlackScreen = false
        }, 5000)
      },
      download(){
        var link = document.getElementById('link')
        link.setAttribute('download', 'Oleh2 GEP Eksplorasa.png')
        link.setAttribute('href', this.newCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream"))
        link.click()
      },
      startCamera(){
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({video: {
              width: { ideal: 1280 },
              height: { ideal: 720 },
              facingMode: "user"
            }})
            .then(stream => {
              this.video.srcObject = stream
              this.video.addEventListener('loadedmetadata', () => {
                this.canvas.height = this.video.clientHeight
                this.canvas.width = this.video.clientWidth
              })
            })
            .catch(e => {
              console.log("Something went wrong!")
              console.log(e)
            })
        }
      },
    },
    }
</script>
<style scoped>
.photobooth-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.control-container{
    position: absolute;
    height: 100%;
    width: 100%;
    
}

.next-pho{
    height: 6%;
    transform: translate(1200%,600%);
    cursor: pointer;
}
.prev-pho{
    height: 6%;
    transform: translate(-1200%,600%);
    cursor: pointer;
}


.video-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

}
button {
  position: absolute;
  font-family: 'Tf Grotesk-italic';
  font-size: 1.7vw;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 7px 20px;
  height: 7%;
  width: 27%;
  background-image: linear-gradient(#5678A0,#8FA1B3);
  color: white ;
  cursor: pointer;
}



#prev{
  left: 5%;
  bottom: 15%;

}
#next{
  right: 5%;
  bottom: 15%;
  
}
#videoElement {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  object-fit: contain;
}
#captureButton, #downloadButton {
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  
}
#snapshotCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
#skeleton-frame {
  object-fit: contain;
  opacity: 0;
  height: 60vh;
}
#frame {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
  z-index: 99999;
  height: 60vh;
  
}
</style>