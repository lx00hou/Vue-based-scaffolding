import { env } from "@/utils";
import getRoutes from './view' 
import { RouteRecordRaw } from "vue-router";
import autoLoadModuleRoutes from "./module";

let routes = [] as RouteRecordRaw[]
if(env.VITE_ROUTER_AUTOLOAD){
    routes = getRoutes()   
}else {
    routes = autoLoadModuleRoutes()
}
export default routes
