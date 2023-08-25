<script setup>
import ItemsView from '../views/ItemsView.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const cart = ref([]);

const fetchProducts = () => {
  axios.get('https://fakestoreapi.com/products')
    .then(response => {
      products.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
};

const addToCart = (product) => {
  cart.value.push(product);
};

onMounted(fetchProducts);

</script>

<template>
    <main>
        <h1>Product</h1>
        <ItemsView/>
        
        
    </main>
</template>

<style scoped>
main{
    margin:0;
    padding: 0;
    font-family: sans-serif;
    padding: 20px 5%;

    
}
</style>

