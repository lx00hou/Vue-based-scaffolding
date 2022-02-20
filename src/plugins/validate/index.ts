import * as veeValidate from "vee-validate";
import { required,min,max,confirmed,email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import yup from './yup'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

// 定义语言环境
veeValidate.configure({
    generateMessage:localize('zh_CN')
})

Object.keys(rules).forEach(key => {
    veeValidate.defineRule(key,rules[key])
})

const modules = {yup, ...veeValidate.}

export default modules