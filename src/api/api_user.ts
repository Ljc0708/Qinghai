import * as API from '.'
export default {
    //登录
    login: (params:any) => {
        return API.POST("/api/login", params);
    },
}