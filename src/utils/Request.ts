import axios from 'axios';
const service = axios.create();
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
});
// export interface Response {
//     status_code:number
//     code:number
//     result:any
//     msg:string
// }
service.interceptors.response.use(response => {
    return response.data;
},error => {
    return Promise.reject(error);
});
export default service;