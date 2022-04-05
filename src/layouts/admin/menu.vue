<script lang="ts" setup>
import { IMenu } from '#/menu';
import menuStore from '@/store/menuStore';
import router from '@/router'
let menu = menuStore();
const reset = () => {
    menu.menus.forEach(menu => {
        menu.isClick = false;
        menu.children?.forEach(cmenu => {
            cmenu.isClick = false
        })
    })
}

const handle = (pMenu:IMenu,cMenu?:IMenu) => {
    reset();
    pMenu.isClick = true;
    if(cMenu){
        cMenu.isClick = true;
        router.push({name:cMenu.route})
    }
}

</script>
<template>
<!-- 导航 -->
    <div class="menu w-[200px] bg-gray-900 p-4">
        <div class="logo text-gray-300 flex items-center">
            <i class="fab fa-500px text-fuchsia-300 mr-2 text-[25px]" />
            <span class="text-md">晚八点开始搬砖</span>
        </div>
        <!-- 菜单 -->
        <div class="left-container">
            <dl v-for="(menu,index) of menu.menus" :key="index">
                <dt @click="handle(menu)">
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
                 @click="handle(menu,cmenu)">
                    {{cmenu?.title}}
                </dd>
            </dl>
        </div>
    </div>
</template>
<style scoped lang="scss">
.admin .left-container {
    dl{
        @apply text-gray-300 text-sm;
        dt{
            @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
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

</style>