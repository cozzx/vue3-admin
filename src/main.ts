import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 本地SVG图标
import "virtual:svg-icons-register";

import "uno.css";

import { createPinia } from "pinia";

import router from "@/router";

import i18n from "@/lang/index";

createApp(App).use(createPinia()).use(router).use(i18n).mount("#app");
