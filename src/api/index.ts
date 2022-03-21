import Env from "./env";
import axios from "axios";
//导入Nprogress css和js
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

const $http = axios.create({
    timeout: 5000,
})
$http.defaults.withCredentials = true;
$http.interceptors.request.use(config => {
    Nprogress.start();
    config.headers = config.headers || {}
    // config.headers.token = 
    return config
})
$http.interceptors.response.use(response => {
    Nprogress.done();
    return response
})

//基地址
const base = Env.baseURL;
//测试使用
export const ISDEV = Env.isDev;
//通用方法
export const POST = (url: any, params: any) => {
    return axios
        .post(`${url}`, params)
        .then((res) => res.data)
        .catch((err) => err.data);
};
export const GET = (url: any, params: any) => {
    return axios.get(`${base}${url}`, { params: params }).then(res => res.data)
}

export const PUT = (url: any, params: any) => {
    return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url: any, params: any) => {
    return axios.delete(`${base}${url}`, { params: params }).then(res => res.data)
}

export const PATCH = (url: any, params: any) => {
    return axios.patch(`${base}${url}`, params).then(res => res.data)
}
