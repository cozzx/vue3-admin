<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

import variables from "@/styles/variables.module.scss";
console.log(variables.bgColor);

import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();

/** 登录表单提交 */
import { useUserStore } from "@/store";
import { LoginData } from "@/api/auth";
const userStore = useUserStore();
const loginData = ref<LoginData>({
  username: "admin",
  password: "123456",
} as LoginData);
const handleLoginSubmit = () => {
  userStore
    .login(loginData.value)
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <!-- src/components/HelloWorld.vue -->
  <div>
    <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
    <el-button type="info"><i-ep-InfoFilled />Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
    <el-button type="info"
      ><svg-icon icon-class="system" />SVG 本地图标</el-button
    >
    <el-button type="info" @click.prevent="handleLoginSubmit">{{
      $t("login.login")
    }}</el-button>
    <router-link to="/login">
      <el-button type="info">登陆页面</el-button>
    </router-link>
  </div>
  <!-- scss 中使用变量，在 variables.scss 中定义-->
  <div class="box" />
  <!-- TypeScript 使用 SCSS 全局变量，在 variables.module.scss 中定义-->
  <div
    style="width: 100px; height: 100px"
    :style="{ 'background-color': variables.bgColor }"
  />

  <p class="text-red">red</p>

  <el-card
    class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]"
  >
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>
