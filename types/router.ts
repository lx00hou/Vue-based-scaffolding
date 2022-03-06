import 'vue-router'
import { boolean } from 'yup'

declare module 'vue-router'{
    interface RouteMeta {
        auth?:boolean,
        guest?:boolean
    }
}