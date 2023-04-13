import request from "utils/Request";

interface Login {
    us:string
    pw:string
}
interface Auth {
    aka:string
    por:string
}

export function Login(data:Login) {
    return request({
        url:'/login',
        method:"post",
        data
    })
}

export function Auth(data:Auth) {
    return request({
        url:'/auth',
        method:"post",
        data
    })
}