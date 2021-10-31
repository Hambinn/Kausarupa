<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="tulisan" @click.stop>
            <div class="penjelasan">
            <h1 class="title">{{title}}</h1>
            <br>
            <h1 class="by">{{nama}}</h1>
            <br>
            <p class="desc">{{caption}}</p>
            </div>
        </div>
        <div class="swiper-container" >
            <video-player :src="vid" alt="" @click.stop class="video"/>
        </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        data(){
            return{
                swiperOptionv:{
                    direction: 'vertical',
                    pagination:{
                        el: '.swiper-pagination-v',
                        clickable: true
                    }
                },
            }
        },
        methods:{
        },
        props: ['title','nama','caption','vid','karlength'],
        components:{
            Swiper,
            SwiperSlide,
            VideoPlayer
        },

    }
</script>


<style  scoped>



.container-karya{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-karya img{
    max-width: 30%;
    transform: translate(-50%, 20%);
    
}


.tulisan{
position: absolute;
width: 27%;
height: 54%;
left: 50%;
top: 50%;
transform: translate(55%, -48%);
z-index: 3;
opacity: 1;
font-family: 'Tf Grotesk-italic';
font-style: normal;
font-weight: normal;
text-align: left;
color: #2A465C;

background: rgba(214, 214, 214, 0.644);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 36.5016px 40px rgba(0, 0, 0, 0.0482987);
backdrop-filter: blur(4rem);
/* Note: backdrop-filter has minimal browser support */
border-radius: 10%;
}

.penjelasan{
    padding: 7%;
    padding-top: 10%;
}

.title{
    font-size: 3vw;
}

.desc{
    font-family: 'Gaegu';
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vw;
}

.by{
    font-size: 1.1vw;
}



.modal-overlay{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(112, 112, 112, 0.2);
    backdrop-filter: blur(4rem);
    opacity: 1;
    z-index: 3;
}

    .img-wrapper img{
        height: 100%;
        object-fit: cover;
    }
    .swiper-wrapper{
            height: 500px;
    }

    @media only screen and (max-width:1366px){
        .swiper-wrapper{
        height: 300px;
    }

    }
    @media only screen and (max-width:1536px){
        .swiper-wrapper{
        height: 400px;
    }
    }
    @media only screen and (max-width:1280px){
        .swiper-wrapper{
        height: 300px;
    }
    }
    .swiper-container{
        width: 50%;
        transform: translate(-30%,25%);
    }
    .swiper-slide{
      text-align: center;
      font-size: 18px;
      width: 25%;
      margin: auto;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-container-vertical .swiper-pagination-bullets{
        right: 25%;
    }

/* @media only  screen and (max-width: 1366px) {
  .AboutUs{
    background-color: #466584;
    border-radius: 25px;
    position: absolute;
    width: 580px;
    height: 380px;
    left: 960px;
    top: 400px;
    transform: translate(-100%, -70%);
    color: #E7E8E7;

    font-family: 'Tf Grotesk';
    font-style: italic;
    font-weight: normal;
    font-size: 40px;
    line-height: 120px;
    text-align: center;
    padding-left: 0px;
}  
    p{
    font-family: 'Gaegu', cursive;
    font-style: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: justify;
    padding-left: 50px;
    padding-right: 50px;
}
} */
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>