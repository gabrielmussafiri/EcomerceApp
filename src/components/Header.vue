<script setup>
import {RouterLink} from "vue-router"
</script>
<template>
    <main>
        <nav class="navbar">
            <div class="logo">
                <h1>MY Store</h1>
            </div>
            <div class="menu">
                <a href="">Product</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href=""><img src="../assets/shopping.svg" alt=""></a>
            
                
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
    position: sticky;
    z-index: 999;
    background-color: #ffffff;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
}
.navbar .logo h1{
    color:#424144;
    border-bottom: 4px solid #fd6561;
}
.navbar .menu{
    display: inline-block;
}
.navbar .menu a {
    /* display:block; */
    margin-left: 20px;
    color: #424144;
    border-bottom: 4px solid transparent;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
}
.navbar .menu a img{
    color: #f63e4e;
    height: 30px;
    margin:-7px;
}
</style>