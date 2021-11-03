<template>
  <div class="modal-overlay" @click="$emit(`close-modal`)">
    <div class="container-katalog" >
      <fw-turn class="magazine" :options="options" @click.stop>
        <div v-for="i in 60" :key="i">
          <img :src="
          `https://storage.googleapis.com/kausarupa.appspot.com/Katalog/${i}.png`
        " alt="image${i}" class="futu" />
        </div>
      </fw-turn>
    </div>
    <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
  </div>
</template>

<script>
    export default {
      data() {
        return {
          options: {
            display: "double",
            acceleration: true,
            elevation: 50,
            duration: 1000
          },
          arrkarya: [],
          karyalength: 0
        };
      },
      mounted() {
        this.getThumbnail()
      },
      methods: {
        async getThumbnail() {
          const karyaRef = this.$fire.firestore.collection('katalog').doc('Foto')
          try {
            const karya = await karyaRef.get()
            this.arrkarya = Object.values(karya.data())
            console.log(this.arrkarya)
            this.karyalength = this.arrkarya.length
            console.log(this.karyalength)
          } catch (e) {
            alert(e)
            return
          }
        },
      }
    }
</script>

<style  scoped>
*{
    margin: 0;
    padding: 0;
}
.container-katalog{
    position: absolute;
    height: 100%;
    width: 100%;
}
.magazine {
  height: 78%;
}
.magazine .turn-page {
  background-color: #ccc;
  background-size: 100% 100%;
}


.futu{
    width: 100%;
}
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
}

    p{
    font-family: 'Gaegu', cursive;
    font-style: normal;
    font-size: 2.5vh;
    line-height: 30px;
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