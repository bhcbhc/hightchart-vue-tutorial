<template>
  <div id="app">
    <nav-header />
    <router-view/>
  </div>
</template>

<script>
import navHeader from './components/Header'
export default {
  name: 'App',
  components: {
    navHeader
  }
}
</script>

<style lang="scss">
 @import "styles/app";
 @import "styles/font-awesome/scss/font-awesome";
 @import "styles/constant";
 #app {
   height: 100%;
   position: relative;
   padding-top: $header-height;
 }
</style>
