<script lang="ts" setup>

import menuStore from "@/store/menuStore";
let menus =  menuStore()

</script>

<template>
    <div class="m-5 grid grid-flow-col gap-2 justify-start" v-show="menus.historyMenu.length">
        <div  v-for="(menu,index) of menus.historyMenu" :key="index"
         class= "border bg-white rounded-sm hover:bg-violet-600 hover:text-white duration-300 py-2 px-3 text-sm "
         :class="{'bg-violet-600 text-white':$route.name == menu.route}"
         >
            <router-link  :to="{name:menu.route}">{{menu.title}}</router-link>
            <i class="fas fa-times ml-1 cursor-pointer hover:text-yellow-500 " @click="menus.remoeHistoryMenu(menu)" />
        </div>
    </div>
</template>