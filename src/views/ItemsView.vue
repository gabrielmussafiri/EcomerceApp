<script setup>
import { defineProps } from 'vue';

const {product} = defineProps(['fetchProducts'])

</script>

<template>
    <div class="card">
    <img :src="product.image" alt="">
    </div>
</template>