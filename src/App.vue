<template>
  <div id="app">
    <!--<div>-->
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
  <!--</div>-->
    <Header></Header>
    <router-view/>
    <Footer class=""></Footer>
  </div>
</template>
<script>
  import Header from './components/common/Header';
  import Footer from './components/common/Footer';
    export default {
        name: 'App',
        components:{ Header, Footer},
    }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
