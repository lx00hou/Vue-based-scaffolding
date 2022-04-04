<script lang="ts" setup>
import v from '@/plugins/validate';
import utils from "@/utils";
const { Form , Field , ErrorMessage } = v
const schema = {
   account:{required:true,regex:/.+@.+|\d{11}/},
   password:{ required:true,min:6 }
}
const onSubmit = async (values:any) => {
   utils.user.login(values)
}
</script>
<script lang="ts">
export default {
   route:{ name:'login',meta:{ guest:true } }
}
</script>

<template>
<Form class @submit="onSubmit" :validation-schema="schema" #default = "{ errors }">
   <div class="w-[720px] bg-white  md:grid grid-cols-2 rounded-md shadow-md overflow-hidden ">
      <div class="p-6">
         <h2 class=" text-center text-gray-700 text-lg">会员登录</h2>
         <div class=" mt-8">
            <Field name="account" value="1132125385@qq.com" class="yc-input" label="账号"  placeholder="请输入账号或邮箱"/>
            <div v-if="errors.account" class="yc-error">请输入账号或邮箱</div>
            <Field name="password" value="123456" class="yc-input mt-4" label="密码" placeholder="请输入密码" type="password" />
            <ErrorMessage name="password" as="div" class="yc-error"  />
         </div>
         <ycBtn class="mt-4" />  
         <div class="flex justify-center mt-3">
            <i class="fa-brands fa-weixin text-white bg-green-600 rounded-full p-1 cursor-pointer"  />
         </div>
         <div class="flex gap-2 justify-center mt-6">
            <a href="" class="text-xs text-gray-700 hover:text-violet-500">网站首页</a>
            <a href="" class="text-xs text-gray-700 hover:text-violet-500">会员注册</a>
            <a href="" class="text-xs text-gray-700 hover:text-violet-500">找回密码</a>
         </div>
      </div>
      <div class="hidden md:block relative">
         <img src="/img/login.jpg" class="absolute h-wull w-full object-cover" alt="">
      </div>
   </div>
</Form>
</template>


<style lang="scss" scoped>
form{
   @apply bg-slate-400 h-screen flex justify-center items-start md:items-center p-5 md:p-0
}
</style>