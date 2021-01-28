import request from '@/utils/request'


// export async function login(data){
//     return request({
//         url: '/user/login',
//         method: 'post',
//         data
//     });
// }

export 

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
