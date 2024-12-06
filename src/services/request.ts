import { Message } from '@arco-design/web-vue'
import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: __LINKER_FRONTEND__.services.__API__USER__,
  timeout: 5000,
})

const defaultRequestInterceptorConfig = (config: InternalAxiosRequestConfig) => {
  // config.headers.token = userStore.getToken()
  // config.headers['tenant-id'] = userStore.getTenantId()

  return config
}

request.interceptors.request.use(defaultRequestInterceptorConfig)

export { request }

const WHITE_LIST_CODE = ['0']
const defaultResponseInterceptorConfig = <T>(
  res: AxiosResponse<ICommon.Response<T>>,
): ICommon.Response<T> => {
  const { code, message } = res.data

  // 401 token过期
  if (code === '401') {
    // 清除token，否则路由守卫会无限循环执行
    // logout()
    // @ts-ignore
    return
  }

  if (WHITE_LIST_CODE.includes(code)) {
    return res.data
  } else {
    Message.error({ id: 'transport-error-message', content: message! })
    throw new Error(message)
  }
}
export const ensureResponse = <T>(
  resp: AxiosResponse<ICommon.Response<T>>,
): ICommon.Response<T> => {
  return defaultResponseInterceptorConfig(resp)
}
