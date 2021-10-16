<template>
<!-- ini bisa buat components lagi, bisa juga buat contentnya yaa -->
    <div class="container-main">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cupiditate corrupti est, vel nesciunt natus tempore recusandae quae cumque eius esse nihil amet blanditiis, illo facere. Accusantium voluptatum tempora earum? Perferendis itaque eveniet exercitationem, beatae quasi dolore, aperiam recusandae rerum voluptatibus perspiciatis, ullam dolorum praesentium accusantium saepe placeat iste veritatis.
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
        <div class="score">
            <div class="container-box">
            </div>
            <div class="container-text-box">
                {{score}}
            </div>
            <div class="container-bintang-item">
                <img src="../assets/svg/MainPage/bintang-item.svg" alt="" class="oren">
            </div>
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
</template>

<script>
import Cookies from 'js-cookie'
    export default {
        // ini buat naro script script yg diperluin buat websitenya, intinya logic nya inituh.
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
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.container-main{
    background-image: url("../assets/png/MainPage/bg_terang.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1920px 4592px;
    height: 4592px;
    margin-top: -10px;
}

.container-text-box{
    position: absolute;
    width: 1157.92px;
    margin: 88px 1700px;
    text-align: justify;
    font-size: 48px;
    font-family: Tf Grotesk;
    
}

.container-text-middle-title{
    position: absolute;
    width: 804px;
    font-size: 96px;
    margin: 220px 780px;
}

.container-text-middle{
    position: absolute;
    width: 1157.92px;
    margin: 350px 380px;
    text-align: justify;
    font-size: 24px;
}

.container-bulan{
    position: relative;
}

.container-bulan .oren{
    position: absolute;
    transform: translate(0%, 30%);
}

.container-kelinci{
    position: relative;
}

.container-kelinci .oren{
    position: absolute;
    transform: translate(225%, 67%);
}

.container-saturnus{
    position: relative;
}

.container-saturnus .ungu{
    position: absolute;
    height: 320px;
    transform: translate(20%, 300%);
}

.container-lolipop{
    position: relative;
}

.container-lolipop .ungu{
    position: absolute;
    transform: translate(58%, 59%);
}

.container-kamera{
    position: relative;
}

.container-kamera .ungu{
    position: absolute;
    transform: translate(90%, 490%);
}

.container-ikan{
    position: relative;
}

.container-ikan .ungu{
    position: absolute;
    transform: translate(500%, 560%);
}

.container-ikan .oren{
    position: absolute;
    transform: translate(-40%, 400%);
}

.container-penggaris{
    position: relative;
}

.container-penggaris .ungu{
    position: absolute;
    transform: translate(20%, 125%);
}

.container-pita{
    position: relative;
}

.container-pita .oren{
    position: absolute;
    height: 350px;
    transform: translate(15%, 660%);
}

.container-permen{
    position: relative;
}

.container-permen .oren{
    position: absolute;
    transform: translate(30%, 81%);
}

.container-box{
    position: absolute;
    height: 80px;
    width: 250px;
    background-color: #fff;
    transform: translate(630%, 100%);
    border-radius: 50px;
}

.container-bintang-item{
    position: absolute;
    transform: translate(1920%, 100%);
}

.container-segitiga{
    position: absolute;
    top: 750px;
    left: 917px;
}

.container-bintang-putih{
    position: relative;
}

.container-bintang-putih .putih1{
    position: absolute;
    width: 114px;
    height: 105.44px;
    left: 246px;
    top: 524px;
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

.container-ubur{
    position: relative;
}

.container-ubur .oren{
    position: absolute;
    transform: translate(48%, 68%);
}

.container-permen-bungkus{
    position: relative;
}

.container-permen-bungkus .oren{
    position: absolute;
    transform: translate(15%, 430%);
}

.container-awan-main{
    position: relative;
}

.container-awan-main .bawah-permen{
    position: absolute;
    transform: translate(-50%, 570%);
}

.container-papan{
    position: relative;
}

.container-papan .papan{
    position: absolute;
    transform: translate(130%, 360%);
}

.container-awan-main .bawah-papan{
    position: absolute;
    transform: translate(90%, 650%);
}

.container-awan-main .lubang-atas{
    position: absolute;
    transform: translate(100%, 710%);
}

.container-awan-main .lubang-bawah{
    position: absolute;
    transform: translate(60%, 740%);
}

.container-lubang{
    position: relative;
}

.container-lubang .lubang{
    position: absolute;
    transform: translate(110%, 630%);
}

.container-awan-main .belakang-kasur{
    position: absolute;
    height: 50%;
    transform: translate(10%, 800%);
}

.container-kasur .kasur{
    position: absolute;
    height: 85%;
    transform: translate(0%, 435%);
}

.container-kasur .depan-kasur1{
    position: absolute;
    height: 50%;
    transform: translate(0%, 830%) rotate(180deg);
}

.container-kasur .depan-kasur2{
    position: absolute;
    height: 50%;
    transform: translate(-40%, 825%);
}

.score{
    position: sticky;
    top: -10px;
}

@media only screen and (max-width: 1367px) {
    .container-welcome{
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
    width: 570px;
    font-size: 96px;
    margin: 220px 520px;
    }

    .container-text-middle{
    position: absolute;
    width: 822.12px;
    margin: 350px 270px;
    text-align: justify;
    font-size: 24px;
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
        top: 525px;
        left: 642px;
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

}
</style>