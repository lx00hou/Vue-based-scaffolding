// 接口 ImportMetaEnv 与 ImportMeta 是 vite 官网所提供的 
interface ImportMetaEnv extends ViteEnv{}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}

interface ViteEnv {
    VITE_SOME_KEY:number
    VITE_ROUTE_AUTOLOAD:boolean
    VITE_API_URL:string
}