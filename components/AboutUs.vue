<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="AboutUs" @click.stop>About Us
            <p>GEP (Ganesha Exhibition Program) adalah acara pameran tahunan yang diselenggarakan oleh kru LFM (Liga Film Mahasiswa) ITB sebagai wadah eksploratif dan apresiasi karya-karya kru LFM ITB. Selain itu, GEP memberi wawasan dan menyediakan ruang berdiskusi mengenai tema yang diangkat. Pameran GEP juga dimeriahkan dengan berbagai acara pra-event seperti webinar and workshop seputar fotografi,videografi dan review perfilman yang berhubungan dengan tema pameran. Diharapkan pameran GEP dapat membawa pesan bermakna mengenai tema yang diangkat serta menginspirasi kru LFM ITB dan para pengunjung pameran.</p>
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
.AboutUs{
    background-color: #466584;
    border-radius: 25px;
    position: absolute;
    width: 40%;
    height: 50%;
    transform: translate(0%,35%);
    color: #E7E8E7;

    font-family: 'Tf Grotesk';
    font-style: italic;
    font-weight: normal;
    font-size: 6vh;
    line-height: 150px;
    text-align: center;
    padding-left: 0px;
    overflow-y: scroll;
}

    p{
    font-family: 'Gaegu', cursive;
    font-style: normal;
    font-size: 2.5vh;
    line-height: 2vw;
    text-align: justify;
    padding-left: 50px;
    padding-right: 50px;
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

/* @media only  screen and (max-width: 1366px) {
  .AboutUs{
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
    padding-left: 0px;
}  
    p{
    font-family: 'Gaegu', cursive;
    font-style: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: justify;
    padding-left: 50px;
    padding-right: 50px;
}
} */
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>