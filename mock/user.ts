import { Random } from "mockjs"
import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url:"/api/info",
        method:'get',
        response:() => {
            return {
                code:0,
                result:{
                    name:"测试",
                    age:22
                }
            }
        }
    },
    {
        url:"/api/login",
        method:'post',
        response:() => {
            return {
                code:200,
                message:'登陆成功',
                type:'success',
                result:{
                    token:Random.string(10)
                }
            }
        }
    }
] as MockMethod[]