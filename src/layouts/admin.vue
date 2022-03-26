<script lang="ts" setup>
import MenuComponent from './admin/menu.vue';
import navbarVue from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
</script>

<template>
<main>
    <!-- w-screen -->
    <div class="admin h-min-screen  flex">
        <!-- 左侧目录 -->
        <MenuComponent class="hidden md:block"  />
        <!-- 右侧页面 -->
        <div class="content flex-1 bg-gray-100">
            <navbarVue />
            <HistoryLink />
            <div class="m-5">
                <router-view />
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
