<script lang="ts" setup>
import MenuComponent from './admin/menu.vue';
import navbarVue from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue'
import menu from '@/composables/menu';
const route = useRoute();
watch(route,() => {
menu.addHistoryMenu(route)
},{immediate:true})

// const menu = menuStore();
// menu.init();
// onBeforeRouteUpdate(() => {
//     menu.addHistoryMenu(route)
// })

</script>

<template>
<main>
    <!-- w-screen -->
    <div class="admin grid md:grid-cols-[auto_1fr] min-h-screen min-w-screen">
        <!-- 左侧导航目录 -->
        <MenuComponent  />
        <!-- 右侧页面 -->
        <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
            <div class>
                <navbarVue />
                <HistoryLink />
            </div>

            <div class="m-3 relative overflow-y-auto">
                <router-view #default="{ Component  }">
                    <Transition appear enter-active-class="animate_animated" >
                        <component :is="Component" class="absolute w-full" />
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
