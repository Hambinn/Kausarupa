<template>
    <div class="modal-overlay" @click="$emit(`close-modal`)">
        <div class="tulisan" @click.stop>
            <div class="penjelasan">
            <h1 class="title">Judul</h1>
            <br>
            <h1 class="by">Karya Siapa</h1>
            <br>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores reiciendis et, doloribus pariatur voluptatem atque aut sint incidunt culpa maiores debitis obcaecati provident distinctio enim ut exercitationem, ipsa earum reprehenderit quaerat sunt molestias nemo nesciunt? Cum quidem quas ullam deserunt, reiciendis ipsa officiis consequuntur quam quis illo, explicabo nulla?</p>
            </div>
        </div>
        <div class="container-karya">
            <img src="~assets/foto/4.jpg" alt="">
        </div>
        <!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    </div>
</template>

<script>
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        data(){
            return{
                title:'',
                oleh:'',
                desc:'',
                karya:[],
            }
        },
        mounted:{
            
        }
    }
</script>


<style  scoped>

.container-karya{
    position: absolute;
    width: 100%;
    height: 100%;
}

.container-karya img{
    max-width: 30%;
    transform: translate(-50%, 20%);
    
}


.tulisan{
position: absolute;
width: 27%;
height: 54%;
left: 50%;
top: 50%;
transform: translate(55%, -48%);
z-index: 3;
opacity: 1;
font-family: 'Tf Grotesk-italic';
font-style: normal;
font-weight: normal;
text-align: left;
color: #2A465C;

background: rgba(214, 214, 214, 0.644);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 36.5016px 40px rgba(0, 0, 0, 0.0482987);
backdrop-filter: blur(4rem);
/* Note: backdrop-filter has minimal browser support */
border-radius: 10%;
}

.penjelasan{
    padding: 7%;
    padding-top: 10%;
}

.title{
    font-size: 3vw;
}

.desc{
    font-family: 'Gaegu';
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
}



.modal-overlay{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(112, 112, 112, 0.2);
    backdrop-filter: blur(4rem);
    opacity: 1;
    z-index: 3;
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