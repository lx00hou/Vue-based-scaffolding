import { http } from "@/axios";

interface User {
    name:string,
    age:number,
    avatar?:string
}

function info(){
    return http.request<User>({
        url:`info`,
    })
}

interface loginInterface {
    token:string
}

function login(data:any){
    return http.request<loginInterface>({
        url:`login`,
        method:"post",
        data
    }) 
}

export default {info,login}