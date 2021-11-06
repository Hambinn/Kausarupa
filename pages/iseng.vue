<template>
    <div>
    <swiper class="swiper">
        <swiper-slide><img src="https://storage.googleapis.com/kausarupa.appspot.com/Persona/Foto/beauty%20rots/2021_beauty%20rots_Muhammad%20Barkah_1%201_1.jpg" alt="" @click.stop data-lightense-background="rgba(0, 0, 0, .96)"></swiper-slide>
        <swiper-slide><img src="https://storage.googleapis.com/kausarupa.appspot.com/Persona/Foto/beauty%20rots/2021_beauty%20rots_Muhammad%20Barkah_1%201_1.jpg" alt="" @click.stop data-lightense-background="rgba(0, 0, 0, .96)"></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
  </swiper>
    </div>
</template>

<script>
import Lightense from 'lightense-images'
    export default {
        mounted(){
            window.addEventListener('load',function(){
                Lightense('img');
            },false)
        }
    }
</script>

<style  scoped>

</style>