<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="ContactUs" @click.stop>Contact Us</div>
        <a href="https://www.instagram.com/geplfm/" target="_blank">
        <img src="~assets/svg/WelcomePage/icon ig.svg"  alt="" class="ig" @click.stop >
        </a>
        <img src="~assets/svg/WelcomePage/icon cp.svg" alt="" class="cp" @click.stop title="gep.lfm@gmail.com">
        <a href="https://twitter.com/GEPLFMITB?s=20" target="_blank">
        <img src="~assets/svg/WelcomePage/icon twitter.svg" alt="" class="twitter" @click.stop>
        </a>
        <img src="~assets/svg/WelcomePage/icon youtube.svg" alt="" class="youtube" @click.stop>
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
    width: 700px;
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
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>