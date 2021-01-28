<template>
  <div class="main">
    <h1 class="title">
      {{ t("page.user.login.form.title") }}
    </h1>
    
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


      return {
          l,
      }
  },
});
</script>
