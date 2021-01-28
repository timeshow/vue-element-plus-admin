import request from '@/utils/request'


// export async function login(data){
//     return request({
//         url: '/user/login',
//         method: 'post',
//         data
//     });
// }

export async function queryCurrent(): Promise<any> {
    return request({
        url: '/usr/info',
        method: 'get'
    });
}

export async function queryMessage() {
    
}
