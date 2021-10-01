<template>
  <div>  
    <div>
        <button class="button">Next</button>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>

    <div>
        <button class="kontak"><img src="~assets/svg/WelcomePage/contact us.svg"></button>
    </div>

    <div>
        <button class="About"><img src="~assets/svg/WelcomePage/about us.svg"></button>
    </div>

    <div>
        <button class="Catatan"><img src="~assets/svg/WelcomePage/catatan kuratorial.svg"></button>
    </div>

    <div>
        <button class="trailer"><img src="~assets/svg/WelcomePage/trailer.svg"></button>
    </div>
  </div>  
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style  scoped>
.button{
    position: absolute;
    width: 648px;
    height: 86px;
    left: 620px;
    top: 640px;

    background: #C4C4C4;
    border-radius: 27px;

    font-family: Tf Grotesk Italic;
    font-style: italic;
    font-weight: normal;
    font-size: 48px;

}

.kontak{
    position: absolute;
    width: 154px;
    height: 154px;
    left: 180px;
    top: 797px;

}

.about{
    position: absolute;
    width: 154px;
    height: 154px;
    left: 43px;
    top: 622px;

}

.catatan{
    position: absolute;
    width: 154px;
    height: 154px;
    left: 1224px;
    top: 622px;

}

.trailer{
    position: absolute;
    width: 155.65px;
    height: 155.65px;
    left: 1069.18px;
    top: 796.18px;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>