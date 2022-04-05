import { RouteRecordRaw } from 'vue-router';

export default {
    name: "editor",
    path: '/editor',
    component: () => import('@/layouts/admin.vue'),
    meta: { auth:true , menu:{title: "编辑器", icon: 'fab fa-accusoft'}},
    children: [
        {
            name: "base",
            path: "base",
            component: () => import('@/views/editor/base.vue'),
            meta: { menu:{title: "base" } },
        },
        {
            name: "markdown",
            path: "markdown",
            component: () => import('@/views/editor/markdown.vue'),
            meta: { menu:{title: "markdown"} },
        }
    ]
} as RouteRecordRaw[]