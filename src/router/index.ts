import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
import layoutRoutes from '@/router/autoload';
const router = createRouter({
    history:createWebHistory(),
    routes:[...routes,...layoutRoutes],
})
export function setupRouter(app:App){
    app.use(router)
}