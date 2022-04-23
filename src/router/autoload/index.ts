import utils from "@/utils";
import getRoutes from './view' 
import { Router, RouteRecordRaw } from "vue-router";
import autoLoadModuleRoutes from "./module";
import userStore from "@/store/userStore";

let routes : RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoLoadModuleRoutes()  

function autoload(router:Router){
    const user = userStore();
    routes = routes.map(route => {
        route.children = route.children?.filter(r =>{
            const permission = r.meta?.permission
            return permission?user.info.permissions.includes(permission):true
        })
        return route
    })
    routes.forEach(r => router.addRoute(r))
}

export default autoload
