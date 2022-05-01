import { http } from "@/axios";

export interface IuploadImage {
    url: string,
}

export function uploadImage(data: FormData) {
    return http.request<IuploadImage>({
        url: `upload/image`,
        method: "post",
        data    
    })
}


// export default { info, login }