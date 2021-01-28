<template>
  <div class="main">
    <h1 class="title">
      登陆{{$t('message.title')}}
    </h1>
    <el-form :model="modelRef" :rules="rulesRef" ref="formRef">
        <el-form-item  label="" prop="username">
            <el-input v-model="modelRef.username" :placeholder="t('page.user.login.form-item-username')" @keydown.enter="handleSubmit">
                <template #prefix><i class="el-icon-user el-input__icon"></i></template>
            </el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

interface UserLoginSetup {
    t: Function;
}

export default defineComponent({
  name: "UserLogin",
  components: {},
  setup(): UserLoginSetup {
      const router = useRouter();
      const { t } = useI18n();


      return {
          t,
      }
  },
});
</script>
