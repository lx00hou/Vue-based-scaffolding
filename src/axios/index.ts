import Axios from "@axios/axios";

const http = new Axios({
    baseURL:'/api',
    timeout:100000,
    Headers:{}
})

export { http }