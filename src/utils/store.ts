import { multiply } from "lodash";
import { json } from "stream/consumers";
import { date } from "yup";

export interface IDate{
    data:any,
    expire?:number
    // [key:string]:any
}

export default {
    set(key:string,data:any,expire?:number):void{
        let cache:IDate = {data}
        if(expire){
            cache.expire = new Date().getTime() + data.expire * 1000 
        }
        localStorage.setItem(key,JSON.stringify(cache))
    },
    get(key:string):any{
        const cacheStore = localStorage.getItem(key); 
        if(cacheStore){
            const cache = JSON.parse(cacheStore);
            const expire = cache?.expire;
            if(expire && expire < new Date().getTime()){
                localStorage.removeItem(key);
                return null;
            }
            return cache.data;
        }
        return null
    },
    remove(key:string){
        localStorage.removeItem(key)
    }
}