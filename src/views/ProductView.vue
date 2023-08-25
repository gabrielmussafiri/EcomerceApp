
<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

const store = useStore();

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});

const addToCartLocal = (product) => {
  store.dispatch('addToCart', product); // Dispatch the addToCart action
};

import { computed } from 'vue';
const cartItems = computed(() => store.getters.cartItems);
</script>

<template>
  <main>
    <div class="sec">
      <div class="products">
        <div class="card" v-for="product in products" :key="product.id">
          <div class="img"><img :src="product.image" alt=""></div>
          <div class="title">{{ product.title }}</div>
          <h3 class="description">{{ product.category }}</h3>
          <div class="box">
            <div class="price">${{ product.price }}</div>
            <button @click="addToCartLocal(product)" class="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Cart Section -->
    <div class="cart">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="(cartProduct, index) in cartItems" :key="index">{{ cartProduct.title }}</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  padding: 20px 5%;
}

/* Products */
.sec {
  padding: 10px 5%;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.card {
  width: 310px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
}

.card img {
  height: 250px;
  width: 100%;
}

.card .description {
  padding: 5px 20px;
  opacity: 0.8;
  color: #424144;
}

.card .title {
  font-weight: 900;
  font-size: 20px;
  color: #424144;
  padding: 0 20px;
}

.card .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.card .box .price {
  color: #f63e4e;
  font-size: 20px;
  font-weight: bold;
}

.card .box .btn {
  font-size: 13px;
  color: #f63e4e;
  padding: 10px 18px;
  font-weight: 900;
  border: 1px solid #f63e4e;
  border-radius: 20px;
}

.card .box .btn:hover {
  cursor: pointer;
  background-color: #f63e4e;
  color: white;
}
</style>