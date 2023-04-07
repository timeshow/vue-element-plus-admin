<template>
    <div>
        <div class="page-component page-component__content">
            <div class="content-wrap">
                <section class="content element-doc content">
                    <h2 id="form-biao-dan">Form 表单</h2>
                    <p>
                        由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
                    </p>
                    <h3 id="dian-xing-biao-dan">典型表单</h3>
                    <p>
                        包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
                    </p>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <el-form
                                    ref="form"
                                    :model="form"
                                    label-width="80px"
                                >
                                    <el-form-item label="活动名称">
                                        <el-input
                                            v-model="form.name"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动区域">
                                        <el-select
                                            v-model="form.region"
                                            placeholder="请选择活动区域"
                                        >
                                            <el-option
                                                label="区域一"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="区域二"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="活动时间">
                                        <el-col :span="11">
                                            <el-date-picker
                                                type="date"
                                                placeholder="选择日期"
                                                v-model="form.date1"
                                                style="width: 100%"
                                            ></el-date-picker>
                                        </el-col>
                                        <el-col class="line" :span="2"
                                            >-</el-col
                                        >
                                        <el-col :span="11">
                                            <el-time-picker
                                                placeholder="选择时间"
                                                v-model="form.date2"
                                                style="width: 100%"
                                            ></el-time-picker>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item label="即时配送">
                                        <el-switch
                                            v-model="form.delivery"
                                        ></el-switch>
                                    </el-form-item>
                                    <el-form-item label="活动性质">
                                        <el-checkbox-group v-model="form.type">
                                            <el-checkbox
                                                label="美食/餐厅线上活动"
                                                name="type"
                                            ></el-checkbox>
                                            <el-checkbox
                                                label="地推活动"
                                                name="type"
                                            ></el-checkbox>
                                            <el-checkbox
                                                label="线下主题活动"
                                                name="type"
                                            ></el-checkbox>
                                            <el-checkbox
                                                label="单纯品牌曝光"
                                                name="type"
                                            ></el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item label="特殊资源">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio
                                                label="线上品牌商赞助"
                                            ></el-radio>
                                            <el-radio
                                                label="线下场地免费"
                                            ></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="活动形式">
                                        <el-input
                                            type="textarea"
                                            v-model="form.desc"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button
                                            type="primary"
                                            @click="onSubmit"
                                            >立即创建</el-button
                                        >
                                        <el-button>取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <p>
                            W3C 标准中有如下<a
                                href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"
                                >规定</a
                            >：
                        </p>
                        <blockquote>
                            <p>
                                <i
                                    >When there is only one single-line text
                                    input field in a form, the user agent should
                                    accept Enter in that field as a request to
                                    submit the form.</i
                                >
                            </p>
                        </blockquote>
                        <p>
                            即：当一个 form
                            元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在
                            <code>&lt;el-form&gt;</code> 标签上添加
                            <code>@submit.native.prevent</code>。
                        </p>
                    </div>
                    <h3 id="xing-nei-biao-dan">行内表单</h3>
                    <p>
                        当垂直方向空间受限且表单较简单时，可以在一行内放置表单。
                    </p>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <el-form
                                    :inline="true"
                                    :model="formInline"
                                    class="demo-form-inline"
                                >
                                    <el-form-item label="审批人">
                                        <el-input
                                            v-model="formInline.user"
                                            placeholder="审批人"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动区域">
                                        <el-select
                                            v-model="formInline.region"
                                            placeholder="活动区域"
                                        >
                                            <el-option
                                                label="区域一"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="区域二"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button
                                            type="primary"
                                            @click="onSubmit"
                                            >查询</el-button
                                        >
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div class="meta">
                            <div class="description">
                                <div data-v-4168e4e3-s="">
                                    <p data-v-4168e4e3-s="">
                                        设置
                                        <code data-v-4168e4e3-s="">inline</code>
                                        属性可以让表单域变为行内的表单域
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 id="dui-qi-fang-shi">对齐方式</h3>
                    <p>根据具体目标和制约因素，选择最佳的标签对齐方式。</p>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <el-radio-group
                                    v-model="labelPosition"
                                    size="small"
                                >
                                    <el-radio-button label="left"
                                        >左对齐</el-radio-button
                                    >
                                    <el-radio-button label="right"
                                        >右对齐</el-radio-button
                                    >
                                    <el-radio-button label="top"
                                        >顶部对齐</el-radio-button
                                    >
                                </el-radio-group>
                                <div style="margin: 20px"></div>
                                <el-form
                                    :label-position="labelPosition"
                                    label-width="80px"
                                    :model="formLabelAlign"
                                >
                                    <el-form-item label="名称">
                                        <el-input
                                            v-model="formLabelAlign.name"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动区域">
                                        <el-input
                                            v-model="formLabelAlign.region"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动形式">
                                        <el-input
                                            v-model="formLabelAlign.type"
                                        ></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                    <h3 id="biao-dan-yan-zheng">表单验证</h3>
                    <p>
                        在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。
                    </p>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <el-form
                                    :model="ruleForm"
                                    :rules="rules"
                                    ref="ruleForm"
                                    label-width="100px"
                                    class="demo-ruleForm"
                                >
                                    <el-form-item label="活动名称" prop="name">
                                        <el-input
                                            v-model="ruleForm.name"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item
                                        label="活动区域"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择活动区域"
                                        >
                                            <el-option
                                                label="区域一"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="区域二"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="活动时间" required>
                                        <el-col :span="11">
                                            <el-form-item prop="date1">
                                                <el-date-picker
                                                    type="date"
                                                    placeholder="选择日期"
                                                    v-model="ruleForm.date1"
                                                    style="width: 100%"
                                                ></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col class="line" :span="2"
                                            >-</el-col
                                        >
                                        <el-col :span="11">
                                            <el-form-item prop="date2">
                                                <el-time-picker
                                                    placeholder="选择时间"
                                                    v-model="ruleForm.date2"
                                                    style="width: 100%"
                                                ></el-time-picker>
                                            </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item
                                        label="即时配送"
                                        prop="delivery"
                                    >
                                        <el-switch
                                            v-model="ruleForm.delivery"
                                        ></el-switch>
                                    </el-form-item>
                                    <el-form-item label="活动性质" prop="type">
                                        <el-checkbox-group
                                            v-model="ruleForm.type"
                                        >
                                            <el-checkbox
                                                label="美食/餐厅线上活动"
                                                name="type"
                                            ></el-checkbox>
                                            <el-checkbox
                                                label="地推活动"
                                                name="type"
                                            ></el-checkbox>
                                            <el-checkbox
                                                label="线下主题活动"
                                                name="type"
                                            ></el-checkbox>
                                            <el-checkbox
                                                label="单纯品牌曝光"
                                                name="type"
                                            ></el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item
                                        label="特殊资源"
                                        prop="resource"
                                    >
                                        <el-radio-group
                                            v-model="ruleForm.resource"
                                        >
                                            <el-radio
                                                label="线上品牌商赞助"
                                            ></el-radio>
                                            <el-radio
                                                label="线下场地免费"
                                            ></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="活动形式" prop="desc">
                                        <el-input
                                            type="textarea"
                                            v-model="ruleForm.desc"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button
                                            type="primary"
                                            @click="submitForm('ruleForm')"
                                            >立即创建</el-button
                                        >
                                        <el-button
                                            @click="resetForm('ruleForm')"
                                            >重置</el-button
                                        >
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                        <div class="meta">
                            <div class="description">
                                <div data-v-4168e4e3-s="">
                                    <p data-v-4168e4e3-s="">
                                        Form
                                        组件提供了表单验证的功能，只需要通过
                                        <code data-v-4168e4e3-s="">rules</code>
                                        属性传入约定的验证规则，并将 Form-Item
                                        的
                                        <code data-v-4168e4e3-s="">prop</code>
                                        属性设置为需校验的字段名即可。校验规则参见
                                        <a
                                            href="https://github.com/yiminghe/async-validator"
                                            data-v-4168e4e3-s=""
                                            >async-validator</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 id="zi-ding-yi-xiao-yan-gui-ze">自定义校验规则</h3>
                    <p>
                        这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。
                    </p>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <el-form
                                    :model="ruleForm"
                                    status-icon
                                    :rules="rules"
                                    ref="ruleForm"
                                    label-width="100px"
                                    class="demo-ruleForm"
                                >
                                    <el-form-item label="密码" prop="pass">
                                        <el-input
                                            type="password"
                                            v-model="ruleForm.pass"
                                            autocomplete="off"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item
                                        label="确认密码"
                                        prop="checkPass"
                                    >
                                        <el-input
                                            type="password"
                                            v-model="ruleForm.checkPass"
                                            autocomplete="off"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="年龄" prop="age">
                                        <el-input
                                            v-model.number="ruleForm.age"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button
                                            type="primary"
                                            @click="submitForm('ruleForm')"
                                            >提交</el-button
                                        >
                                        <el-button
                                            @click="resetForm('ruleForm')"
                                            >重置</el-button
                                        >
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <p>
                            自定义校验 callback 必须被调用。 更多高级用法可参考
                            <a
                                href="https://github.com/yiminghe/async-validator"
                                >async-validator</a
                            >。
                        </p>
                    </div>
                    <h3 id="dong-tai-zeng-jian-biao-dan-xiang">
                        动态增减表单项
                    </h3>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <form class="el-form demo-dynamic">
                                    <div class="el-form-item is-required">
                                        <label
                                            for="email"
                                            class="el-form-item__label"
                                            style="width: 100px"
                                            >邮箱</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 100px"
                                        >
                                            <div class="el-input">
                                                <input
                                                    class="el-input__inner"
                                                    type="text"
                                                    autocomplete="off"
                                                    tabindex=""
                                                    aria-label=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="el-form-item is-required">
                                        <label
                                            for="domains.0.value"
                                            class="el-form-item__label"
                                            style="width: 100px"
                                            >域名0</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 100px"
                                        >
                                            <div class="el-input">
                                                <input
                                                    class="el-input__inner"
                                                    type="text"
                                                    autocomplete="off"
                                                    tabindex=""
                                                    aria-label=""
                                                />
                                            </div>
                                            <button
                                                class="el-button el-button--default"
                                                type="button"
                                            >
                                                <span>删除</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="el-form-item">
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 100px"
                                        >
                                            <button
                                                class="el-button el-button--primary"
                                                type="button"
                                            >
                                                <span>提交</span></button
                                            ><button
                                                class="el-button el-button--default"
                                                type="button"
                                            >
                                                <span>新增域名</span></button
                                            ><button
                                                class="el-button el-button--default"
                                                type="button"
                                            >
                                                <span>重置</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h3 id="shu-zi-lei-xing-yan-zheng">数字类型验证</h3>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <form class="el-form demo-ruleForm">
                                    <div class="el-form-item is-required">
                                        <label
                                            for="age"
                                            class="el-form-item__label"
                                            style="width: 100px"
                                            >年龄</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 100px"
                                        >
                                            <div class="el-input">
                                                <input
                                                    class="el-input__inner"
                                                    modelmodifiers="[object Object]"
                                                    type="age"
                                                    autocomplete="off"
                                                    tabindex=""
                                                    aria-label=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="el-form-item">
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 100px"
                                        >
                                            <button
                                                class="el-button el-button--primary"
                                                type="button"
                                            >
                                                <span>提交</span></button
                                            ><button
                                                class="el-button el-button--default"
                                                type="button"
                                            >
                                                <span>重置</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <p>
                            嵌套在 <code>el-form-item</code> 中的
                            <code>el-form-item</code> 标签宽度默认为零，不会继承
                            <code>el-form</code> 的
                            <code>label-width</code>。如果需要可以为其单独设置
                            <code>label-width</code> 属性。
                        </p>
                    </div>
                    <h3 id="biao-dan-nei-zu-jian-chi-cun-kong-zhi">
                        表单内组件尺寸控制
                    </h3>
                    <p>
                        通过设置 Form 上的
                        <code>size</code>
                        属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item
                        也具有该属性。
                    </p>
                    <div class="demo-block demo-zh-CN demo-form">
                        <div class="source">
                            <div>
                                <form class="el-form">
                                    <div
                                        class="el-form-item el-form-item--mini"
                                    >
                                        <label
                                            class="el-form-item__label"
                                            style="width: 80px"
                                            >活动名称</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 80px"
                                        >
                                            <div
                                                class="el-input el-input--mini"
                                            >
                                                <input
                                                    class="el-input__inner"
                                                    type="text"
                                                    autocomplete="off"
                                                    tabindex=""
                                                    aria-label=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="el-form-item el-form-item--mini"
                                    >
                                        <label
                                            class="el-form-item__label"
                                            style="width: 80px"
                                            >活动区域</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 80px"
                                        >
                                            <div
                                                class="el-select el-select--mini"
                                            >
                                                <div
                                                    class="select-trigger"
                                                    ariadescribedby="el-popper-3083"
                                                >
                                                    <div
                                                        class="el-input el-input--mini el-input--suffix"
                                                    >
                                                        <input
                                                            class="el-input__inner"
                                                            type="text"
                                                            readonly=""
                                                            autocomplete="off"
                                                            aria-label=""
                                                            placeholder="请选择活动区域"
                                                        /><span
                                                            class="el-input__suffix"
                                                            ><span
                                                                class="el-input__suffix-inner"
                                                                ><i
                                                                    class="el-select__caret el-input__icon el-icon-arrow-up"
                                                                ></i></span
                                                        ></span>
                                                    </div>
                                                </div>
                                                <!--teleport start--><!--teleport end-->
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="el-form-item el-form-item--mini"
                                    >
                                        <label
                                            class="el-form-item__label"
                                            style="width: 80px"
                                            >活动时间</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 80px"
                                        >
                                            <div class="el-col el-col-11">
                                                <div
                                                    class="el-input el-input--mini el-input--prefix el-input--suffix el-date-editor el-date-editor--date"
                                                    style="width: 100%"
                                                >
                                                    <input
                                                        class="el-input__inner"
                                                        name=""
                                                        ariadescribedby="el-popper-9915"
                                                        type="text"
                                                        autocomplete="off"
                                                        tabindex=""
                                                        aria-label=""
                                                        placeholder="选择日期"
                                                    /><span
                                                        class="el-input__prefix"
                                                        ><i
                                                            class="el-input__icon el-icon-date"
                                                        ></i></span
                                                    ><span
                                                        class="el-input__suffix"
                                                        ><span
                                                            class="el-input__suffix-inner"
                                                            ><i
                                                                class="el-input__icon"
                                                            ></i></span
                                                    ></span>
                                                </div>
                                                <!--teleport start--><!--teleport end-->
                                            </div>
                                            <div class="el-col el-col-2 line">
                                                -
                                            </div>
                                            <div class="el-col el-col-11">
                                                <div
                                                    class="el-input el-input--mini el-input--prefix el-input--suffix el-date-editor el-date-editor--time"
                                                    style="width: 100%"
                                                >
                                                    <input
                                                        class="el-input__inner"
                                                        name=""
                                                        ariadescribedby="el-popper-5133"
                                                        type="text"
                                                        autocomplete="off"
                                                        tabindex=""
                                                        aria-label=""
                                                        placeholder="选择时间"
                                                    /><span
                                                        class="el-input__prefix"
                                                        ><i
                                                            class="el-input__icon el-icon-time"
                                                        ></i></span
                                                    ><span
                                                        class="el-input__suffix"
                                                        ><span
                                                            class="el-input__suffix-inner"
                                                            ><i
                                                                class="el-input__icon"
                                                            ></i></span
                                                    ></span>
                                                </div>
                                                <!--teleport start--><!--teleport end-->
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="el-form-item el-form-item--mini"
                                    >
                                        <label
                                            class="el-form-item__label"
                                            style="width: 80px"
                                            >活动性质</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 80px"
                                        >
                                            <div
                                                class="el-checkbox-group"
                                                role="group"
                                                aria-label="checkbox-group"
                                            >
                                                <label
                                                    class="el-checkbox-button el-checkbox-button--mini"
                                                    role="checkbox"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    ><input
                                                        class="el-checkbox-button__original"
                                                        type="checkbox"
                                                        name="type"
                                                        value="美食/餐厅线上活动"
                                                    /><span
                                                        class="el-checkbox-button__inner"
                                                        >美食/餐厅线上活动</span
                                                    ></label
                                                ><label
                                                    class="el-checkbox-button el-checkbox-button--mini"
                                                    role="checkbox"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    ><input
                                                        class="el-checkbox-button__original"
                                                        type="checkbox"
                                                        name="type"
                                                        value="地推活动"
                                                    /><span
                                                        class="el-checkbox-button__inner"
                                                        >地推活动</span
                                                    ></label
                                                ><label
                                                    class="el-checkbox-button el-checkbox-button--mini"
                                                    role="checkbox"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    ><input
                                                        class="el-checkbox-button__original"
                                                        type="checkbox"
                                                        name="type"
                                                        value="线下主题活动"
                                                    /><span
                                                        class="el-checkbox-button__inner"
                                                        >线下主题活动</span
                                                    ></label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="el-form-item el-form-item--mini"
                                    >
                                        <label
                                            class="el-form-item__label"
                                            style="width: 80px"
                                            >特殊资源</label
                                        >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 80px"
                                        >
                                            <div
                                                class="el-radio-group"
                                                role="radiogroup"
                                            >
                                                <label
                                                    class="el-radio el-radio--medium is-bordered"
                                                    role="radio"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    tabindex="-1"
                                                    ><span
                                                        class="el-radio__input"
                                                        ><span
                                                            class="el-radio__inner"
                                                        ></span
                                                        ><input
                                                            class="el-radio__original"
                                                            type="radio"
                                                            value="线上品牌商赞助"
                                                            aria-hidden="true"
                                                            name=""
                                                            tabindex="0" /></span
                                                    ><span
                                                        class="el-radio__label"
                                                        >线上品牌商赞助</span
                                                    ></label
                                                ><label
                                                    class="el-radio el-radio--medium is-bordered"
                                                    role="radio"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    tabindex="-1"
                                                    ><span
                                                        class="el-radio__input"
                                                        ><span
                                                            class="el-radio__inner"
                                                        ></span
                                                        ><input
                                                            class="el-radio__original"
                                                            type="radio"
                                                            value="线下场地免费"
                                                            aria-hidden="true"
                                                            name=""
                                                            tabindex="-1" /></span
                                                    ><span
                                                        class="el-radio__label"
                                                        >线下场地免费</span
                                                    ></label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="el-form-item el-form-item--large"
                                    >
                                        <div
                                            class="el-form-item__content"
                                            style="margin-left: 80px"
                                        >
                                            <button
                                                class="el-button el-button--primary el-button--large"
                                                type="button"
                                            >
                                                <span>立即创建</span></button
                                            ><button
                                                class="el-button el-button--default el-button--large"
                                                type="button"
                                            >
                                                <span>取消</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h3 id="form-attributes">Form Attributes</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>参数</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>可选值</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>model</td>
                                <td>表单数据对象</td>
                                <td>object</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>rules</td>
                                <td>表单验证规则</td>
                                <td>object</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>inline</td>
                                <td>行内表单模式</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>label-position</td>
                                <td>
                                    表单域标签的位置，如果值为 left 或者 right
                                    时，则需要设置
                                    <code>label-width</code>
                                </td>
                                <td>string</td>
                                <td>right/left/top</td>
                                <td>right</td>
                            </tr>
                            <tr>
                                <td>label-width</td>
                                <td>
                                    表单域标签的宽度，例如 '50px'。作为 Form
                                    直接子元素的 form-item 会继承该值。支持
                                    <code>auto</code>。
                                </td>
                                <td>string</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>label-suffix</td>
                                <td>表单域标签的后缀</td>
                                <td>string</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>hide-required-asterisk</td>
                                <td>是否显示必填字段的标签旁边的红色星号</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>show-message</td>
                                <td>是否显示校验错误信息</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>inline-message</td>
                                <td>是否以行内形式展示校验信息</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>status-icon</td>
                                <td>是否在输入框中显示校验结果反馈图标</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>validate-on-rule-change</td>
                                <td>
                                    是否在
                                    <code>rules</code>
                                    属性改变后立即触发一次验证
                                </td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>用于控制该表单内组件的尺寸</td>
                                <td>string</td>
                                <td>medium / small / mini</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>
                                    是否禁用该表单内的所有组件。若设置为
                                    true，则表单内组件上的 disabled 属性不再生效
                                </td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="form-methods">Form Methods</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>方法名</th>
                                <th>说明</th>
                                <th>参数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>validate</td>
                                <td>
                                    对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个
                                    promise
                                </td>
                                <td>
                                    Function(callback: Function(boolean,
                                    object))
                                </td>
                            </tr>
                            <tr>
                                <td>validateField</td>
                                <td>对部分表单字段进行校验的方法</td>
                                <td>
                                    Function(props: array | string, callback:
                                    Function(errorMessage: string))
                                </td>
                            </tr>
                            <tr>
                                <td>resetFields</td>
                                <td>
                                    对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
                                </td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>clearValidate</td>
                                <td>
                                    移除表单项的校验结果。传入待移除的表单项的
                                    prop 属性或者 prop
                                    组成的数组，如不传则移除整个表单的校验结果
                                </td>
                                <td>Function(props: array | string)</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="form-events">Form Events</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>事件名称</th>
                                <th>说明</th>
                                <th>回调参数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>validate</td>
                                <td>任一表单项被校验后触发</td>
                                <td>
                                    被校验的表单项 prop
                                    值，校验是否通过，错误消息（如果存在）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="form-item-attributes">Form-Item Attributes</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>参数</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>可选值</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>prop</td>
                                <td>
                                    表单域 model 字段，在使用
                                    validate、resetFields
                                    方法的情况下，该属性是必填的
                                </td>
                                <td>string</td>
                                <td>
                                    传入 Form 组件的 <code>model</code> 中的字段
                                </td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td>标签文本</td>
                                <td>string</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>label-width</td>
                                <td>
                                    表单域标签的的宽度，例如 '50px'。支持
                                    <code>auto</code>。
                                </td>
                                <td>string</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>
                                    是否必填，如不设置，则会根据校验规则自动生成
                                </td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>rules</td>
                                <td>表单验证规则</td>
                                <td>object</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>error</td>
                                <td>
                                    表单域验证错误信息,
                                    设置该值会使表单验证状态变为<code>error</code>，并显示该错误信息
                                </td>
                                <td>string</td>
                                <td>—</td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td>show-message</td>
                                <td>是否显示校验错误信息</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>inline-message</td>
                                <td>以行内形式展示校验信息</td>
                                <td>boolean</td>
                                <td>—</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>用于控制该表单域下组件的尺寸</td>
                                <td>string</td>
                                <td>medium / small / mini</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="form-item-slot">Form-Item Slot</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>—</td>
                                <td>Form Item 的内容</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td>标签文本的内容</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="form-item-scoped-slot">Form-Item Scoped Slot</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>error</td>
                                <td>
                                    自定义表单校验信息的显示方式，参数为 { error
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="form-item-methods">Form-Item Methods</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>方法名</th>
                                <th>说明</th>
                                <th>参数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>resetField</td>
                                <td>
                                    对该表单项进行重置，将其值重置为初始值并移除校验结果
                                </td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>clearValidate</td>
                                <td>移除该表单项的校验结果</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            formInline: {
                user: '',
                region: '',
            },
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
            },
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur',
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur',
                    },
                ],
                region: [
                    {
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change',
                    },
                ],
                date1: [
                    {
                        type: 'date',
                        required: true,
                        message: '请选择日期',
                        trigger: 'change',
                    },
                ],
                date2: [
                    {
                        type: 'date',
                        required: true,
                        message: '请选择时间',
                        trigger: 'change',
                    },
                ],
                type: [
                    {
                        type: 'array',
                        required: true,
                        message: '请至少选择一个活动性质',
                        trigger: 'change',
                    },
                ],
                resource: [
                    {
                        required: true,
                        message: '请选择活动资源',
                        trigger: 'change',
                    },
                ],
                desc: [
                    {
                        required: true,
                        message: '请填写活动形式',
                        trigger: 'blur',
                    },
                ],
            },
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
    },
}
</script>
