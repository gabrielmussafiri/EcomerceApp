//  Define our Routing Rules

import { createRouter,createWebHistory } from "vue-router";
import ProductView from '../views/ProductView.vue';




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        // {
        //     path:"/",
        //     name:"home",
        //     component:HomeView
        // },
        {
            path:"/about",
            name:"about",
            component:AboutView
        }
        // {
        //     path:"/cars/:id",
        //     name:"car",
        //     component:CarView,
        //     children: [
        //         {
        //             path:"contact",
        //             component:ContactView
        //         }
        //     ]
        // }
    ]
})

export default router