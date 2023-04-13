import axios from 'axios';
import useKemStore from "../store/modules/KemSt";
const service = axios.create();
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
});
service.interceptors.response.use(response => {
    const kem = useKemStore()
    return kem.pd(response.data);
},error => {
    return Promise.reject(error);
});
export default service;