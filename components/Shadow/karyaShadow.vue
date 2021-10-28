<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="img-wrapper"><img src="~assets/foto/1.jpg" alt="" @click="$emit(`toggle`)"></swiper-slide>
        <!-- <swiper-slide class="img-wrapper">
            <swiper class="swiper vertical" :options="swiperOptionv">
                <swiper-slide><img src="../assets/foto/2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/foto/7.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/foto/8.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/foto/9.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
            </swiper>
        </swiper-slide> -->
        <swiper-slide class="img-wrapper"><img src="~assets/foto/3.jpg" alt="" @click="$emit(`toggle`)"></swiper-slide>
        <swiper-slide class="img-wrapper"><img src="~assets/foto/4.jpg" alt="" @click="$emit(`toggle`)"></swiper-slide>
        <swiper-slide class="img-wrapper"><img src="~assets/foto/5.jpg" alt="" @click="$emit(`toggle`)"></swiper-slide>
        <swiper-slide class="img-wrapper"><img src="~assets/foto/6.jpg" alt="" @click="$emit(`toggle`)"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
    </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'
    export default {
        name:'swiper-example-pagination',
        title: 'Pagination',
        components:{
            Swiper,
            SwiperSlide
        },
        data(){
            return{
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 140,
                    loop: true,
                    centeredSlides: true,
                    pagination:{
                        el: '.swiper-pagination-h',
                        clickable: true
                    }
                },
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
            pindahindex(){
                this.$router.push("/")
            },
            testDoang(){
                console.log('masuk')
            },
        }
    }
</script>

<style >
    html,body{
        height: 100%;
    }



    .img-wrapper img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
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
        width: 100%;
        height: 100%;
        
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

    .swiper-pagination-h{
        
    }
</style>