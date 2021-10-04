<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="AboutUs" @click.stop>About Us
            <p>ini isinya apa jancok</p>
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
    width: 630px;
    height: 400px;
    left: 960px;
    top: 400px;
    transform: translate(-50%, -50%);
    color: #E7E8E7;

    font-family: 'Tf Grotesk';
    font-style: italic;
    font-weight: normal;
    font-size: 48px;
    line-height: 150px;
    text-align: left;
    padding-left: 70px;
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
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>