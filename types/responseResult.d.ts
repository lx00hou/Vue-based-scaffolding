// data 类型可变 用泛型处理
interface ResponseResult <T>{
    code:number
    message:string
    type:'success' | 'error'
    result:Object
}