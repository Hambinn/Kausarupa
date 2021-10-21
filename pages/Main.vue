<template>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    <div class="container-main">
      <div class="top-cont">
        <div class="canvas">
          <div class="container-bulan">
            <img src="../assets/svg/MainPage/bulan.svg" alt="" class="oren">
          </div>
          <div class="container-kelinci">
            <img src="../assets/svg/MainPage/kelinci.svg" alt="" class="oren">
          </div>
          <div class="container-saturnus">
            <img src="../assets/svg/MainPage/saturnus.svg" alt="" class="ungu">
          </div>
          <div class="container-lolipop">
            <img src="../assets/svg/MainPage/lolipop.svg" alt="" class="ungu">
          </div>
          <div class="container-kamera">
            <img src="../assets/svg/MainPage/kamera.svg" alt="" class="ungu">
          </div>
          <div class="container-ikan">
            <img src="../assets/svg/MainPage/ikan oren.svg" alt="" class="oren">
            <img src="../assets/svg/MainPage/ikan ungu.svg" alt="" class="ungu">
          </div>
          <div class="container-pita">
            <img src="../assets/svg/MainPage/pita.svg" alt="" class="oren">
          </div>
          <div class="container-permen">
            <img src="../assets/svg/MainPage/permen.svg" alt="" class="oren">
          </div>
          <div class="container-text-middle-title">
            Panduan
          </div>
          <div class="container-text-middle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cupiditate corrupti est, vel nesciunt
            natus tempore recusandae quae cumque eius esse nihil amet blanditiis, illo facere. Accusantium voluptatum
            tempora earum? Perferendis itaque eveniet exercitationem, beatae quasi dolore, aperiam recusandae rerum
            voluptatibus perspiciatis, ullam dolorum praesentium accusantium saepe placeat iste veritatis.
          </div>
          <div class="container-segitiga">
            <img src="../assets/svg/MainPage/segitiga.svg" alt="" class="ungu">
          </div>
          <div class="container-penggaris">
            <img src="../assets/svg/MainPage/penggaris.svg" alt="" class="ungu">
          </div>
          <div class="container-ubur">
            <img src="../assets/svg/MainPage/ubur-ubur.svg" alt="" class="oren">
          </div>
          <div class="container-permen-bungkus">
            <img src="../assets/svg/MainPage/permen lagi.svg" alt="" class="oren">
          </div>
          <div class="container-papan">
            <img src="../assets/svg/MainPage/papan.svg" alt="" class="papan">
          </div>
          <div class="container-lubang">
            <img src="../assets/svg/MainPage/lubang.svg" alt="" class="lubang">
          </div>
          <div class="container-awan-main">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="bawah-permen">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="bawah-papan">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="lubang-atas">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="lubang-bawah">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="belakang-kasur">
          </div>
          <div class="container-kasur">
            <img src="../assets/svg/MainPage/kasur.svg" alt="" class="kasur">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="depan-kasur1">
            <img src="../assets/svg/MainPage/awan-kiri-permen.svg" alt="" class="depan-kasur2">
          </div>
          
          <div class="container-bintang-putih">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih1" @click="countBintang">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih2" @click="countBintang">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih3" @click="countBintang">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih4" @click="countBintang">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih5" @click="countBintang">
            <img src="../assets/svg/MainPage/bintang-putih.svg" alt="" class="putih6" @click="countBintang">
          </div>
        </div>
      </div>
      <div class="score">
            <div class="container-box">
              <div class="container-text-box">
                {{score}}
              </div>
            </div>
            <div class="container-bintang-item">
              <img src="../assets/svg/MainPage/bintang-item.svg" alt="" class="oren">
            </div>
          </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
        layout: 'longpage',
        beforeMount(){
            if(!localStorage.getItem('score')){
                localStorage.setItem('score', 0)
            }
            else{
                this.score = Number(localStorage.getItem('score'))
            }
        },
        mounted(){
            console.log(localStorage.getItem('score'))
        },
        data(){
            return{
                score: ''
            }
        },
        computed:{
            
        },
        methods:{
            countBintang(){
                localStorage.setItem('score',Number(this.score+1))
                this.score = Number(localStorage.getItem('score'))
                console.log("masuk")
            }
        }
    }
</script>

<style >
    /* ini buat stylingnya, ngasih warna, benerin posisi, benerin ukuran, font, kasih border dll. */


.container-main{
    overflow-x: hidden;
}

.top-cont{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 56.25%;
}

.canvas{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container-text-box{
    position: absolute;
    text-align: justify;
    font-size: 2.6vw;
    font-family: Tf Grotesk;
    top: 10%;
    left: 49%;
    
}

.container-text-middle-title{
    position: absolute;
    font-size: 5vw;
    margin: 10% 40.25%;
    font-family: Tf Grotesk;
}     

.container-text-middle{
    position: absolute;
    margin: 19% 20%;
    text-align: justify;
    font-size: 1.2vw;
    font-family: Tf Grotesk;
}

.container-bulan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bulan .oren{
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(0%,15%);
}

.container-kelinci{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kelinci .oren{
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(230%,65%);
}

.container-saturnus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-saturnus .ungu{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(20%, 270%);
}

.container-lolipop{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-lolipop .ungu{
    top: 50%;
    left: 50%;
    height: 110%;
    transform: translate(58%, 59%);
}

.container-permen{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-permen .oren{
    height: 120%;
    top: 50%;
    left: 50%;
    transform: translate(25%, 70%);
}

.container-kamera{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kamera .ungu{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(110%, 520%);
}

.container-ikan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-ikan .ungu{
    top: 50%;
    left: 50%;
    height: 25%;
    transform: translate(320%, 500%);
}

.container-ikan .oren{
    top: 50%;
    left: 50%;
    height: 35%;
    transform: translate(-40%, 400%);
}

.container-penggaris{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-penggaris .ungu{
    top: 50%;
    left: 50%;
    height: 120%;
    transform: translate(45%, 120%);
}

.container-pita{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-pita .oren{
    top: 50%;
    left: 50%;
    height: 30%;
    transform: translate(15%, 660%);
}

.container-ubur{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-ubur .oren{
    top: 50%;
    left: 50%;
    height: 140%;
    transform: translate(90%, 95%);
}
/* score */
.score{
    position: fixed
}

.container-box{
    position: fixed;
    height: 7.5%;
    width: 13%;
    background-color: #fff;
    transform: translate(630%, 100%);
    border-radius: 50px;
}

.container-bintang-item{
    position: fixed;
    height: 10%;
    transform: translate(1900%, 68%);
}

.container-segitiga{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-segitiga .ungu{
    top: 50%;
    left: 50%;
    height: 13%;
    transform: translate(960%,500%);
}

.container-bintang-putih{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang-putih .putih1{
    top: 50%;
    left: 50%;
    transform: translate(220%,470%);
}

.container-bintang-putih .putih2{
    position: absolute;
    width: 143.8px;
    height: 133px;
    left: 538px;
    top: 1359px;
}

.container-bintang-putih .putih3{
    position: absolute;
    width: 82.17px;
    height: 76px;
    left: 1529px;
    top: 1321px;
}

.container-bintang-putih .putih4{
    position: absolute;
    width: 82.17px;
    height: 76px;
    left: 270px;
    top: 1879px;
}

.container-bintang-putih .putih5{
    position: absolute;
    width: 93px;
    height: 86.02px;
    left: 561px;
    top: 2107px;
}

.container-bintang-putih .putih6{
    position: absolute;
    width: 143.8px;
    height: 133px;
    left: 424px;
    top: 2575px;
}



.container-permen-bungkus{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-permen-bungkus .oren{
    top: 50%;
    left: 50%;
    height: 60%;
    transform: translate(8%, 376%);
}

.container-awan-main{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-awan-main .bawah-permen{
    top: 50%;
    left: 50%;
    height: 45%;
    transform: translate(-45%, 590%);
}

.container-awan-main .bawah-papan{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(113%, 460%);
}

.container-awan-main .lubang-atas{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(120%, 460%);
}

.container-awan-main .lubang-bawah{
    top: 50%;
    left: 50%;
    height: 40%;
    transform: translate(-5%, 600%);
}

.container-awan-main .belakang-kasur{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(10%, 335%);
}

.container-papan{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-papan .papan{
    top: 50%;
    left: 50%;
    width: 35%;
    transform: translate(165%, 390%);
}

.container-lubang{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-lubang .lubang{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(170%, 660%);
}

.container-kasur {
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-kasur .kasur{
    top: 50%;
    left: 50%;
    width: 43%;
    transform: translate(-1%, 380%);
}

.container-kasur .depan-kasur1{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-80%, 610%) rotate(180deg);
}

.container-kasur .depan-kasur2{
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-30%, 500%);
}





/* -------------------------------------------------------------------- */

@media only screen and (max-width: 1367px) {
    /*.container-main{
        text-align: center;
        background-image: url("../assets/png/MainPage/bg_terang.png");
        background-repeat: no-repeat;
        background-size: 1366px 768px;
        height: 100vh;
        width: 100vw
    }

    .container-text-box{
        position: absolute;
        width: 100px;
        margin: 61.6px 1200px;
        text-align: justify;
        font-size: 34px;
        font-family: Tf Grotesk;
    }

    .container-text-middle-title{
        position: absolute;
        width: 804px;
        font-size: 96px;
        margin: 10% 40.25%;
        font-family: Tf Grotesk;
    }

    .container-text-middle{
        position: absolute;
        width: 1157.92px;
        margin: 19% 20%;
        text-align: justify;
        font-size: 24px;
        font-family: Tf Grotesk;
    }

    .container-bulan{
        position: relative;
    }

    .container-bulan .oren{
        width: 18%;
        position: absolute;
        transform: translate(10%, 50%);
    }

    .container-kelinci{
        position: relative;
    }

    .container-kelinci .oren{
        width: 33%;
        position: absolute;
        transform: translate(235%, 67%);
    }

    .container-saturnus{
        position: relative;
    }

    .container-saturnus .ungu{
        position: absolute;
        width: 25%;
        transform: translate(20%, 240%);
    }

    .container-lolipop{
        position: relative;
    }

    .container-lolipop .ungu{
        width: 55%;
        position: absolute;
        transform: translate(58%, 59%);
    }

    .container-kamera{
        position: relative;
    }

    .container-kamera .ungu{
        width: 19%;
        position: absolute;
        transform: translate(90%, 660%);
    }

    .container-ikan{
        position: relative;
    }

    .container-ikan .ungu{
        position: absolute;
        width: 17.2%;
        transform: translate(450%, 730%);
    }

    .container-ikan .oren{
        position: absolute;
        width: 26.2%;
        transform: translate(-40%, 480%);
    }

    .container-penggaris{
        position: relative;
    }

    .container-penggaris .ungu{
        width: 57%;
        position: absolute;
        transform: translate(40%, 200%);
    }

    .container-pita{
        position: relative;
    }

    .container-pita .oren{
        position: absolute;
        width: 17.9%;
        transform: translate(15%, 630%);
    }

    .container-permen{
        position: relative;
    }

    .container-permen .oren{
        width: 66.4%;
        position: absolute;
        transform: translate(30%, 81%);
    }

    .container-box{
        position: absolute;
        height: 56px;
        width: 175px;
        background-color: #fff;
        transform: translate(630%, 100%);
        border-radius: 50px;
    }

    .container-bintang-item{
        position: absolute;
        transform: translate(1920%, 100%);
    }

    .container-bintang-item .oren{
        width: 58px;
    }

    .container-segitiga{
        position: absolute;
        transform: translate(1079%, 520%);
    }

    .container-bintang-putih{
        position: relative;
    }

    .container-bintang-putih .putih1{
        position: absolute;
        width: 5.9%;
        left: 140px;
        top: 500px;
    }

    .container-bintang-putih .putih2{
        position: absolute;
        width: 7.48%;
        left: 380px;
        top: 1200px;
    }

    .container-bintang-putih .putih3{
        position: absolute;
        width: 4.27%;
        left: 1529px;
        top: 1321px;
    }

    .container-bintang-putih .putih4{
        position: absolute;
        width: 4.27%;
        left: 180px;
        top: 1600px;
    }

    .container-bintang-putih .putih5{
        position: absolute;
        width: 4.84%;
        left: 520px;
        top: 1990px;
    }

    .container-bintang-putih .putih6{
        position: absolute;
        width: 7.5%;
        left: 424px;
        top: 2575px;
    }

    .container-ubur{
        position: relative;
    }

    .container-ubur .oren{
        width: 78%;
        position: absolute;
        transform: translate(50%, 115%);
    }

    .container-permen-bungkus{
        position: relative;
    }

    .container-permen-bungkus .oren{
        width: 27.8%;
        position: absolute;
        transform: translate(15%, 610%);
    }

    .container-awan-main{
        position: relative;
    }

    .container-awan-main .bawah-permen{
        position: absolute;
        width: 39.5%;
        transform: translate(-30%, 755%);
    }

    .container-papan{
        position: relative;
    }

    .container-papan .papan{
        position: absolute;
        width: 37%;
        transform: translate(140%, 410%);
    }

    .container-awan-main .bawah-papan{
        position: absolute;
        width: 55.2%;
        transform: translate(90%, 580%);
    }

    .container-awan-main .lubang-atas{
        position: absolute;
        width: 55.2%;
        transform: translate(100%, 690%);
    }

    .container-awan-main .lubang-bawah{
        position: absolute;
        width: 55.2%;
        transform: translate(60%, 720%);
    }

    .container-lubang{
        position: relative;
    }

    .container-lubang .lubang{
        position: absolute;
        width: 35.7%;
        transform: translate(140%, 635%);
    }

    .container-awan-main .belakang-kasur{
        position: absolute;
        width: 45.2%;
        transform: translate(10%, 800%);
    }

    .container-kasur .kasur{
        position: absolute;
        width: 39%;
        transform: translate(0%, 450%);
    }

    .container-kasur .depan-kasur1{
        position: absolute;
        width: 45.2%;
        transform: translate(0%, 820%) rotate(180deg);
    }

    .container-kasur .depan-kasur2{
        position: absolute;
        width: 45.2%;
        transform: translate(-40%, 810%);
    }

    .score{
        position: sticky;
        top: -10px;
    }

*/
}

</style>