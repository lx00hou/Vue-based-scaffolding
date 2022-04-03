<script lang="ts" setup>
import {router} from '@/store/router';
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';
const routeService = useRouter();
const routerStroe = router(); 
const resetMenu = () => {
    routerStroe.routes.forEach(route => {
        route.meta.isClick = false;
        route.children.forEach(route => {
            if(route.meta){
                route.meta.isClick = false
            }
        })
    })
}
const handle = (pRoute:RouteRecordNormalized,cRoute?:RouteRecordRaw) => {
    resetMenu();
    pRoute.meta.isClick = true;
    if(cRoute && cRoute.meta){
        cRoute.meta.isClick = true;
        routeService.push(cRoute)  // 页面跳转
    }
}

</script>
<template>
<!-- 导航 -->
    <div class="menu w-[200px] bg-gray-900 p-4">
        <div class="logo text-gray-300 flex items-center">
            <i class="fab fa-500px text-fuchsia-300 mr-2 text-[25px]" />
            <span class="text-md">晚八点开始搬砖</span>
        </div>
        <!-- 菜单 -->
        <div class="left-container">
            <dl v-for="(route,index) of routerStroe.routes" :key="index">
                <dt @click="handle(route)">
                    <section>
                        <i :class="route.meta.icon" />
                        <span>{{route.meta.title}}</span>
                    </section>
                    <section>
                        <i class="fas fa-angle-down  duration-300" :class="{'rotate-180':route.meta.isClick}" />
                    </section>
                </dt>
                <dd v-show="route.meta.isClick" 
                :class="{active:childRoute.meta?.isClick}" 
                v-for="(childRoute,index) in route.children"
                 :key="index"
                 @click="handle(route,childRoute)">
                    {{childRoute.meta?.title}}
                </dd>
            </dl>
        </div>
    </div>
</template>
<style scoped lang="scss">
.admin .left-container {
    dl{
        @apply text-gray-300 text-sm;
        dt{
            @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
            section{
                @apply flex items-center;
                i {
                @apply mr-2 text-lg

                }
            }
        }
        dd{
            @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer hover:bg-violet-500 bg-gray-700;
            &.active{
                @apply bg-violet-700  duration-300
            }
        }
    }
}

</style>