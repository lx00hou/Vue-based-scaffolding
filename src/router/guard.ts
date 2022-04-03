import { store } from "@/utils";
import { stopCoverage } from "v8";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard{
    constructor(private router:Router){}

    public run(){
        this.router.beforeEach(this.beforeEach.bind(this))
    }

    private beforeEach(to:RouteLocationNormalized,from:RouteLocationNormalized){
        let token = store.get('token')?.token

        if(this.isLogin(to) === false) return {name:'login'} 
        if(this.isGuest(to) === false) return from
    }   

    private token():string | null{
        return store.get('token')?.token
    }
    
     // 游客
    public isGuest(route:RouteLocationNormalized){
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
    }

     // 是否登录
    public isLogin(route:RouteLocationNormalized){
        return Boolean(!route.meta.auth || (route.meta.auth && this.token()))
    }
}
   

   


export default (router:Router) => {
    new Guard(router).run()
}