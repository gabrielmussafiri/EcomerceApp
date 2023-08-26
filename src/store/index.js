import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
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
