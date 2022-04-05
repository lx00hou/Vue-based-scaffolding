import { RouteRecordRaw } from 'vue-router';

export default {
    name: "error",
    path: '/error',
    component: () => import('@/layouts/admin.vue'),
    meta: { auth:true , menu : { title: "错误页面", icon: 'fas fa-compass' }},
    children: [
        {
            name: "error.404",
            path: "404",
            component: () => import('@/views/errors/404.vue'),
            meta: { menu : { title: "404页面" } },

        },
        {
            name: "error.500",
            path: "500",
            component: () => import('@/views/errors/500.vue'),
            meta: { menu : { title: "500页面" } },

        }
    ]
} as RouteRecordRaw[]