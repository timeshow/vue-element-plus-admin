<template>
  <div class="app-container">
    <el-form
      label-position="top"
      :model="modelRef"
      :rules="rulesRef"
      ref="formRef"
    >
      <el-card shadow="never" class="cus-card" style="margin-bottom: 20px">
        <template #header>基础信息</template>
        <el-row :gutter="16">
          <el-col :lg="8" :md="12" :sm="24">
            <el-form-item label="标题" prop="title">
              <el-input v-model="modelRef.title" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="24">
            <el-form-item label="起止日期" prop="date">
              <el-date-picker
                type="daterange"
                v-model="modelRef.date"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                class="form-basic-width100"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="24">
            <el-form-item label="下拉选择" prop="select">
              <el-select
                v-model="modelRef.select"
                placeholder="请选择"
                clearable
                style="width: 100%"
              >
                <el-option label="select1" value="1"></el-option>
                <el-option label="select2" value="2"></el-option>
                <el-option label="select3" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" :sm="24">
            <el-form-item label="单选按钮1" prop="radio1">
              <el-radio-group v-model="modelRef.radio1">
                <el-radio label="1">item 1</el-radio>
                <el-radio label="2">item 2</el-radio>
                <el-radio label="3">item 3</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>
