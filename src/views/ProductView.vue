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
        <div class="container" v-for="product in products" :key="product.id">
            <img :src="product.image" alt="">
        <!-- {{ product.title }} - ${{ product.price }} -->
      <!-- <button @click="addToCart(product)">Add to Cart</button> -->
    </div>
     
    </main>
</template>

<style scoped>
main{
    margin:0;
    padding: 0;
    font-family: sans-serif;
    padding: 20px 5%;
}
.container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  width:fit-content;
  height:fit-content;
  overflow:hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0 ,0,0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
  
}
.container img{
    width: 100%;
    height: 190px;
    margin: 0;
}
</style>

