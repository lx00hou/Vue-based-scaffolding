import utils from "@/utils";
import getRoutes from './view' 
import { RouteRecordRaw } from "vue-router";
import autoLoadModuleRoutes from "./module";

let routes : RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoLoadModuleRoutes()  

export default routes
