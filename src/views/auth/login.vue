<script lang="ts" setup>
</script>

<template>
<main class=" bg-slate-400 h-screen flex justify-center items-center">
      <div class="w-[720px] bg-white  grid grid-cols-2 rounded-md shadow-md overflow-hidden">
         <div class="p-6">
            <h2 class=" text-center text-gray-700 text-lg">会员登录</h2>
            <div class=" mt-8">
               <input type="text" placeholder="请输入手机号或邮箱" class="yc-input">
               <input type="text" placeholder="请输入密码" class="yc-input mt-4">
            </div>
            <button class="yc-btn mt-4">登录</button>
         </div>
         <div>
            <img src="/img/login.jpg" class=" h-80 w-full object-cover" alt="">
         </div>
      </div>
</main>
</template>

<style scoped lang="scss">
   .yc-input{
      @apply border border-gray-200 outline-none focus:ring-2  ring-offset-2 ring-violet-600 duration-300 
            w-full rounded-sm py-1 px-2 placeholder:text-sm focus:border-white
   }
   .yc-btn{
      @apply bg-violet-700 text-white w-full py-2 rounded-md hover:bg-violet-500
             duration-300
   }
</style>