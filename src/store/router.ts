
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
export const router = defineStore('router', {
    state: () => {
        return {
            routes: getShowRoutes()
        }
    }
})

// 获取 存在 children 并且 meta.show 显示为 true 。且 子路由中的 meta.show 显示为 true 的 全部路由 
function getShowRoutes() {
    const router = useRouter();
    const routes = router.getRoutes()
        .filter(route => route.children.length && route.meta?.show)
        .map(route => {
            route.children = route.children.filter(route => route.meta?.show)
            return route
        }).filter(route => route.children.length)
    return routes
}