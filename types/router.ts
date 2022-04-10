import 'vue-router'
import { IMenu } from '#/menu'
declare module 'vue-router'{
    interface RouteMeta {
        auth?:boolean,
        guest?:boolean,
        permissions?:string[],     // 权限
        menu?:IMenu,
        emterClass?:string,
        leaveClass?:string
    }
}