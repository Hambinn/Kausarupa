<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="img-wrapper" v-for="i in karyalength" :key="i"><img :src="arrkarya[i-1]" alt="" @click="$emit(`toggle`); passId(i);score()"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
    </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper"
import 'swiper/css/swiper.css'
    export default {
        name:'swiper-thumbnail',
        title: 'Pagination',
        components:{
            Swiper,
            SwiperSlide
        },
        props:['arrkarya', 'karyalength'],
        data(){
            return{
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 140,
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
            passId(id){
                this.$emit('changeId',id)
                console.log('masuk')
            },
            score(){
                this.$emit('tambahpersona')
                console.log('masuk')
            }
        }
    }
</script>

<style scoped>
    html,body{
        height: 100%;
    }



    .img-wrapper img{
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        cursor: pointer;
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