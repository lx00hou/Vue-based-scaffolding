<script lang="ts" setup>

// import menuStore from "@/store/menuStore";
// let menus =  menuStore()
import menuService from '@/composables/menu'


</script>

<template>
    <div class="m-5 grid grid-flow-col gap-2 justify-start" v-show="menuService.history.value.length">
        <div  v-for="(item,index) of menuService.history.value" :key="index"
         class= "border bg-white rounded-sm hover:bg-violet-600 hover:text-white duration-300 py-2 px-3 text-sm "
         :class="{'bg-violet-600 text-white':$route.name == item.route}"
         >
            <router-link  :to="{name:item.route}">{{item.title}}</router-link>
            <i class="fas fa-times ml-1 cursor-pointer hover:text-yellow-500 " @click="menuService.remoeHistoryMenu(item)" />
        </div>
    </div>
</template>