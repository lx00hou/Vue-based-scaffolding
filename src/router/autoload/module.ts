import { RouteRecordRaw } from "vue-router";

export default function autoLoadModuleRoutes(){
    const module = import.meta.globEager('../module/**/*.ts');

    const routes = [] as RouteRecordRaw[]
    Object.keys(module).forEach(key => {
        routes.push(module[key].default)
    })
    return routes
}