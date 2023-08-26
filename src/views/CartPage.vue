<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
// Calculate the total price
const total = computed(() => {
  return cartItems.value.reduce((total, product) => total + product.price, 0);
});
// Method to remove a product from the cart
const removeFromCart = (index) => {
    store.commit('removeFromCart', index); // Call the mutation to remove the product
};

</script>

<template>
    <main>
      <div class="cart">
        <h2>My Card</h2>
        <ul>
          <li v-for="(cartProduct, index) in cartItems" :key="index">
            <div class="card">
              <div class="img"><img :src="cartProduct.image" alt=""></div>
              <div class="title">{{ cartProduct.title }}</div>
              <div class="price">${{ cartProduct.price }}</div>
              <button @click="removeFromCart(index)" class="btn">Remove</button>
            </div>
          </li>
        </ul>
        <div class="total">Total: ${{ total }}</div>
      </div>
    </main>
  </template>
  <style scoped>

  /* .cart{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  } */

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
.card .title {
  font-weight: 900;
  font-size: 20px;
  color: #424144;
  padding: 0 20px;
}
.card  .price {
  color: #f63e4e;
  font-size: 20px;
  font-weight: bold;
}
.card .btn {
  font-size: 13px;
  color: #f63e4e;
  padding: 10px 18px;
  font-weight: 900;
  border: 1px solid #f63e4e;
  border-radius: 20px;
}

.card  .btn:hover {
  cursor: pointer;
  background-color: #f63e4e;
  color: white;
}




</style>
  