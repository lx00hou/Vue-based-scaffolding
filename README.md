# Vue 3 + Typescript + Vite

  目录介绍:
    views 下的admin文件都会在 layouts下的admin中通过router-view 展示  (member 同理)
    router-autoLoad 遍历文件 动态添加路由
    .env文件 ---> 配置的环境变量
    vite-alias --> 配置别名(包括路径引用 用@/ 代表 src 文件等)
    plugins  -->  各种插件
    vite-pluhins-index.ts --> 管理所有插件
    mock --> 测试数据
    types  --> 类型声明文件 (以.d.ts结尾)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
