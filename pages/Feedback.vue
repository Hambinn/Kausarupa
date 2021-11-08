<template>
    <div class="bg-feedback">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-bintang-oren-feedback">
                    <img src="../assets/gif/bintang oren.GIF" alt="" class="oren-feedback">
                </div>
                <div class="container-bintang-ungu-feedback">
                    <img src="../assets/gif/bintang pink.GIF" alt="" class="ungu-feedback">
                </div>
                <div class="container-box-besar-form">
                    <p class="title-feedback">Feedback</p>
                    <form action="">
                        <textarea name="feedback-form" id="feedback-form" cols="36" rows="7" placeholder="Message">
                        </textarea>
                    </form>
                </div>
                <div class="tombol-submit-feedback">
                    <p class="submit-feedback">Submit</p>
                </div>
            </div>
        </div>
        <rcp/>
    </div>
</template>

<script>
import rcp from '../components/rcp.vue'
    export default {
  components: { rcp },
        
    }
</script>

<style>
html,body{
    all: unset;
    margin: 0;
    padding: 0;
    font-family: 'Tf Grotesk';
    font-style: normal;
    font-weight: normal;
}

*{
    padding: 0;
    margin: 0;
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



.container-bintang-oren-feedback{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang-oren-feedback .oren-feedback{
    width: 7%;
    top: 50%;
    left: 50%;
    transform: translate(-430%, 210%);
}

.container-bintang-ungu-feedback{
    position: absolute;
    height: 100%;
    width: 100%;
}

.container-bintang-ungu-feedback .ungu-feedback{
    width: 5.19%;
    top: 50%;
    left: 50%;
    transform: translate(650%, 470%);
}

.container-box-besar-form{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 44%;
    width: 38%;
    transform: translate(-50%, -60%);
    text-align: center;
    background: rgba(196, 196, 196, 0.5);
    border-radius: 4.84%/7.5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container-box-besar-form .title-feedback{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -210%);

    font-family: Tf Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 4vw;
    color: black;
}

input{
    all: unset;
    width: 65%;
    height: 100%;
    border-radius: 50px;
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Roboto;
    font-size: 1.1vw;
    transform: translate(0%, 500%);
}

.tombol-submit-feedback{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 7.6%;
    width: 31.45%;
    transform: translate(-50%, 300%);

    background: #C4C4C4;
    border-radius: 4.4%/30%;
}

.tombol-submit-feedback .submit-feedback{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    font-family: 'Tf Grotesk-italic';
    font-style: italic;
    font-weight: normal;
    font-size: 2.3vw;
    color: black;
}

textarea {
    top: 50%;
    left: 50%;
    background-color: #f8f8f8;
    font-size: 1vw;
    resize: none;
    transform: translate(0%, 85%);
    background: #C4C4C4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8%/15%;
    padding: 3.5%;
    outline: none;
    border: none;
    font-family: Roboto;
}

</style>