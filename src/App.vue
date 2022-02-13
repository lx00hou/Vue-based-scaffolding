<script setup lang="ts">
import userApi from '@/apis/userApi';
const request = await userApi.info()
console.log(request.result.name); 
</script>

<template>
<ul class="bg-red-800">
  <li>首页</li>
  <li>会员</li>
  <li>文章</li>
</ul>
  <router-view />
</template>

<style>
</style>
