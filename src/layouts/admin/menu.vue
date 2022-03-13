<script lang="ts" setup>
import { ref } from 'vue'
interface IMenuItem {
    title:string,
    icon?:string,
    active?:boolean
}
interface IMenu extends IMenuItem{
    active?:boolean
    children?:IMenuItem[]
} 
const menus = ref <IMenu[]>([
    {
        title:"错误页面",icon:'fab fa-bimobject',active:true,
        children:[
            {title:'404'},
            {title:'403',active:true},
            {title:'500'},
        ]
    },
    {
        title:"编辑器",icon:'fab fa-behance-square',
        children:[
            {title:'markdown编辑器',active:true},
            {title:'富文本编辑器'}
        ]
    }
])
const resetMenu = () => {
    menus.value.forEach(val => {
        val.active = false;
        val.children?.forEach(i => i.active = false)
    })
}
const handle = (pmenu:IMenuItem,cmenu?:IMenuItem) => {
    resetMenu();
    pmenu.active = true;
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
            <dl v-for="(menu,index) of menus" :key="index">
                <dt @click="handle(menu)">
                    <section>
                        <i :class="menu.icon" />
                        <span>{{menu.title}}</span>
                    </section>
                    <section>
                        <i class="fas fa-angle-down" />
                    </section>
                </dt>
                <dd v-show="menu.active" :class="{active:cmenu.active}" v-for="(cmenu,index) in menu.children" :key="index">
                    {{cmenu.title}}
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
                @apply mr-2 text-sm

                }
            }
        }
        dd{
            @apply py-3 pl-4 my-2  text-white rounded-md cursor-pointer hover:bg-violet-500;
            &.active{
                @apply bg-violet-700  duration-300
            }
        }
    }
}

</style>