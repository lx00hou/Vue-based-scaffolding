<script setup lang="ts">
import {ref,nextTick} from 'vue';
import {echart1,echart2} from './echarts'
interface Icard {
    title:string,
    price:number,
    icon:string,
    iconColor:string,
    totalTitle:string
    total:number
}
const cardData = ref<Icard[]>([
    {title:"总人数",price:123,iconColor:'text-violet-500', icon:'fas fa-ad',total:1123321,totalTitle:"总人数"},
    {title:"销售额",price:533,iconColor:'text-green-600',icon:'fab fa-accusoft',total:1213231,totalTitle:"总销售额"},
    {title:"订单数",price:123,iconColor:'text-blue-500',icon:'fab fa-airbnb',total:5435343,totalTitle:"总订单数"},
    {title:"评论数",price:123,iconColor:'text-red-500',icon:'fab fa-angrycreative',total:6768783,totalTitle:"总评论数"}
])
nextTick(() => {
    echarts.init(document.getElementById('echart1')).setOption(echart1);
    echarts.init(document.getElementById('echart2')).setOption(echart2);
})
</script>

<template>
<main>
   <div class="grid md:grid-flow-col gap-3">
       <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(item,index) of cardData" :key="index">
           <template #header>
           <div class="flex justify-between items-center">
               {{item.title}}
               <el-tag type="danger" size="small"  effect="dark" >月</el-tag>
           </div>
           </template>
           <section class="flex mt-3 justify-between items-center">
               <span>!123123 </span>
               <i :class="[item.icon,item.iconColor]" class="text-5xl" />
           </section>
           <section class="text-base flex mt-6 justify-between">
               {{item.totalTitle}}
               <span>{{item.total}} </span>
           </section>
       </el-card>
   </div>
   <div class=" mt-6  grid md:grid-cols-2 gap-3">
       <el-card shadow="always" :body-style="{ padding: '20px' }">
           <template #header>
               <div>用户统计</div>
           </template>
        <div id="echart1"  class="h-72 w-full" />
       </el-card>
       <el-card shadow="always" :body-style="{ padding: '20px' }">
           <template #header>
               <div>销售额</div>
           </template>
        <div id="echart2" class="h-72 w-full" />
       </el-card>

   </div>
</main>
</template>

<style scoped>
</style>