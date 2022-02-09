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

    public request<T>(config:AxiosRequestConfig){
        return this.instance.request(config)
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