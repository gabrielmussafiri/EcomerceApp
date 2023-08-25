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
  cart.value.push(product.price);
  console.log(cart);
};

onMounted(fetchProducts);

</script>

<template>
    <main>
        <h1>Product</h1>
        <section class="sec" v-for="product in products" :key="product.id">
            <div class="products">

                <div class="card">
                    <div class="img">
                        <img :src="product.image" alt="">
                    </div>

                    <div class="title">{{ product.title }}</div>
                    <!-- <div class="description">{{ product.description }}</div> -->
                    <h3 class="description">{{ product.category }}</h3>
                    
                    <div class="box">
                        <div class="price">${{ product.price }}</div>
                        <button @click="addToCart(product)" class="btn">Add to Cart</button>
                    </div>
                </div>

            </div>
       
        </section>
     
    </main>
</template>

<style scoped>
main{
    margin:0;
    padding: 0;
    font-family: sans-serif;
    padding: 20px 5%;
}
/* Products */
.sec{
    padding: 10px 5%;
}
.products{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
}

.products .card{
    width: 310px;
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 20px;
}
.products .card img{
    height: 250px;
    width: 100%;
}
.products .card .description{
    padding: 5px 20px;
    opacity: 0.8;
    color:#424144;

}
.products .card .title{
    font-weight: 900;
    font-size: 20px;
    color:#424144;
    padding: 0 20px;
}

.products .card .box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.products .card .box .price{
color: #f63e4e;
font-weight: bold;
}
.products .card .box .btn{
    font-size: 13px;
    color: #f63e4e;
    padding: 10px 18px;
    font-weight: 900;
    border:1px solid #f63e4e;
    border-radius: 20px;
}
.products .card .box .btn:hover{
    cursor: pointer;
    background-color: #f63e4e;
    color: white;
}
</style>

