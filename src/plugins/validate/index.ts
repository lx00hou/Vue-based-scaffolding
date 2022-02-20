import * as veeValidate from "vee-validate";
import rules from '@vee-validate/rules'
import { localize,loadLocaleFromURL } from "@vee-validate/i18n";
import yup from './yup'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

// 定义语言环境
veeValidate.configure({
    // validateOnInput:true,  可以定义全局 默认 输入验证
    generateMessage:localize('zh_CN')
})

Object.keys(rules).forEach(key => {
    veeValidate.defineRule(key,rules[key])
})

const modules = {yup, ...veeValidate}

export default modules