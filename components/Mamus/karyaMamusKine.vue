<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="img-wrapper" v-for="i in karyalength" :key="i"><img :src="arrkarya[i-1]" alt="" @click="$emit(`toggle`); passId(i); score()"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
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
                    spaceBetween: '50',
                    effect: 'flip',
                    grabCursor: true,
                    pagination:{
                        el: '.swiper-pagination-h',
                        clickable: true
                    },
                    navigation:{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev'
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
                this.$emit('tambahmamus')
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
        border-radius: 50%;
    }
    .swiper-wrapper{
        height: 100%;
        width: 100%
    }



.swiper {
  width: 500px;
  height: 500px;
  padding: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 500px;
}

.swiper-slide img {
  display: block;
  height: 500px;
  width: 100%;
}

@media only screen and (max-width:1536px){
            .swiper {
    width: 400px;
    height: 400px;
    padding: 50px;
    }

    .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 400px;
    }

    .swiper-slide img {
    display: block;
    height: 400px;
    width: 100%;
    }

}

@media only screen and (max-width:1366px){
        .swiper {
    width: 300px;
    height: 300px;
    padding: 50px;
    }

    .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    }

    .swiper-slide img {
    display: block;
    height: 300px;
    width: 100%;
    }

}

@media only screen and (max-width:1200px){
            .swiper {
    width: 270px;
    height: 270px;
    padding: 50px;
    }

    .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 270px;
    height: 270px;
    }

    .swiper-slide img {
    display: block;
    height: 270px;
    width: 100%;
    }

}

</style>