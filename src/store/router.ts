import { defineStore } from 'pinia'
export const router = defineStore('router',{
    state:() => {
        return {
            name:"测试"
        }
    },
    getters:{
        getStatus(state){
            return state.name
        }
    }
}) 