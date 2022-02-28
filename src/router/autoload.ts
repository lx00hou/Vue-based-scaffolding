import { RouteRecordRaw } from "vue-router";
import {env} from '@/utils'
// 动态注册路由
// { 
//     path:"/",
//     name:"",
//     compoontns:xx,
//     children:[
//         {}
//     ]
// } 

// import.meta.globEager()    vite api 遍历文件方法
const layouts = import.meta.globEager('../layouts/*.vue');
// 动态生成子路由
const views = import.meta.globEager('../views/**/*.vue');


function getRoutes(){
    const layoutRoutes = [] as RouteRecordRaw[]

    Object.entries(layouts).forEach(([file,module]) => {
        const route = getRouteByModule(file,module);
        route.children = getChildrenRoutr(route);
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

function getRouteByModule (file:string,module:{[key:string]:any}){
    // const name = file.split('/').pop()?.split('.')[0];
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi,'');
    const route = {
        name:name.replace('/','.'),
        path:`/${name}`,
        component:module.default
    }
    // 可以在页面自定义路由
    return Object.assign(route,module.default?.route) 
}
//  动态获取子路由
function getChildrenRoutr(layoutRoute:RouteRecordRaw){
    const routes = [] as RouteRecordRaw[];
    Object.entries(views).forEach(([file,module]) => {
        if(file.includes(`../views/${layoutRoute.name}`)){
            const route = getRouteByModule(file,module);
            routes.push(route);
        }
    })
    return routes
}

const routes = env.VITE_ROUTER_AUTOLOAD?getRoutes():[] as RouteRecordRaw[];
export default routes;