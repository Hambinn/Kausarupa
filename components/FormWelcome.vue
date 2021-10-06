<template>
    <div class="container">
        <h1 class="welcome">Welcome</h1>
        <div class="form-control">
            <form action="">
                <input type="text" id="nama" name="nama" placeholder="Instansi" class="placeholder name" autocomplete="off" v-model="nama">
                <input type="text" id="instansi" name="instansi" placeholder="Nama" class="placeholder instansi" autocomplete="off" v-model="instansi">
            </form>
        </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        data(){
            return{
                nama:'',
                instansi:''
            }
        },
        props:['postMethod'],
        methods:{
            async post(){
                const bukuRef = this.$fire.firestore.collection('buku-tamu').doc()
                try{
                    await bukuRef.set({
                        nama: this.nama,
                        instansi: this.instansi
                    })
                } catch(e){
                    alert(e)
                    return
                }
            }
        }
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

.placeholder::placeholder{
    text-align: center;
}

input{
    all: unset;
    width: 500px;
    height: 67px;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input::-webkit-input-placeholder{
    font-family: Roboto;
    font-size: 24px;
}

.name{
    position: absolute;
    left: 160px;
    top: 390px;
}

.instansi{
    position: absolute;
    left: 160px;
    top: 290px;
}

@media only  screen and (max-width: 1366px) {
    .container{
    position: absolute;
    width: 541px;
    height: 350px;
    left: 400px;
    top: 140px;

    background: rgba(196, 196, 196, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.welcome{
    position: absolute;
    width: 447px;
    height: 115px;
    left: 50px;
    top: 20px;

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 115px;

    color: #000000;

}

.placeholder::placeholder{
    text-align: center;
}

input{
    all: unset;
    width: 293px;
    height: 39px;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

input::-webkit-input-placeholder{
    font-family: Roboto;
    font-size: 14px;
}

.name{
    position: absolute;
    left: 120px;
    top: 270px;
}

.instansi{
    position: absolute;
    left: 120px;
    top: 210px;
}
}
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */
</style>