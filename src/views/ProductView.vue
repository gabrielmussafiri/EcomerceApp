<template>
    <div>
      <h1>Products</h1>
      <div v-for="product in products" :key="product.id">
        {{ product.title }} - ${{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script setup>
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
  