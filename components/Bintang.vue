<template>
 <div>
    <div class="Star">
        <img src="~assets/svg/LandingPage/bintang oren.svg">
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
    <div class="Star2">
        <img src="~assets/svg/LandingPage/bintang oren.svg" height="100">
    </div>
 </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
    }
</script>

<style  scoped>
.Star{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-70%, -70%);
}

.Star2{
  margin: 0;
  position: absolute;
  top: 20%;
  left: 70%;
  transform: translate(-70%, -70%);
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>