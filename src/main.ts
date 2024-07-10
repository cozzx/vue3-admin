import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 本地SVG图标
import 'virtual:svg-icons-register';

import 'uno.css'

import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount('#app')
