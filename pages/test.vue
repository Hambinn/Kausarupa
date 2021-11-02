<template>
    <div class="bungkus">
        <katalog/>
    </div>
</template>

<script>
import Katalog from '../components/Katalog.vue'
    export default {
  components: { Katalog },
        
    }
</script>

<style >
html,body{
    overflow: hidden;
}
*{
    margin: 0;
    padding: 0;
}

.bungkus{
    position: absolute;
    height: 80%;
    width: 80%;
    transform: translate(13%,20%);
}
</style>