<template>
    <div class="container">
        <h1 class="welcome">Welcome</h1>
        <div class="BoxNama">
            <h1 class="nama">Nama</h1>
        </div>
        <div class="BoxInstansi">
            <h1 class="instansi">Instansi</h1>
        </div>
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
    width: 826px;
    height: 534px;
    left: 547px;
    top: 130px;

    background: rgba(196, 196, 196, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
}

.welcome{
    position: absolute;
    width: 447px;
    height: 115px;
    left: 190px;
    top: 80px;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 115px;

    color: #000000;

}

.BoxNama{
    position: absolute;
    width: 500px;
    height: 67px;
    left: 160px;
    top: 290px;

    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
}

.BoxNama .nama{
    position: absolute;
    width: 65px;
    height: 28px;
    left: 215px;
    top: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

color: rgba(0, 0, 0, 0.5);
}

.BoxInstansi{
    position: absolute;
    width: 500px;
    height: 67px;
    left: 160px;
    top: 390px;

    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
}

.BoxInstansi .instansi{
    position: absolute;
    width: 85px;
    height: 28px;
    left: 205px;
    top: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: rgba(0, 0, 0, 0.5);
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>