<template>
  <div class="main">
    <h1 class="title">{{t('user.login.form.title')}}</h1>
    <el-form :model="modelRef" :rules="rulesRef" ref="formRef">
      <el-form-item label="" prop="username">
        <el-input
          v-model="modelRef.username"
          :placeholder="t('user.login.form-item-username')"
          @keydown.enter="handleSubmit"
        >
          <template #prefix
            ><i class="el-icon-user el-input__icon"></i
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          v-model="modelRef.password"
          type="password"
          :placeholder="t('user.login.form-item-password')"
          @keydown.enter="handleSubmit"
        >
          <template #prefix
            ><i class="el-icon-unlock el-input__icon"></i
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="submit"
          @click="handleSubmit"
          :loading="submitLoading"
        >
          {{ t("user.login.form.btn-submit") }}
        </el-button>
        <div class="text-align-right">
          <router-link to="/user/register">
            {{ t("user.login.form.btn-jump") }}
          </router-link>
        </div>
      </el-form-item>
      <el-alert
        v-if="loginStatus === 'error' && !submitLoading"
        :title="t('page.user.login.form.login-error')"
        type="error"
        show-icon
        :closable="false"
      />
    </el-form>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, Ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
import { ElForm, ElMessage } from "element-plus";
import { LoginParamsType } from "@/type/user.d";
//import { StateType as UserLoginStateType } from '@/store';

interface UserLoginSetup {
  t: Function;
  modelRef: LoginParamsType;
  rulesRef: any;
  formRef: typeof ElForm;
  submitLoading: boolean;
  handleSubmit: () => Promise<void>;
  //loginStatus?: "ok" | "error" ;
}

export default defineComponent({
  name: "UserLogin",
  components: {},
  setup(): UserLoginSetup {
    const router = useRouter();
    const { currentRoute } = router;
    //const store = useStore<{userlogin: UserLoginStateType}>();
    const { t } = useI18n();

    // 表单值
    const modelRef = reactive<LoginParamsType>({
      username: "",
      password: "",
    });
    // 表单验证
    const rulesRef = reactive({
      username: [
        {
          required: true,
          message: t("user.login.form-item-username.required"),
        },
      ],
      password: [
        {
          required: true,
          message: t("user.login.form-item-password.required"),
        },
      ],
    });
    // form
    const formRef = ref<typeof ElForm>();
    // 登录loading
    const submitLoading = ref<boolean>(false);
    

    return {
      t,
      modelRef,
      rulesRef,
      formRef: formRef as unknown as typeof ElForm,
      submitLoading: submitLoading as unknown as boolean,
      handleSubmit,
      //loginStatus: loginStatus as unknown as "ok" | "error" | undefined
    };
  },
});
</script>
<style lang="scss" scoped>
.main {
  flex: none;
  width: 248px;
  padding: 36px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  .title {
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 30px;
    text-align: center;
    color: #ffffff;
    /* background-image:-webkit-linear-gradient(right,#FFFFFF,#009688, #FFFFFF); 
        -webkit-background-clip: text; 
        -webkit-text-fill-color:transparent; */
  }
  .submit {
    width: 100%;
  }
}
</style>
