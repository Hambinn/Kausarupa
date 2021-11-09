<template>
<div class="container-katalog">
  <fw-turn class="magazine" :options="options">
    <div v-for="i in 60" :key="i">
      <img
        :src="
          `https://storage.googleapis.com/kausarupa.appspot.com/Katalog/${i}.png`
        "
        alt="image${i}" class="futu"
      />
    </div>
  </fw-turn>
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
  mounted(){
      this.getThumbnail()
  },
  methods:{
      async getThumbnail(){
                const karyaRef = this.$fire.firestore.collection('katalog').doc('Foto')
                try{
                    const karya = await karyaRef.get()
                    this.arrkarya = Object.values(karya.data())
                    this.karyalength = this.arrkarya.length
                } catch(e){
                    alert(e)
                    return
                }
            },
  }
};
</script>

<style scoped>


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
</style>