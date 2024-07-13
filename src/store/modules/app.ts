// src/store/modules/app.ts
import { defineStore } from 'pinia';
import defaultSettings from '@/settings';

// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

import { store } from "@/store";

// setup
export const useAppStore = defineStore('app', () => {
    
  const language = useStorage('language', defaultSettings.language);
    
  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value == 'en') {
      return en;
    } else {
      return zhCn;
    }
  });

  /**
   * 切换语言
   */
  function changeLanguage(val: string) {
    language.value = val;
  }

  return {
    language,
    locale,
    changeLanguage
  };
});

/**
 * 用于在组件外部（如在Pinia Store 中）使用 Pinia 提供的 store 实例。
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function useAppStoreHook() {
  return useAppStore(store);
}
