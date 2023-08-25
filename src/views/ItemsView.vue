<script setup>
import { defineProps } from 'vue';

const {product} = defineProps(['product'])

</script>

<template>
    <div class="card">
    <img :src="product.image" alt="">
    </div>
</template>