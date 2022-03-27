import { RouteRecordRaw } from 'vue-router';

export default {
    name:"error",
    path:'/error',
    component:() => import('@/layouts/error.vue'),
    meta:{title:"错误页面",icon:'fab fa-behance',show:true},
    children:[
        {
            name:"error.404",
            path:"404",
            component:() => import('@/views/errors/404.vue'),
            meta:{title:"404页面",icon:'fab fa-behance',show:true},

        },
        {
            name:"error.500",
            path:"500",
            component:() => import('@/views/errors/500.vue'),
            meta:{title:"500页面",icon:'fab fa-behance',show:true},

        }
    ]
} as RouteRecordRaw[]