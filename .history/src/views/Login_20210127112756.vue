<template>
  <div class="main">
    <h1 class="title">
      {{ t("page.user.login.form.title") }}
    </h1>
    <el-form :model="modelRef" :rules="rulesRef" ref="formRef">
      <el-form-item label="" prop="username">
        <el-input
          v-model="modelRef.username"
          :placeholder="t('page.user.login.form-item-username')"
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
          :placeholder="t('page.user.login.form-item-password')"
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
          {{ t("page.user.login.form.btn-submit") }}
        </el-button>
        <div class="text-align-right">
          <router-link to="/user/register">
            {{ t("page.user.login.form.btn-jump") }}
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
import Vue, { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

interface UserLoginSetup {
    l: Function;
}

export default defineComponent({
  name: "UserLogin",
  components: {},
  setup(): UserLoginSetup {
      const router = useRouter();
      const { l } = useI18n();
      return
  },
});
</script>
