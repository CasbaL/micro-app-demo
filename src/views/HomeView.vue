<script setup lang="ts">
import { useAppLoading } from '@/hooks/useAppLoading'
import { routesMock } from '@/router/routeMark'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const subApps = routesMock.filter((item) => item.meta?.url)
console.log('subapp', subApps)
const { appLoading } = useAppLoading()
const logout = () => {
  router.replace('/login')
}
</script>

<template>
  <a-layout class="root-layout">
    <a-layout-sider class="root-layout-sider">
      <div>root-layout-sider</div>
      <div v-for="(item, index) in routesMock">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="root-layout-header">
        {{ route.meta.title }}
        <a-button @click="logout">退出登录</a-button>
      </a-layout-header>
      <a-layout-content class="root-layout-content">
        <a-spin :loading="appLoading" style="width: 100%; height: 100%">
          <template v-for="app in subApps">
            <micro-app
              v-if="app.name === route.name"
              :key="app.name"
              :name="app.name"
              :url="app.meta!.url"
              iframe
            ></micro-app>
          </template>
        </a-spin>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.root-layout {
  width: 100vw;
  height: 100vh;
  .root-layout-sider {
    line-break: anywhere;
  }

  .root-layout-header {
    height: 56px;
    position: sticky;
    top: 0;
    padding: 20px;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    z-index: 10;
    background: rgba(100, 100, 0, 0.1);
  }
}
</style>
