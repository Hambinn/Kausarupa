<template>
    <div class="bg-loading">
        <div class="top-cont">
            <div class="canvas">
                <div class="container-kotak-loading">
                    <kotak-loading/>
                </div>
                <div class="container-tanda-seru">
                    <img src="~/assets/png/LoadingPage/tanda-seru.png" alt="" class="tanda-seru">
                </div>
                <div class="container-orang-melayang">
                    <img src="~/assets/png/LoadingPage/orang-melayang.png" alt="" class="melayang">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kotakLoading from '../components/Loading/kotakLoading.vue'
    export default {
  components: { kotakLoading },
  mounted() {
    //   set timeout and push to other page
    setTimeout(() => {
      this.$router.push('/Welcome')
        }, 3000)
        
    }
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

.bg-loading{
    position: absolute;
    text-align: center;
    background-image: url("~/assets/png/LoadingPage/bg-loading.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    }

.container-tanda-seru{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 4;
}

.container-tanda-seru .tanda-seru{
    width: 9%;
    top: 50%;
    left: 50%;
    transform: translate(215%, 170%);
}

.container-orang-melayang{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
}

.container-orang-melayang .melayang{
    width: 47%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-44%, 70%);
}

</style>