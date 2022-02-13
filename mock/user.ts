import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url:"/api/get",
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
    }
] as MockMethod[]