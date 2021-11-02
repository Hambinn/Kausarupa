<template>
    <div class="container">
        <p class="narasi">
            Asik sampe juga nih kita! Dari keliatannya,,, kita lagi di persona sekarang. Apasih makna persona?
            <br>
            <br>
            Persona adalah bagian dari diri kalian yang kalian tunjukkan setiap kali kalian harus berinteraksi sama siapapun. Namun, sosok ini tuh sebenernya bukan diri kalian sebenernya. Menarik banget ga tuh?!
            <br>
            <br>
            Biar lebih familiar lagi nih, yuk kita cek karya-karya yang berhubungan banget nih sama persona!
        </p>
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
width: 50%;
height: 55%;
left: 50%;
top: 50%;
transform: translate(-33%, -53%);
z-index: 3;
opacity: 0.95;

background: rgba(131, 131, 131, 0.77);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 40px;
}

.narasi{
    font-family: "Tf Grotesk";
    font-style: normal;
    font-weight: normal;
    text-align: left;
    font-size: 1.5vw;
    padding: 2%;
    color: #D2D5D3;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>