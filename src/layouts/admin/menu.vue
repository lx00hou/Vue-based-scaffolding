<script lang="ts" setup>
import menuService from '@/composables/menu'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()


watch(route,() => menuService.setCurrentMenu(route), { immediate:true })

</script>
<template>
<!-- 导航 -->
    <div class="menu w-[200px] bg-gray-900" :class="{close:menuService.close.value}">
        <div class="logo">
            <i class="fab fa-500px text-fuchsia-300 mr-2 text-[25px]" />
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
                <dt @click="menu.isClick = true">
                    <section>
                        <i :class="menu.icon" />
                        <span>{{menu.title}}</span>
                    </section>
                    <section>
                        <i class="fas fa-angle-down  duration-300" :class="{'rotate-180':menu.isClick}" />
                    </section>
                </dt>
                <dd v-show="menu.isClick" 
                :class="{active:cmenu.isClick}" 
                v-for="(cmenu,index) in menu.children"
                 :key="index"
                 @click="$router.push( {name:cmenu.route} )">
                    {{cmenu?.title}}
                </dd>
            </dl>
        </div>
    </div>
</template>
<style scoped lang="scss">
.menu  {
    .logo {
        @apply  text-gray-300 flex items-center p-4
    }
    .left-container{
        dl{
            @apply text-gray-300 text-sm;
            dt{
                @apply text-sm p-4 flex justify-between cursor-pointer items-center;
                section{
                    @apply flex items-center;
                    i {
                    @apply mr-2 text-lg

                    }
                }
            }
            dd{
                @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer hover:bg-violet-500 bg-gray-700;
                &.active{
                    @apply bg-violet-700  duration-300
                }
            }
        }
    }
    &.close{
        width: auto;
        .logo{
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
            }
        }
    }
}


</style>