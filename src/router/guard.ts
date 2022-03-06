import { store } from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard{
    constructor(private router:Router){}
    public run(){
        this.router.beforeEach((to,from) => {
            let token = store.get('token')?.token
            if(this.isLogin(to,token) === false) return {name:'login'} 
            if(this.isGuest(to,token) === false) return from
        })
    }

     // 游客
    public isGuest(route:RouteLocationNormalized,token:string | null){
        return Boolean(!route.meta.guest || (route.meta.guest && !token))
    }

     // 是否登录
    public isLogin(route:RouteLocationNormalized,token:string | null){
        return Boolean(!route.meta.auth || (route.meta.auth && token))
    }
}
   

   


export default (router:Router) => {
    new Guard(router).run()
}