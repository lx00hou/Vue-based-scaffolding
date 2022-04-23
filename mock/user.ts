import { Random } from "mockjs"
import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url:"/api/user/info",
        method:'get',
        response:() => {
            return {
                code:0,
                message:'请求成功',
                type:"success",
                result:{
                    name:"苦逼打工人",
                    age:22,
                    avatar:'/img/iTab-dpm5ll.JPG',
                    permissions:['markdown_editor','article_edit','base_editor']
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