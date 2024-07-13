import type { App } from "vue";
import { createI18n } from "vue-i18n";
// 本地语言包
import enLocale from "./package/en";
import zhCnLocale from "./package/zh-cn";
import { LanguageEnum } from "@/enums/LanguageEnum";


const messages = {
  "zh-cn": {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
};
const i18n = createI18n({
  legacy: false,
  locale: LanguageEnum.EN,
  messages: messages,
  globalInjection: true,
});

// // 全局注册 i18n
// export function setupI18n(app: App<Element>) {
//   app.use(i18n);
// }

export default i18n;
