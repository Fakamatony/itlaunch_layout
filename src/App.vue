<template >
  <div id="app" >
    <v-header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer/>
  </div>
</template>

<script>
import VHeader from '@/components/static/v-header.vue';
import VFooter from '@/components/static/v-footer.vue';
export default {
  name: 'App',
  components: {
    VHeader,
    VFooter,
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
