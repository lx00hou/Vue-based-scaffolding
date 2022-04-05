
import { defineStore } from 'pinia'
import { IMenu } from '@/menu'
import router from '@/router'
export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[]
        }
    },
    actions:{
        init(){
            this.getMenuByRoute();
        },
        // 根据路由获取菜单
        getMenuByRoute() {
            this.menus = router
              .getRoutes()
              .filter(route => route.children.length && route.meta.menu)
              .map(route => {
                let menu: IMenu = { ...route.meta?.menu }
                menu.children = route.children
                  .filter(route => route.meta?.menu)
                  .map(route => {
                    return { ...route.meta?.menu, route: route.name }
                  }) as IMenu[]
                return menu
              })
              .filter(menu => menu.children?.length) as IMenu[]
        },
    }
})


