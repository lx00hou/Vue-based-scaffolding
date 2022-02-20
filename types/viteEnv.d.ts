// 接口 ImportMetaEnv 与 ImportMeta 是 vite 官网所提供的 
interface ViteEnv {
    VITE_ROUTER_AUTOLOAD:boolean
    VITE_API_URL:string
}


interface ImportMetaEnv extends ViteEnv{}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}

