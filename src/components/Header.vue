<script setup>
import {RouterLink} from "vue-router"
</script>


<template>
    <main>
        <nav class="navbar">
            <div class="logo">
                <!-- <h1>MY Store</h1> -->
                <router-link to="/"><h1>MY Store</h1></router-link>
            </div>
            <div class="menu">
                <RouterLink active-class="active" to= "/products">Products</RouterLink>
                <RouterLink active-class="active" to= "/about">About</RouterLink>
                <RouterLink active-class="active" to= "/contacts">Contacts</RouterLink>
                <RouterLink active-class="active" to= ""><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></RouterLink>
                
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
    color:#fd6561;
    font-weight: bold;
    border-bottom: 4px solid #fd6561;
    
}
.navbar .logo a {
    text-decoration: none;  

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
.navbar .menu .active{
    color: #f63e4e;
}
/* .navbar .menu .a:hover{
    border-bottom:4px solid #f63e4e;
} */
</style>
