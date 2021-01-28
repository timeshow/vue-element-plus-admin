import request from '@/utils/request'


export a function login(data){
    return request({
        url: '/user/login',
        method: 'post',
        data
    });
}
