<template>
    <div class="container">
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
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
width: 47%;
height: 46%;
left: 50%;
top: 50%;
transform: translate(-51%, -51%);
z-index: 3;
opacity: 0.95;

background: rgb(196, 196, 196);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 40px;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>