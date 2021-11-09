<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="container-merch">
        <img src="../assets/merch/Page 1.jpg" alt="">
        <img src="../assets/merch/Page 2.jpg" alt="">
        <img src="../assets/merch/Page 3.jpg" alt="">
        <img src="../assets/merch/Page 4.jpg" alt="">
        </div>
        <div class="beli-sekarang" @click="beli" @click.stop>
            Beli Sekarang!
        </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
    export default {
        methods:{
            beli(){
                window.open("https://www.tokopedia.com/geplfm")
            }
        }
    }
</script>

<style  scoped>
.beli-sekarang{
    position: absolute;
    background-color: #F06236;
    border-radius: 26px;
    width: 25%;
    height: 6%;
    transform: translate(0%,1270%);
    font-size: 2vw;
    color: #F2F7ED;
    cursor: pointer;
    font-family: 'Tf Grotesk-italic';
}

.container-merch{
    transform: translate(0,-10%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

img{
    height: 60%;
}

    p{
    font-family: 'Gaegu', cursive;
    font-style: normal;
    font-size: 2.5vh;
    line-height: 30px;
    text-align: justify;
    padding-left: 50px;
    padding-right: 50px;
}

.modal-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
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