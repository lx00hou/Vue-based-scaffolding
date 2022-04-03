import { RouteRecordRaw } from 'vue-router';

export default {
    name: "editor",
    path: '/editor',
    component: () => import('@/layouts/admin.vue'),
    meta: { title: "编辑器", icon: 'fab fa-accusoft', show: true , auth:true },
    children: [
        {
            name: "base",
            path: "base",
            component: () => import('@/views/editor/base.vue'),
            // meta: { title: "404页面" , show: true },

        },
        {
            name: "markdown",
            path: "markdown",
            component: () => import('@/views/editor/markdown.vue'),
            meta: { title: "markdown" , show: true },
        }
    ]
} as RouteRecordRaw[]