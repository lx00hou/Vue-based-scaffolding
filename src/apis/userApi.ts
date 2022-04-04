import { http } from "@/axios";

interface User {
    name:string,
    age:number,
    avatar?:string
}

function info(){
    return http.request<User>({
        url:`user/info`,
    })
}

interface loginInterface {
    token:string
}

export interface IloginData{
    account:string,
    password:string
}

export function login(data:IloginData){
    return http.request<loginInterface>({
        url:`login`,
        method:"post",
        data
    }) 
}

export default {info,login}