import { RouteRecordRaw } from "vue-router";
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
const layouts = import.meta.globEager('../layouts/*.vue')

function getRoutes(){
    const layoutRoutes = [] as RouteRecordRaw[]

    Object.entries(layouts).forEach(([file,module]) => {
        const route = getRouteByModule(file,module);
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

function getRouteByModule (file:string,module:{[key:string]:any}){
    // const name = file.split('/').pop()?.split('.')[0];
    const name = file.replace(/.+layouts\/|\.vue/gi,'');
    const route = {
        name,
        path:`/${name}`,
        component:module.default
    }
    return route
}

export default getRoutes()