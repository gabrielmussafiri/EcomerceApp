import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit('addToCart', product);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    }
  }
});
