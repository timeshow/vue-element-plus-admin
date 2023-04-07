<template>
    <div class="app-container">
        <el-container ref="multipleTable" style="border: 1px solid #eee">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="40"> </el-table-column>
                <el-table-column fixed prop="id" label="序号" width="110">
                </el-table-column>
                <el-table-column prop="title" label="标题"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="province" label="省份" width="120">
                </el-table-column>
                <el-table-column prop="city" label="市区" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="300">
                </el-table-column>
                <el-table-column prop="zip" label="邮编" width="120">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="日期"
                    width="100"
                    sortable
                    column-key="date"
                    :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                    prop="tag"
                    label="标签"
                    width="100"
                    :filters="[
                        { text: '家', value: '家' },
                        { text: '公司', value: '公司' },
                    ]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end"
                >
                    <template #default="scope">
                        <el-tag
                            :type="
                                scope.row.tag === '家' ? 'primary' : 'success'
                            "
                            disable-transitions
                            >{{ scope.row.tag }}</el-tag
                        >
                    </template>
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
        </el-container>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="1"
            :current-page="currentPage"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="10"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家',
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家',
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家',
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家',
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '公司',
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家',
                },
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '公司',
                },
                {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                    tag: '家',
                },
                {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                    tag: '公司',
                },
                {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '家',
                },
            ],
            currentPage: 1,
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row) {
            console.log(index, row)
        },
        filterTag(value, row) {
            return row.tag === value
        },
        handleClick(row) {
            console.log(row)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        },
    },
}
</script>
