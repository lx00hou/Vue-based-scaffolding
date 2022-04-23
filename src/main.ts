import { createApp } from 'vue'
import App from './App.vue'
import {setupRouter} from '@/router'
import {setupPlugins} from '@/plugins/index'
import '@/styles/global.scss'

async function bootstrap(){
    const app = createApp(App)
    await setupPlugins(app)     
    await setupRouter(app)
    
    app.mount('#app')
}
bootstrap()


