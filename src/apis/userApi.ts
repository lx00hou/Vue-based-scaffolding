import { http } from "@/axios";

interface User {
    name:string,
    age:number,
    avatar?:string
}

function info(){
    return http.request<User>({
        url:`get`,
    })
}

export default {info}