import { http } from "@/axios";

function info(){
    return http.request({
        url:`get`,
    })
}

export default {info}