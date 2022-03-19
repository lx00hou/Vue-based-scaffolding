<script lang="ts" setup>
import MenuComponent from './admin/menu.vue';
import navbarVue from './admin/navbar.vue';
</script>

<template>
<main>
    <div class="admin h-screen w-screen flex">
        <!-- 左侧目录 -->
        <MenuComponent  />
        <div class="content flex-1 bg-gray-200">
            <navbarVue />
            <router-view />
        </div>
    </div>
</main>
</template>


<script lang="ts">
export default {
    route:{ meta : {auth:true} }
}
</script>
