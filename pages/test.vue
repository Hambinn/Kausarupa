<template>
  <div>
    <umpan-balik/>
  </div>
</template>

<script>
import feed from '../components/feed.vue'
import UmpanBalik from '../components/UmpanBalik.vue'
  export default {
  components: { feed, UmpanBalik },
    
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