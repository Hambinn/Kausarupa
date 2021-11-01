<template>
    <div class="bg-karya-mamus">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-header-mamus">
                    <img src="../assets/png/MamusPage/header mamus.png" alt="" class="header-mamus">
                </div>      
                <div class="container-bg-element">
                    <img src="../assets/png/MamusPage/2. pilih/atas.png" alt="" class="atas">
                    <img src="../assets/png/MamusPage/2. pilih/bawah.png" alt="" class="bawah">
                </div>
                <div class="container-back-mamus">
                    <img src="../assets/svg/PersonaPage/keyboard_backspace.svg" alt="" class="back" @click="back">
                </div>
                <div class="container-volume-mamus">
                    <img src="~/assets/png/umum/volumeon.png" alt="" class="volume-on" @click="volume" ref="volumeBtn">
                </div>
                <div class="pilih-tema-mamus">
                    <img src="../assets/png/MamusPage/2. pilih/king.png" alt="" class="king" @click="toKine">
                    <img src="../assets/png/MamusPage/2. pilih/kq.png" alt="" class="kq" @click="toVideo">
                    <img src="../assets/png/MamusPage/2. pilih/queen.png" alt="" class="queen" @click="toFoto">
                </div>
                <div class="container-box-mamus">
                    <p class="text-box-mamus">{{scoremamus}}</p>
                    <img src="../assets/png/MamusPage/topeng score putih mamus.png" alt="" class="topeng-score-mamus">                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isVolume: true,
                scoremamus: '0'
            }
        },
        methods:{
            toKine(){
                this.$router.push('/Mamus/kineMamus')
            },
            toVideo(){
                this.$router.push('/Mamus/videoMamus')
            },
            toFoto(){
                this.$router.push('/Mamus/fotoMamus')
            },
            back(){
                this.$router.push('/narasimamus')
            },
        volume(){
            this.isVolume = !this.isVolume
            if(this.isVolume){
                this.$refs.volumeBtn.src = require('~/assets/png/umum/volumeon.png')
                console.log('masuk on')
            }else{
                this.$refs.volumeBtn.src = require('~/assets/png/umum/volumeoff.png')
                console.log('masuk off')
            }
        },
        },
        beforeMount(){
            if(!localStorage.getItem('scoremamus')){
                localStorage.setItem('scoremamus', 0)
            }
            else{
                this.scoremamus = Number(localStorage.getItem('scoremamus'))
            }
        }
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
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-box-mamus{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.5%;
    width: 15.5%;
    background-color: #30455A;
    transform: translate(160%, -510%);
    border-radius: 14.6%/53.6%;
}

.container-box-mamus .text-box-mamus{
    position: absolute;
    text-align: justify;
    font-size: 5.6vh;
    font-family: Tf Grotesk;
    top: 50%;
    left: 50%;
    transform: translate(24%, -55%);
    color: white;
}

.container-box-mamus .topeng-score-mamus{
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-33%, -28%);
}

.container-back-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-back-mamus .back{
    position: absolute;
    width: 4.2%;
    top: 50%;
    left: 50%;
    transform: translate(-1100%, -520%);
    z-index: 5;
    cursor: pointer;
}

.container-bg-element{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bg-element .atas{
    height: 25.2%;
    top: 50%;
    left: 50%;
    transform: translate(50%, 15%);
}

.container-bg-element .bawah{
    height: 72.8%;
    top: 50%;
    left: 50%;
    transform: translate(13%, -4%);
}

.pilih-tema-mamus{
    position: absolute;
    height: 100%;
    width: 100%;
    
}

.pilih-tema-mamus .king{
    position: absolute;
    height: 62%;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -25%);
    z-index: 5;
    
}

.king:hover{
    cursor: pointer;
    z-index: 10;
}

.pilih-tema-mamus .kq{
    position: absolute;
    height: 68%;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -32%);
    z-index: 5;
}

.kq:hover{
    cursor: pointer;
    z-index: 10;
}

.pilih-tema-mamus .queen{
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-158%, -32%);
    z-index: 5;
    
}

.queen:hover{
    cursor: pointer;
    z-index: 10;
    
}
</style>