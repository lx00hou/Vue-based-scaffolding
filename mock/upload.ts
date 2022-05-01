import { Random } from "mockjs"
import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url:"/api/upload/image",
        method:'post',
        response:() => {
            return {
                code:0,
                message:'上传成功',
                type:"success",
                result:{
                    url:'/img/iTab-dpm5ll.JPG',
                }
            }
        }
    },
] as MockMethod[]