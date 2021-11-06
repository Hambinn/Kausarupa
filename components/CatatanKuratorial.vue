<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="CatatanKuratorial" @click.stop>
            <h4>Catatan Kuratorial</h4>
            <p>
                <span>Kata Sambutan Ketua Umum (Nadhif Adristia)</span>
                <br><br>
                Pameran adalah wadah bagi kami untuk berekspresi dan merayakan kreativitas. Melalui GEP: Kausarupa kami dapat kesempatan untuk mengeksplor perspektif baru dan mengembangkan gairah berkarya kami dalam seni visual. Proses demi proses telah dijalankan dengan berbagai tantangan di masa kini untuk menghasilkan beragam karya interpretasi tema sisi lain manusia. Tak lupa apresiasi untuk panitia dan kru yang telah berkontribusi dan mendukung untuk mewujudkan pameran ini. Kami harap GEP: Kausarupa dapat membuka pandangan-pengertian mendalam terhadap sisi-sisi manusia, serta memancarkan semangat dalam berkarya di masa pandemi. Selamat menikmati!
                <br><br>
                <span>Kata Sambutan Kepala Bidang Pertunjukan (Muhammad Faizin Fitriansyah Musa)</span>
                <br><br>
                Ganesha Exhibition Programme (GEP) telah menjadi wadah untuk mengapresiasi berbagai karya yang telah dihasilkan oleh Kru LFM ITB dalam bentuk pameran. mulai dari karya fotografi, videografi, sampai ulasan film. Tak hanya mengapresiasi karya, GEP juga berusaha menampilkan pesan dan membawa makna kepada pengunjung lewat tema yang dibawa. Pada GEP : Kausarupa ini, kami membawakan tema sisi lain manusia. Bersama dengan tema ini, kami berharap pengunjung dapat mengeksplor dirinya lebih jauh berdasarkan 4 arketipe utama, yaitu persona, shadow, anima/animus, serta self. Melalui Eksibisi ini, kami turut mengajak penonton untuk turut serta menyelam ke dalam berbagai sisi manusia yang ditampilkan lewat karya. Kami harap GEP dapat memberikan kesan serta membawa makna kepada masyarakat luas melalui pameran dan pre event yang ada. tak lupa kami mengucapkan terima kasih kepada panitia, kru LFM ITB, dan seluruh pihak yang telah bekerja sama dalam mensukseskan acara ini. Selamat menikmati!
                <br><br>
                <span>Kata Sambutan Pimpinan Proyek (Husnul Abidah)</span>
                <br><br>
                Ganesha Exhibition Programme (GEP) telah menjadi wadah untuk mengapresiasi berbagai karya yang telah dihasilkan oleh Kru LFM ITB dalam bentuk pameran. mulai dari karya fotografi, videografi, sampai ulasan film. Tak hanya mengapresiasi karya, GEP juga berusaha menampilkan pesan dan membawa makna kepada pengunjung lewat tema yang dibawa. Pada GEP : Kausarupa ini, kami membawakan tema sisi lain manusia. Bersama dengan tema ini, 
                <br><br>
                <span>Catatan Kuratorial (Kevin Harsana)</span>
                <br><br>
                <span>Siapa sebenarnya diri kamu?</span> 
                <br> <br>
                Pertanyaan yang mungkin jarang kita tanyakan ke diri kita sendiri maupun orang lain, tetapi sangat penting untuk ditelusuri. Siapa kita sebenarnya dibalik segala ekspektasi orang lain ke kita, dibalik segala hal yang menyakiti kita, dibalik semua hal yang kita banggakan. Perjalanan untuk menemukan diri sendiri bukanlah perjalanan yang baru karena setiap orang pastinya akan mempertanyakan jati diri mereka di suatu titik dalam hidup mereka, akan tetapi apakah perjalanan ini mempunyai suatu destinasi?
                <br> <br>
                Tidak heran apabila banyak dari diri kita yang masih belum bisa menjawab pertanyaan tersebut karena proses untuk menemukan jati diri merupakan proses yang, seperti perkataan Carl Jung, tidak akan pernah selesai. Hal ini disebabkan oleh betapa rumit dan rapuhnya subjektivitas kehidupan manusia, dengan banyak sekali hal yang dapat mempengaruhi kita dari segi alam sadar dan juga alam bawah sadar.
                <br> <br>
                Alam bawah sadar pun juga mempengaruhi perjalanan itu, bahkan pengaruh tersebut lebih besar dari yang kita kira. Seperti saat kita berinteraksi dengan satu sama lain, pastinya terdapat sisi dari diri kita sendiri yang sudah mempersiapkan kita untuk “bertarung” di arena sosial tersebut. Hal yang kita secara tidak sadar sembunyikan dari arena tersebut juga memiliki peran dalam menentukan siapa diri kita sebenarnya, bahkan identitas gender kita mempunyai keterlibatan yang erat dalam perjalanan tersebut.
                <br><br>
                Dalam membantu perjalanan mencari jati diri, Ganesha Exhibition Programme 2021 mengangkat tema sisi lain manusia yang dikemas dalam GEP : Kausarupa. Kausarupa sendiri merupakan gabungan dari kata “kausa” dan “rupa”, yang memiliki arti penyebab-penyebab munculnya rupa seseorang. Melalui karya yang merefleksikan sisi lain manusia dan eksibisi interaktif, GEP berharap pengunjung dapat lebih mengetahui adanya berbagai sisi dalam dirinya baik yang terlihat maupun tidak. Dengan demikian, pengunjung dapat menemukan diri sendiri dari sosok yang kita perlihatkan ke semua orang, sosok yang kita sembunyikan dan sosok yang kita harus seimbangi, agar kita dapat lebih menerima diri kita sendiri apa adanya.
                <br><br>
                <span>Akhir kata, selamat menempuh perjalananmu dan semoga kamu menemukan segala hal yang kamu cari. <br> Selamat Berjelajah! </span>
            </p>
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

span{
    font-weight: bold;
}

.CatatanKuratorial{
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
    overflow-y: scroll;
    scrollbar-width: none;
    -ms--overflow-style: none
}

.CatatanKuratorial::-webkit-scrollbar{
    width: 0;
    height: 0;
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

p{
    font-family: 'Gaegu', cursive;
    font-size: 2.5vh;
    line-height: 30px;
    text-align: justify;
    padding-left: 50px;
    padding-right: 50px;
}

/* @media only  screen and (max-width: 1366px) {
    .CatatanKuratorial{
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