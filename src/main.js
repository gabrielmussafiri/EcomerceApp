import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the store

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(store); // Use the store

app.mount('#app');
