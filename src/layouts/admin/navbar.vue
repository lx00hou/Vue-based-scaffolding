<script lang="ts" setup>
import user from '@/store/userStore';
import utils from '@/utils'; 
import menuService from '@/composables/menu'
import Notification from '@/composables/notification.vue'

const userStroe = user();
const fullScreen = () => {
  document.documentElement.requestFullscreen()
}
</script>
>

<template>
<main class="bg-white p-3 px-5 flex justify-between  items-center">
  <div class="flex justify-center items-center">
    <div @click="menuService.toggleState">
      <i class="fas fa-left-right mr-2 cursor-pointer"  />
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="flex justify-center items-center relative cursor-pointer">
      <Notification class="mr-8" />
      <i class="fas fa-down-left-and-up-right-to-center mr-5" @click="fullScreen" />
      <div class="group relative">
        <div class="flex justify-center items-center">
          <img :src="userStroe.info?.avatar"  class=" w-8 h-8 rounded-full object-cover">
          <span class="ml-2 text-sm text-gray-600">
            {{userStroe.info?.name}}
          </span>
        </div>
        <section class="group-hover:block absolute right-0 top-full z-50 bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden">
          <div class="flex items-center cursor-pointer border-b py-3">
            <a class="far fa-folder-open"></a>
            <span class="text-xs text-gray-600 ml-2">文档资料</span>
          </div>
          <div class="flex items-center cursor-pointer border-b py-3">
            <a class="fas fa-home"></a>
            <span class="text-xs text-gray-600 ml-2">网站首页</span>
          </div>
          <div class="flex items-center cursor-pointer border-b py-3" @click="utils.user.logout()">
            <a class="fas fa-sign-out-alt"></a>
            <span class="text-xs text-gray-600 ml-2">退出登录</span>
          </div>
        </section>
      </div>
      
  </div>
</main>
</template>
    