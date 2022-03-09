<script lang="ts" setup>
</script>

<template>
<main>
    <div class="admin h-screen w-screen flex">
        <div class="menu w-[200px] bg-gray-900 p-4">
            <div class="logo text-gray-300 flex items-center">
                <i class="fab fa-500px text-fuchsia-300 mr-2 text-[25px]" />
                <span class="text-md">晚八点开始搬砖</span>
            </div>
        <!-- 菜单 -->
            <div>
                
            </div>
        </div>

        <div class="content flex-1 bg-gray-200">
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

<style scoped>
</style>