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
        <!-- <h1>Product</h1> -->
        <div class="sec" >

            <div class="products">

                <div class="card" v-for="product in products" :key="product.id">
                    <div class="img"><img :src="product.image" alt=""></div>
                    <div class="title">{{ product.title }}</div>
                    <!-- <div class="description">{{ product.description }}</div> -->
                    <h3 class="description">{{ product.category }}</h3>
                    <div class="box">
                        <div class="price">${{ product.price }}</div>
                        <button @click="addToCart(product)" class="btn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
                    </div>
                </div>

            </div>
       
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
font-size: 20px;
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

