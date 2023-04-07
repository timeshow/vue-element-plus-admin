import { mock, Random } from 'mockjs'

const ajaxHeadersTokenKey = 'x-token'

interface IReq {
    body: any
    headers: any
}

mock('/user/login', 'post', (req: IReq, res: any) => {
    const { username, password } = JSON.parse(req.body)
    const send = { code: 0, data: {}, msg: '' }

    if (username === 'admin' && password === '123456') {
        send['data'] = {
            token: 'admin',
        }
    } else if (username === 'user' && password === '123456') {
        send['data'] = {
            token: 'user',
        }
    } else if (username === 'test' && password === '123456') {
        send['data'] = {
            token: 'test',
        }
    } else {
        send['code'] = 201
        send['msg'] = 'Wrong username or password'
    }

    return mock({
        code: send['code'],
        msg: send['msg'],
        data: send['data'],
    })
})

mock('/user/info', 'get', (req: any) => {
    console.log(ajaxHeadersTokenKey)
    console.log(req)
    //const { token } = JSON.parse(req.body);
    //const userName = checkToken(token);
    return mock({
        code: 0,
        data: {
            id: 1,
            name: 'Admins',
            avatar: '',
            roles: ['admin'],
        },
    })
    const headers = req.headers
    if (headers[ajaxHeadersTokenKey] === 'admin') {
        // const body = req.body;
        // if (body === "admin") {
        return mock({
            code: 0,
            data: {
                id: 1,
                name: 'Admins',
                avatar: '',
                roles: ['admin'],
            },
        })
    }

    return mock({
        Code: 401,
        Msg: '身份认证失败',
        Data: '',
    })
})

mock('/user/message', 'get', (req: any) => {
    return mock({
        code: 0,
        msg: 'success',
        data: 5,
    })
})

mock('/getRoute', 'get', (req: IReq) => {
    const { token } = JSON.parse(req.body)
    const userName = checkToken(token)
    if (!userName) {
        return mock({
            Code: 401,
            Msg: '身份认证失败',
            Data: '',
        })
    }
    return mock({
        Code: 200,
        Data: getRoute(userName),
        Msg: '',
    })
})

Random.extend({
    tag: function () {
        const tag = ['家', '公司', '学校', '超市']
        return this.pick(tag)
    },
})
interface ITableList {
    list: Array<{
        date: string
        name: string
        address: string
        tag: '家' | '公司' | '学校' | '超市'
        amt: number
    }>
}
const tableList: ITableList = mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|100': [
        {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            date: () => Random.date('yyyy-MM-dd'),
            name: () => Random.name(),
            address: () => Random.cparagraph(1),
            tag: () => Random.tag(),
            amt: () => Number(Random.float(-100000, 100000).toFixed(2)),
        },
    ],
})

mock('/getTableList', 'get', (req: IReq) => {
    const { page, size, tag } = JSON.parse(req.body)
    const data =
        tag === '所有'
            ? tableList.list
            : tableList.list.filter((v) => v.tag === tag)
    return mock({
        Code: 200,
        Data: {
            data: data.filter(
                (v, i) => i >= (page - 1) * size && i < page * size
            ),
            total: data.length,
        },
        Msg: '',
    })
})
