import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
const pathSrc = resolve(__dirname, "src");

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    },
  },
  plugins: [
    vue(),
    // 自动导入参考： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      eslintrc: {
        // 是否自动生成 eslint 规则，建议生成之后设置 false
        enabled: true,
        // 指定自动导入函数 eslint 规则的文件
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      // 是否在 vue 模板中自动导入
      vueTemplate: true,
      // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
      dts: false,
      // dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],
      // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
      dts: false,
      // dts: "src/types/components.d.ts",
    }),
  ],
})
