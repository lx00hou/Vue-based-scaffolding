<script setup lang="ts">
</script>

<template>
    <div class=" h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
        <img src="/img/vue.jpeg" class=" w-40 h-40 object-cover rounded-full border-8 border-white mb-8">
        <div>
            <router-link :to="{name:'admin.home'}" class="yc-button">后台管理</router-link>
            <router-link :to="{name:'login'}" class="yc-button yc-danger ml-3">用户登录</router-link>
        </div>
    </div>
</template>
<script lang="ts">
    export default{
       route:{name:'home'}
    }
    </script>
<style scoped>
</style>