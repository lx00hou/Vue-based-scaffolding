// 解决 环境变量 在 组件使用中 对应 value 是字符串问题
import _ from 'lodash'
class Helper {
    public env = {} as ImportMetaEnv

    constructor(){
        this.env = this.getEnv() 
    }
    private getEnv():ImportMetaEnv {
        const envs:any = _.cloneDeep(import.meta.env)

        Object.entries(import.meta.env as Record<string,any>).forEach(([key,value]) => {
            if(['true','false'].includes(value)) envs[key] = value == 'true' ? true : false
            else if(/^\d+$/.test(value)) envs[key] = Number(value)
            else if(value == "null") envs[key] = null
            else if(value == "undefined") envs[key] = undefined
        })
        return envs
    }
} 
const helper = new Helper()
const env = helper.env

export default helper
export {env}