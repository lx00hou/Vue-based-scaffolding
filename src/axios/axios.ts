import axios, { AxiosRequestConfig } from "axios"
import { config } from "process";

export default class Axios {
    private instance

    constructor(config:AxiosRequestConfig){
        this.instance = axios.create(config);
        this.interceptors()
    }

    private interceptors(){
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    public request<T,D = ResponseResult<T>>(config:AxiosRequestConfig){
        return new Promise(async (resolve,reject) => {
            try {
                const response = await this.instance.request<D>(config) 
                resolve(response.data)                 
            } catch (error) {
                reject(error)
            }
        }) as Promise<D>

    }

    private interceptorsRequest(){
        this.instance.interceptors.request.use(
            config => {
                return config 
            },
            error => {
                return Promise.reject(error)
            } 
        )
    }

    private interceptorsResponse(){
        this.instance.interceptors.response.use(
            response => {
                return response 
            },
            error => {
                return Promise.reject(error)
            }
        )
    }
}