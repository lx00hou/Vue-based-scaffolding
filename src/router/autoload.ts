// 动态注册路由
import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.globEager('../layouts/*.vue')

Object.entries(layouts).forEach(([file,module]) => {
    const route = getRouteByModule(file,module)
})

function getRouteByModule (file:string,module:{[key:string]:any}){
    console.log(file);
    console.log(module);
}

const layoutRoutes = [] as RouteRecordRaw[]

export default layoutRoutes