<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <swiper class="swiper" :options="swiperOptionv">
        <swiper-slide class="img-wrapper" v-for="i in karyalength" :key="i"><img :src="arrkarya[i-1]" alt="" @click="$emit(`toggle`); passId(i); score()"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
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
                    spaceBetween: 60,
                    direction: 'vertical',
                    mousewheel:true,
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
                this.$emit('tambahshadow')
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
        width: 100%;
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

    .swiper {
  width: 1000px;
  padding: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;

}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>