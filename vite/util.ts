import _ from 'lodash'
// 针对配置的环境变量(.env文件)的value 都是字符串问题 进行解决
export function parseEnv(env:Record<string,any>):ViteEnv{
    const envs:any = _.cloneDeep(env)    
    Object.entries(env).forEach(([key,value]) => {
        if(['true','false'].includes(value)) envs[key] = value == 'true' ? true : false
        else if(/^\d+$/.test(value)) envs[key] = Number(value)
        else if(value == "null") envs[key] = null
        else if(value == "undefined") envs[key] = undefined
    })
    return envs
}

//  Record<string,any> 解析  https://blog.csdn.net/qq_36503569/article/details/119383782
//    type Record<K extends keyof any,T> = {
//       [P in K] : T  (对象的key可以取string|number|symbol) 返回 T
//    }