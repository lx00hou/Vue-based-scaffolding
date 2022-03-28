import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
export const router = defineStore('router', {
    state: () => {
        return {
            routes: getShowRoutes()
        }
    }
})

function getShowRoutes() {
    const router = useRouter();
    const routes = router.getRoutes()
        .filter(route => route.children.length && route.meta?.show)
        .map(route => {
            route.children = route.children.filter(route => route.meta?.show)
            return route
        })
    console.log(routes);
    return routes
}