import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from './vite/alias'
import {parseEnv} from './vite/util'


export default ({command,mode}:ConfigEnv) => {
  const isBuild = command === "build"   // 编辑模式
  const root = process.cwd()      // env 目录路径
  const env = parseEnv(loadEnv(mode,root))         // parseEnv()环境变量的value默认都是字符串问题进行解决
  return {
    plugins: [vue()],
    resolve:{
      //  定义别名
      alias,
    }
  }
}