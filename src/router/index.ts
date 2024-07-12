import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
]

/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes as RouteRecordRaw[],
})

export default router
