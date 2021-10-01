<template>
 <div>
    <div class="RightCloud">
        <img src="~assets/svg/LandingPage/awan kanan bawah.svg" height="800">
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
    <div class="LeftCloud">
        <img src="~assets/svg/LandingPage/awan kiri atas.svg" height="800">
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
.RightCloud{
  margin: 0;
  position: absolute;
  top: 75%;
  left: 90.4%;
  transform: translate(-70%, -70%);
}

.LeftCloud{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-70%, -70%);
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>