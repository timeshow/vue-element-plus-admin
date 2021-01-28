import request from '@/utils/request'


export function login(data){
    return request({
        url: '/admin//v1/user/'
    })
}
