<template>
    <div class="container">
        <p class="narasi">
            Gunakan laptop atau mode desktop untuk pengalaman jelajah yang lebih baik!
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
width: 43%;
height: 30%;
left: 50%;
top: 50%;
transform: translate(-50%, -48%);
z-index: 3;
opacity: 0.95;

background: rgba(251, 251, 251, 0.2);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 36.5016px 40px rgba(0, 0, 0, 0.0482987);
backdrop-filter: blur(2rem);
/* Note: backdrop-filter has minimal browser support */

border-radius: 5%/12%;
}

.narasi{
    font-family: "Tf grotesk-italic";
    font-style: italic;
    font-weight: normal;
    text-align: center;
    font-size: 2.3vw;
    padding: 5%;
    color: #30455A;
    padding-top: 9%;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>