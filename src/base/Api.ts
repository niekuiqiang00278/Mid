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

export function Depshow() {
    return request({
        url:'/god/depshow',
        method:"post",
    })
}
export function T1() {
    return request({
        url:'http://mockjs/test/mock/t1',
        method:"post",
    })
}
export function T2() {
    return request({
        url:'http://mockjs/test/mock/t2',
        method:"post",
    })
}