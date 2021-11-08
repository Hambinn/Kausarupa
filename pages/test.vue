<template>
  <div>
    <iseng/>
    <rcp/>
  </div>
</template>

<script>
import Rcp from '../components/rcp.vue'
import iseng from './iseng.vue'

  export default {
  components: { iseng, Rcp },
  
    
  }
</script>

<style >
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

</style>