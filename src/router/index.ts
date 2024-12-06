import { createRouter, createWebHashHistory } from 'vue-router'
import { routesMock } from './routeMark'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
    },

    // TODO: 动态配置子路由

    // {
    //   path: '/',
    //   name: 'home',
    //   // TODO: 默认重定向到某个子应用
    //   // redirect: '/login',
    //   component: HomeView,
    // },
  ],
})

export default router
routesMock.forEach((item) => {
  router.addRoute({ ...item })

  router.addRoute({
    path: '/',
    redirect: item.path,
  })
})
