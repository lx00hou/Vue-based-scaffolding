<script lang="ts" setup>
import MenuComponent from './admin/menu.vue';
import navbarVue from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
import menuStore from '@/store/menuStore';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
const route = useRoute();
const menu = menuStore();
menu.init();
onBeforeRouteUpdate(() => {
    menu.addHistoryMenu(route)
})
</script>

<template>
<main>
    <!-- w-screen -->
    <div class="admin min-h-screen min-w-screen  flex">
        <!-- 左侧目录 -->
        <MenuComponent class="hidden md:block"  />
        <!-- 右侧页面 -->
        <div class="content flex-1 bg-gray-100">
            <navbarVue />
            <HistoryLink />
            <div class="m-5">
                <router-view #default="{ Component }">
                    <Transition appear enter-active-class="animate_animated" >
                        <component :is="Component" />
                    </Transition>
                </router-view>
            </div>
        </div>
    </div>
</main>
</template>


<script lang="ts">
export default {
    route:{ meta : {auth:true} }
}
</script>
