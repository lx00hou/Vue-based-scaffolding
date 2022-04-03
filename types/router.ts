import 'vue-router'
import { boolean } from 'yup'

declare module 'vue-router'{
    interface RouteMeta {
        auth?:boolean,
        guest?:boolean,
        //  路由是否在菜单显示
        show?:boolean,
        // 菜单标题
        title?:string,
        icon?:string,
        isClick?:boolean,
        permissions?:string[]     // 权限
    }
}