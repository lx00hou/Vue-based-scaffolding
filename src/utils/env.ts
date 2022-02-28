// 解决 环境变量 在 组件使用中 对应 value 是字符串问题
import _ from 'lodash';
const env:any = _.cloneDeep(import.meta.env)
Object.entries(import.meta.env as Record<string,any>).forEach(([key,value]) => {
    if(['true','false'].includes(value)) env[key] = value == 'true' ? true : false
    else if(/^\d+$/.test(value)) env[key] = Number(value)
    else if(value == "null") env[key] = null
    else if(value == "undefined") env[key] = undefined
})
export default env as ViteEnv