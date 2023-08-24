<script setup>
import {RouterLink} from "vue-router"
</script>
<template>
    <main>
        <nav class="navbar">
            <div class="Logo">
                <h1>MY Store</h1>
            </div>
            <div class="menu">
                <a href="">Product</a>
                <a href="">About</a>
                <a href="">Contact</a>
            
                
            </div>
        </nav>
        
    </main>
</template>

<style scoped>
main{
    margin:0;
    padding: 0;
    font-family: sans-serif;
}
.navbar {
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

}

</style>