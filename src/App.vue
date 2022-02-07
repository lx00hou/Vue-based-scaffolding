<script setup lang="ts">
import helper,{env} from '@/types/helper';
console.log(helper.env);
console.log(env);
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
