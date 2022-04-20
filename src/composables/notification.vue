<script lang="ts" setup>
import { ref,nextTick } from "vue";

const activeName = ref('site');
const show = ref(false);
nextTick(() => {
    document.documentElement.addEventListener('click',() => {
        show.value = false
    })
})
</script>

<template>
<main class="notification">
    <i class="fas fa-align-justify" @click.stop="show = !show" />
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
        <el-tab-pane label="系统通知" name="site" >
            <a href="" >
                测试文字文字测试文字文字测试文字文字测试文字文字测试文字文字测试文字文字测试文字文字测试``
            </a>
            <a href="" >
                测试文字文字测试文字文字测试文字文字测试文字文字测试文字文
            </a>
            <a href="" >
                测试文字文字测试文字文字测试文字文字测试文字文字
            </a>
        </el-tab-pane>
        <el-tab-pane label="站内消息" name="message">Name</el-tab-pane>
    </el-tabs>
</main>
</template>


<style lang="scss">
.notification{
    @apply relative;
    .lists{
        @apply absolute w-[300px] right-[-60px] bg-white px-3 py-2 border rounded-md shadow-md z-10 text-sm;
        a{
            @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-fuchsia-400;
        }
    }
}
</style>
