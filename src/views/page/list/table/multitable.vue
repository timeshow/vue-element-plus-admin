<template>
    <div class="app-container">
        <el-table
            :data="tableData"
            style="width: 100%"
            :summary-method="getSummaries"
            show-summary
        >
            <el-table-column type="selection" width="40"> </el-table-column>
            <el-table-column fixed prop="id" label="序号" width="110">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column label="配送信息">
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column label="地址">
                    <el-table-column prop="province" label="省份" width="120">
                    </el-table-column>
                    <el-table-column prop="city" label="市区" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="300">
                    </el-table-column>
                    <el-table-column prop="zip" label="邮编" width="120">
                    </el-table-column>
                </el-table-column>
            </el-table-column>
            <el-table-column prop="amount1" label="数值 1（元）">
            </el-table-column>
            <el-table-column prop="amount2" label="数值 2（元）">
            </el-table-column>
            <el-table-column prop="amount3" label="数值 3（元）">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="210">
                <template #default="scope">
                    <el-button
                        size="mini"
                        type="primary"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button size="mini">草稿</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10,
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15,
                },
                {
                    id: 1,
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10,
                },
                {
                    id: 1,
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17,
                },
                {
                    id: 1,
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10,
                },
                {
                    id: 1,
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12,
                },
                {
                    id: 1,
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9,
                },
            ],
        }
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param
            const sums = []
            columns.forEach((column, index) => {
                if (index === 1) {
                    sums[index] = '总价'
                    return
                }
                const values = data.map((item) => Number(item[column.property]))
                if (!values.every((value) => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr)
                        if (!isNaN(value)) {
                            return prev + curr
                        } else {
                            return prev
                        }
                    }, 0)
                    sums[index] += ' 元'
                } else {
                    sums[index] = 'N/A'
                }
            })

            return sums
        },
    },
}
</script>
