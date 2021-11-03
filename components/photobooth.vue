<template>
    <div class="photobooth-container">
        <div class="video-container">
            <video id="videoElement" autoplay="true"/>
            <img :src="`~assets/frame/Frame Photobooth ${frame}.png`" alt="frame" id="skeleton-frame">
            <img :src="`~assets/frame/Frame Photobooth ${frame}.png`" alt="frame" id="frame">
            <canvas id="snapshotCanvas" style="display: none"/>
        </div>
        <div class="control-container">
            <button id="captureButton" @click="capture">
                Capture
            </button>
            <button id="prev" @click="switchFrame(-1)">
                Prev Frame
            </button >
            <button id="next" @click="switchFrame(1)">
                Next Frame
            </button>
            <a id="link" style="display: none"/>
            <button v-show="displayBlackScreen" id="downloadButton" @click="download">
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
            
        },
        methods:{
            preloadImages(){
                for(let i =1; i<=MAX_FRAME;i++){
                    new Image().src = `~assets/frame/Frame Photobooth ${this.frame}.png`
                }
            },
            setupScreenshot(){
                this.canvas = document.querySelector("#snapshotCanvas")
                this.ctx = this.canvas.getContext('2d')
                this.video = document.querySelector("#videoElement")
            },
            switchFrame(n){
                if(this.frame + n<1){
                    this.frame+= MAX_FRAME +n
                }else if(this.frame + n> MAX_FRAME){
                    this.frame = this.frame % MAX_FRAME +1
                }else{
                    this.frame = this.frame +n
                }
            },
            capture(){
                var newContext;
                var scaleFactor;
                scaleFactor = 1280/this.canvas.width
                this.newCanvas = document.createElement('canvas')
                newContext = this.newCanvas.getContext('2d')  
                this.newCanvas.width = this.canvas.width * scaleFactor
                this.newCanvas.height = this.canvas.height * scaleFactor
                newContext.scale(scaleFactor, scaleFactor)
                this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)
                newContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)

                var frameObj = new Image()
                frameObj.src = `~assets/frame/Frame Photobooth ${this.frame}.png`

                frameObj.onload = () => {
                    this.ctx.drawImage(frameObj, 0, 0, this.canvas.width, this.canvas.height)
                    newContext.drawImage(frameObj, 0, 0, this.canvas.width, this.canvas.height)
                }

                this.canvas.style.display = "block"
                this.displayBlackScreen = true
                setTimeout(()=>{
                    this.canvas.style.display = "none"
                    this.displayBlackScreen = false
                },500)
            },
            download(){
                var link = document.getElementById('link')
                link.setAttribute('download','Oleh2 GEP Kausarua.png')
                link.setAttribute('href',this.newCanvas.toDataUrl("image/png").replace("image/png", "image/octet-stream"))
                link.click()
            },
            startCamera(){
                if(navigator.mediaDevices.getUserMedia){
                    navigator.mediaDevices.getUserMedia({
                        video:{
                            width: {ideal: 1280},
                            height: {ideal: 720},
                            facingMode: "user"
                        }
                    }).then(stream =>{
                        this.video.srcObject = stream
                        this.video.addEventListener('loadmetadata',()=>{
                            this.canvas.height = this.video.clientHeight
                            this.canvas.width = this.video.clientWidth
                        })
                    }).catch(e=>{
                        console.log("something went wrong!")
                        console.log(e)
                    })
                }
            }
        }
    }
</script>

