import { LoginParamsType } from '@/type/user';
import request from '@/utils/request'


export async function login(params: LoginParamsType): Promise<any> {
    return request({
        url: '/usr/login',
        method: 'POST',
        data: params
    })
}

export async function queryCurrent(): Promise<any> {
    return request({
        url: '/user/info',
        method: 'get'
    });
}

export async function queryMessage(): Promise<any> {
    return request({
        url: '/user/message'
    })
}
