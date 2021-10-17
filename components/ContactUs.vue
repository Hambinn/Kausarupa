<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="content">
          <div class="ContactUs" @click.stop>Contact Us</div>
          <a href="https://www.instagram.com/geplfm/" target="_blank">
            <img src="~assets/svg/WelcomePage/icon ig.svg" alt="" class="ig" @click.stop>
          </a>
          <img src="~assets/svg/WelcomePage/icon cp.svg" alt="" class="cp" @click.stop title="gep.lfm@gmail.com">
          <a href="https://twitter.com/GEPLFMITB?s=20" target="_blank">
            <img src="~assets/svg/WelcomePage/icon twitter.svg" alt="" class="twitter" @click.stop>
          </a>
          <img src="~assets/svg/WelcomePage/icon youtube.svg" alt="" class="youtube" @click.stop>
          <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
        </div>
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
    width: 40%;
    height: 50%;
    transform: translate(-50%,35%);
    color: #E7E8E7;

    font-family: 'Tf Grotesk';
    font-style: italic;
    font-weight: normal;
    font-size: 6vh;
    line-height: 150px;
    text-align: center;
}

.ig{
    position: absolute;
    width: 13%;
    height: 13%;
    top: 32%;
    left: 32%;
}

.cp{
    position: absolute;
    width: 13%;
    height: 13%;
    top: 32%;
    left: 48%;
}

.twitter{
    position: absolute;
    width: 13%;
    height: 13%;
    top: 49%;
    left: 32%;
}

.youtube{
    position: absolute;
    width: 13%;
    height: 13%;
    top: 49%;
    left: 48%;
}

.modal-overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-repeat: repeat;
    background-color: #000000c2;
    background-size: 100% 100%;
}

/* @media only  screen and (max-width: 1366px) {
    .ContactUs{
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
}
.ig{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 260px;
    left: 450px;
}

.cp{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 260px;
    left: 700px;
}

.twitter{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 380px;
    left: 450px;
}

.youtube{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 380px;
    left: 700px;
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
} */
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>