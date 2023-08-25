<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
// Calculate the total price
const total = computed(() => {
  return cartItems.value.reduce((total, product) => total + product.price, 0);
});

</script>

<template>
    <main>
      <div class="cart">
        <h2>Your Cart</h2>
        <ul>
          <li v-for="(cartProduct, index) in cartItems" :key="index">
            <div class="card">
              <div class="img"><img :src="cartProduct.image" alt=""></div>
              <div class="title">{{ cartProduct.title }}</div>
              <div class="price">${{ cartProduct.price }}</div>
            </div>
          </li>
        </ul>
        <div class="total">Total: ${{ total }}</div>
      </div>
    </main>
  </template>
  <style scoped>
</style>
  