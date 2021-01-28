import { LoginParamsType, RegisterParamsType } from '@/type/user';
import request from '@/utils/request'


export async function login(params: LoginParamsType): Promise<any> {
    return request({
        url: '/user/login',
        method: 'POST',
        data: params
    })
}

export async function register(params: RegisterParamsType): Promise<any> {
    return request({
        url: '/user/register',
        method: 'POST',
        data: params,
    });
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
