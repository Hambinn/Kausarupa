<template>
    <div>
        <div class="ContactUs">Contact Us</div>
        <img src="~assets/svg/WelcomePage/icon ig.svg" alt="" class="ig">
        <img src="~assets/svg/WelcomePage/icon cp.svg" alt="" class="cp">
        <img src="~assets/svg/WelcomePage/icon twitter.svg" alt="" class="twitter">
        <img src="~assets/svg/WelcomePage/icon youtube.svg" alt="" class="youtube">
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style  scoped>
.ContactUs{
    background-color: #466584;
    border-radius: 25px;
    position: absolute;
    width: 630px;
    height: 400px;
    left: 960px;
    top: 400px;
    transform: translate(-50%, -50%);
    color: #E7E8E7;

    font-family: 'Tf Grotesk';
    font-style: italic;
    font-weight: normal;
    font-size: 48px;
    line-height: 150px;
    text-align: center;
}

.ig{
    position: absolute;
    width: 90px;
    height: 90px;
    top: 350px;
    left: 750px;
}

.cp{
    position: absolute;
    width: 90px;
    height: 90px;
    top: 350px;
    left: 980px;
}

.twitter{
    position: absolute;
    width: 90px;
    height: 90px;
    top: 470px;
    left: 750px;
}

.youtube{
    position: absolute;
    width: 100px;
    height: 100px;
    top: 470px;
    left: 980px;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>