<script setup>
  import { ref } from 'vue';
  import {RouterView} from "vue-router"
  import Header from './components/Header.vue';
  import CardView from "./views/CardView.vue";


</script>
<template>
  <div>
    <Header/>
    <RouterView/>
    
  </div>
</template>
<style scoped>
main{
    margin:0;
    padding: 0;
    font-family: sans-serif;
    padding: 20px 5%;
    
}
h1{
    font-size: 40px;
    text-align: center;
    
}
</style>