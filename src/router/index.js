//  Define our Routing Rules

import { createRouter,createWebHistory } from "vue-router";
import ProductView from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        // {
        //     path:"/",
        //     name:"home",
        //     component:HomeView
        // },
        {
            path:"/products",
            name:"products",
            component:ProductView
        },
        {
            path:"/about",
            name:"about",
            component:AboutView,
            
        }
    ]
})

export default router