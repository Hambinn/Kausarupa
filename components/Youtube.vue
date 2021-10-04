<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="Youtube" @click.stop>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=42" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
.Youtube{
    background-color: #466584;
    border-radius: 25px;
    position: absolute;
    width: 700px;
    height: 400px;
    left: 960px;
    top: 400px;
    transform: translate(-50%, -50%);
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

iframe{
    position: absolute;
    top: 40px;
    right: 70px;
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>