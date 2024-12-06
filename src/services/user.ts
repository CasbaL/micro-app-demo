import type { MaybeRef } from 'vue'
import { ensureResponse, request } from './request'
// import { useUserStore } from '@/stores/useUserStore'

/** 登录 /user/login */
export const loginApi = async (data: IUser.LoginForm) => {
  const res = await request.post('/login', data)
  return ensureResponse<IUser.LoginState>(res)
}

/** 退出登录 /user/user/logout */
export const logoutApi = async () => {
  const res = await request.post('/user/logout')
  return ensureResponse(res)
}

/** 获取用户信息 /user/user/getUserInfoByToken */
export const getUserInfoByTokenApi = async () => {
  const res = await request.post('/user/getUserInfoByToken')
  return ensureResponse<{ userCompleteInfo?: IUser.UserCompleteInfo }>(res)
}

/** 获取权限菜单 /user/user/getRoleMenuByToken */
// export const getRoleMenuByTokenApi = async () => {
//   const req: IMenu.MenuRequest = {
//     tenantId: useUserStore().getTenantId()!,
//     appIdList: __LINKER_FRONTEND__.other?.__APP_ID__,
//   }
//   const res = await request.post('/user/getRoleMenuByToken', req)
//   return ensureResponse<IMenu.MenuRespData>(res)
// }
