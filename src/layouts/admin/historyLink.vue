<script lang="ts" setup>

import menuStore from "@/store/menuStore";
const menu =  menuStore()

</script>

<template>
    <div class="m-5 grid grid-flow-col gap-2 justify-start">
        <router-link  v-for="(menu,index) of menu.historyMenu" :key="index" :to="{name:menu.route}"
         class= "border bg-white rounded-sm hover:bg-violet-600 hover:text-white duration-300 py-2 px-3 text-sm "
         :class="{'bg-violet-600 text-white':$route.name == menu.route}"
         >
            {{menu.title}}
            <i class="fas fa-times ml-1" />
        </router-link>
    </div>

</template>