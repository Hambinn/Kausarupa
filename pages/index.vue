<template>
  <div class="container">
    <div class="Logo">
    <img src="~assets/svg/LandingPage/logo kausarupa.svg">
    </div>
    <!-- ini buat naro berbagai component yg ada di folder components -->
  </div>
</template>

<script>
export default {
// ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
}
</script>

<style>
*{
   padding: 0;
   margin: 0;
   background-image: url("../assets/png/LandingPage/Background.png");
   background-repeat: no-repeat;
   background-size: 1920px 1080px;
}

@media only  screen and (max-width: 1366px) {
    *{
        background-size: 1366px 768px;
    }
}

.Logo{
  padding: 70px 0;
  text-align: center;
}

/* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>