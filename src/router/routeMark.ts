import type { RouteRecordRaw } from 'vue-router'

export const routesMock: RouteRecordRaw[] = [
  {
    path: '/knowledge-center',
    name: 'knowledgeCenter',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '知识中心',
      url: 'http://localhost:5174/#/',
    },
  },
  {
    path: '/home-index',
    name: 'homeIndex',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首页',
      url: 'https://baidu.com',
    },
  },
  {
    path: '/micro-doc',
    name: 'microDoc',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '文档',
      url: 'http://localhost:3003',
    },
  },
]
