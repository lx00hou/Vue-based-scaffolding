<script lang="ts" setup>
import menuService from '@/composables/menu'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()


watch(route,() => menuService.setCurrentMenu(route), { immediate:true })

</script>
<template>
<!-- 导航 -->
<main class="admin-menu" :class="{close:menuService.close.value}">
    <div class="menu w-[200px] bg-gray-900" >
        <div class="logo">
            <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]" />
            <span class="text-md">晚八点开始搬砖</span>
        </div>
        <!-- 菜单 -->
        <div class="left-container">
            <dl>
                <dt :class="{'bg-violet-500 text-white p-3':$route.name === 'admin.home'}" @click="$router.push('/admin')">
                    <section>
                        <i class="fas fa-home" />
                        <span>主页</span>
                    </section>
                </dt>
            </dl>
            <dl v-for="(menu,index) of menuService.menus.value" :key="index">
                <dt @click="menuService.toggleParentMenu(menu)">
                    <section>
                        <i :class="menu.icon" />
                        <span class="text-md">{{menu.title}}</span>
                    </section>
                    <section>
                        <i class="fas fa-angle-down  duration-300" :class="{'rotate-180':menu.isClick}" />
                    </section>
                </dt>
                <dd :class="!menu.isClick || menuService.close.value ? 'hidden':'block'">
                    <div  
                        :class="{active:cmenu.isClick}" 
                        v-for="(cmenu,key) in menu.children"
                        :key="key"
                        @click="$router.push( {name:cmenu.route} )">
                            {{cmenu?.title}}
                    </div>
                </dd>
            </dl>
        </div>
        <!-- 移动端 遮罩 -->
    </div>
    <!-- 移动端 遮罩 -->
    <div class="bg block md:hidden" @click="menuService.toggleState" />
</main>
</template>
<style scoped lang="scss">
.admin-menu{
    @apply z-20;
    .menu  {
        @apply h-full;
        .logo {
            @apply  text-gray-300 flex items-center p-4
        }
        .left-container{
            dl{
                @apply text-gray-300 text-sm relative p-4;
                dt{
                    @apply text-sm  flex justify-between cursor-pointer items-center;
                    section{
                        @apply flex items-center;
                        i {
                            @apply mr-2 text-lg
                        }
                    }
                }
                dd {
                    div{
                        @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer hover:bg-violet-500 bg-gray-700;
                        &.active{
                            @apply bg-violet-700  duration-300
                        }
                    }
                }
            }
        }
    
    }
}

@media screen and (min-width:768px) {
    .admin-menu {
        &.close{
            .menu{
                width: auto;
                    .logo{
                        @apply justify-center;
                        i {
                            @apply mr-0
                        }
                        span{
                            @apply hidden
                        }
                    }
                    .left-container {
                        dl{
                            dt{
                                @apply flex justify-center;
                                section{
                                    i {
                                        @apply mr-0
                                    }
                                    span{
                                        @apply hidden
                                    }
                                    &:nth-of-type(2){
                                        @apply hidden
                                    }
                                }
                            }
                            &:hover{
                                dd{
                                    // display:block !important;
                                    @apply block absolute left-full top-[0px] w-[200px] bg-gray-700;
                                }
                            }
                        }
                    
                    }
            }
        }
    }
}

@media screen and (max-width:768px) {
    .admin-menu{
        @apply h-screen w-[200px] absolute left-0 top-0 z-50;
        .menu{
            @apply h-full z-50 absolute;
        }
        .bg {
                @apply bg-gray-100 opacity-75 w-screen h-screen absolute z-40 left-0 top-0;
        }
        &.close {
            @apply hidden;
        }
    }

}
</style>