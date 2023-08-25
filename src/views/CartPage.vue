<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
</script>

<template>
    <main>
      <div class="cart">
        <h2>Your Cart</h2>
        <ul>
          <li v-for="(cartProduct, index) in cartItems" :key="index">{{ cartProduct.title }}</li>
        </ul>
      </div>
    </main>
  </template>