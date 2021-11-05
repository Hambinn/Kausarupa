<template>
    <div class="bg-tema">
      <div class="top-cont">
        <div class="canvas">
          <div class="awan">
            <img src="~/assets/svg/ChoosePage/awan biru.svg" alt="" class="kanan">
            <img src="~/assets/svg/ChoosePage/awan ungu.svg" alt="" class="kiri">
            <img src="~/assets/svg/ChoosePage/awan oren.svg" alt="" class="tengah">
          </div>
          <div class="ChooseOne" >
            <h4>Choose one!</h4>
            <h3>Sisi manusia mana yang ingin kamu jelajahi lebih dulu?</h3>
          </div>
          <div class="tulisan-topeng">
              <transition name="persona">
              <h3 v-show="persona" class="tulisan-persona">Persona</h3>
              </transition>
              <transition name="mamus">
              <h3 v-show="mamus" class="tulisan-mamus">Anima/Animus</h3>
              </transition>
              <transition name="shadow">
              <h3 v-show="shadow" class="tulisan-shadow">Shadow</h3>
              </transition>
          </div>
          <div class="container-volume-persona">
                <img src="../assets/png/umum/volumeon.png" alt="" class="volume-on" @click="volume" ref="volumeBtn">
            </div>
          <div class="topeng">
            <img src="~/assets/svg/ChoosePage/Ma Mus 1.svg" alt="" class="mamus" @mouseover="munculMamus" @mouseleave="ilangMamus" @click="keMamus">
            <img src="~/assets/svg/ChoosePage/Persona 2 1.svg" alt="" class="persona" @mouseover="munculPersona" @mouseleave="ilangPersona" @click="kePersona">
            <img src="~/assets/svg/ChoosePage/Shadow 1.svg" alt="" class="shadow" @mouseover="munculShadow" @mouseleave="ilangShadow" @click="keShadow">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        layout: 'default',
        data(){
            return{
                mamus: false,
                persona: false,
                shadow: false,
                isVolume: true
            }
        },
        methods:{
            munculMamus(){
                this.mamus = true
            },
            ilangMamus(){
                this.mamus = false
            },

            munculPersona(){
                this.persona = true
            },
            ilangPersona(){
                this.persona = false
            },

            munculShadow(){
                this.shadow = true
            },
            ilangShadow(){
                this.shadow = false
            },
            kePersona(){
                this.$router.push('/narasipersona')
            }, 
            keMamus(){
                this.$router.push('/narasimamus')
            },
            keShadow(){
                this.$router.push('/narasishadow')
            },
            volume(){
        this.isVolume = !this.isVolume
        if(this.isVolume){
            this.$refs.volumeBtn.src = require('../assets/png/umum/volumeon.png')
        }else{
            this.$refs.volumeBtn.src = require('../assets/png/umum/volumeoff.png')
        }
    }
        },
        mounted(){
            localStorage.setItem('persona','true')
        }
    }
</script>

<style>
html,body{
    all: unset;
    margin: 0;
    padding: 0;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
}

*{
    padding: 0;
    margin: 0;
}

.container-volume-persona{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-volume-persona .volume-on{
    position: absolute;
    width: 4.16%;
    top: 50%;
    left: 50%;
    transform: translate(1000%, -520%);
    z-index: 5;
    cursor: pointer;
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

.bg-tema{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/svg/ChoosePage/background topeng.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.awan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.awan .kanan{
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(47%,20%)
}
.awan .tengah{
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-6%,-202%)
}
.awan .kiri{
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-59%,-70%)
}

.ChooseOne{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
}

.ChooseOne h4{
    top: 50%;
    left: 50%;
    transform: translate(0%, 135%);
    color: #2A465C;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 4.5vw;
}

.ChooseOne h3{
    transform: translate(0%, 300%);
    font-family: 'Gaegu', cursive;
    font-size: 2vw;
}

.topeng{
    position: absolute;
    height: 100%;
    width: 100%;
}

.topeng .mamus{
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(2%,60%)
}
.topeng .persona{
    height: 35%;
    top: 50%;
    left: 50%;
    transform: translate(0%,45%)
}
.topeng .shadow{
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(5%,56.5%)
}

.mamus:hover{
    cursor: pointer;
}
.persona:hover{
    cursor: pointer;
}
.shadow:hover{
    cursor: pointer;
}

.tulisan-topeng{
    position: absolute;
    height: 100%;
    width: 100%;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
}

.tulisan-persona{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,300%);
    font-size: 2.5vw;
    color: #2A465C;
}

.tulisan-mamus{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-170%,340%);
    font-size: 2.5vw;
    color: #2A465C;
}

.tulisan-shadow{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(200%,300%);
    font-size: 2.5vw;
    color: #2A465C;
}

.mamus-enter-active, .mamus-leave-active{
    transition: all .5s ease;
}

.mamus-enter, .mamus-leave-to{
    opacity: 0;
    transform: translate(-170%, 600%);
}

.persona-enter-active, .persona-leave-active{
    transition: all .5s ease;
}

.persona-enter, .persona-leave-to{
    opacity: 0;
    transform: translate(-50%, 600%);
}

.shadow-enter-active, .shadow-leave-active{
    transition: all .5s ease;
}

.shadow-enter, .shadow-leave-to{
    opacity: 0;
    transform: translate(200%,600%);
}
</style>