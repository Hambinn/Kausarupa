<template>
    <div class="container">
        Selamat datang di Shadow!Shadow itu apasih? 
        <br>
        <br>
        Shadow adalah hal yang selalu berusaha kita sembunyiin dari siapapun, soalnya sosok ini merepresentasikan hal-hal yang berlawanan sama jati diri kita sendiri. Jadi misalnya orang yang punya jati diri lembut punya shadow yang kasar dan begitu juga sebaliknya
        <br>
        <br>
        Untuk memperjelas lagi nih, ayo kita liat karya-karya yang punya vibes shadow banget ini!
    </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style  scoped>
.container{
position: absolute;
width: 53%;
height: 58%;
left: 50%;
top: 50%;
transform: translate(-85%, -40%);
z-index: 3;
opacity: 0.95;

background: rgba(251, 251, 251, 0.2);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 40px;
font-family: "Tf Grotesk";
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    font-size: 1.5vw;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 2%;
    color: #30455A;
}

.narasi{
    font-family: "Tf Grotesk";
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    font-size: 1.5vw;
    padding: 2% 2%;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>