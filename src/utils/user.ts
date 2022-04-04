import userApi, { IloginData } from '@/apis/userApi';
import { CacheEnum } from '@/enum/cacheEnum'
import store from './store'
import router from '@/router'
import userStore from '@/store/userStore';

export async function login(values:IloginData){
    const {result:{token}} = await userApi.login(values);
   store.set(CacheEnum.TOKEN_NAME,{ token })
   const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME)??'home' 
   router.push( { name:routeName })
}

export function logout(){
    // 退出登录 移除token 跳转首页 删除用户的保存信息
    store.remove(CacheEnum.TOKEN_NAME)
    router.push('/')
    userStore().info = null;
}

