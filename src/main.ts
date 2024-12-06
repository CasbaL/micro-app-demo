import 'normalize.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'
import { useAppLoading } from './hooks/useAppLoading'

const app = createApp(App)

const { setAppLoading } = useAppLoading()
microApp.start({
  lifeCycles: {
    created(e, appName) {
      console.log(`[aaas]子应用${appName}被创建`)
      setAppLoading(true)
    },
    beforemount(e, appName) {
      console.log(`[aaas]子应用${appName}即将渲染`)
    },
    mounted(e, appName) {
      console.log(`[aaas]子应用${appName}已经渲染完成`)
      setAppLoading(false)
    },
    unmount(e, appName) {
      console.log(`[aaas]子应用${appName}已经卸载`)
    },
    error(e, appName) {
      console.log(`[aaas]子应用${appName}加载出错`, e)
    },
  },
})

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
