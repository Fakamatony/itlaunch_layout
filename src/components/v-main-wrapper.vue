<template>
  <div class="v-main-wrapper container-fluid">
    <v-header/>
    <v-footer/>
  </div>
</template>

<script>
import VHeader from '@/components/static/v-header.vue';
import VFooter from '@/components/static/v-footer.vue';
export default {
  name: 'v-main-wrapper',
  components:{
    VHeader,
    VFooter,

  }
}
</script>

<style lang="scss">
  .v-main-wrapper{
    height: max-content;
    margin: 0;
  }
</style>
