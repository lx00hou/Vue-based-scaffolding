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
            <div class="left-container">
                <dl>
                    <dt>
                        <section>
                            <i class="fab fa-behance-square" />
                            <span>错误页面</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down" />
                        </section>
                    </dt>
                    <dd class="active">
                        404
                    </dd>
                    <dd>
                        403
                    </dd>
                </dl>
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

<style scoped lang="scss">
.admin .left-container dl{
    @apply text-gray-300 text-sm
}
.admin .left-container dl dt{
    @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
}
.admin .left-container dl dt section{
    @apply flex items-center
}
.admin .left-container dl dt section i {
    @apply mr-2 text-sm
}
.admin .left-container dl dd{
    @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer;
}
.admin .left-container dl .active{
    @apply bg-violet-700 hover:bg-violet-500 duration-300

}
</style>