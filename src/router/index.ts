import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:"home",
            component:() => import ('../views/home.vue')
        }
    ]
})
export function setupRouter(app:App){
    app.use(router)
}