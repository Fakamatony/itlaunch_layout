<template >
  <div id="app" >
    <v-main-wrapper/>
  </div>
</template>

<script>
import VMainWrapper from '@/components/v-main-wrapper.vue';
export default {
  name: 'App',
  components: {
    VMainWrapper,
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  margin: 0 ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
