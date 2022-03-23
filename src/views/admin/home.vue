<script setup lang="ts">
</script>

<template>
   <main class="grid grid-flow-col gap-3">
       <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(item,index) of 4" :key="index">
           <template #header>
           <div>
               <span>aaaaa</span>
           </div>
           </template>
           <!-- card body -->
       </el-card>
       
   </main>
</template>

<style scoped>
</style>