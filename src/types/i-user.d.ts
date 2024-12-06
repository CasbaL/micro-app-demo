declare namespace IUser {
  interface LoginForm {
    userName: string
    password: string
  }

  interface LoginState {
    /**
     * 过期时间
     */
    expire: number
    /**
     * 租户列表
     */
    tenantInfoVOList: TenantInfoVOList[]
    /**
     * token
     */
    token: string
    [property: string]: any
  }
  interface TenantInfoVOList {
    /**
     * 租户id
     */
    tenantId: string
    /**
     * 租户名称
     */
    tenantName: string
    [property: string]: any
  }

  interface UserCompleteInfo {
    /**
     * 租户列表
     */
    tenantInfoDTOList: TenantInfoDTOList[]
    /**
     * 用户信息
     */
    user: User
    [property: string]: any
  }
  interface TenantInfoDTOList {
    /**
     * 租户下所有角色名称
     */
    allRoleNames: string
    /**
     * 租户下所有角色类型（多个以逗号分隔），1：超级管理员 2：租户管理员 3：租户内管理员 4：普通角色
     */
    allTenantRoleTypes: string
    roles: Role[]
    /**
     * 创建时间
     */
    tenantCreateTime: string
    /**
     * 租户id
     */
    tenantId: string
    /**
     * 租户名称
     */
    tenantName: string
    /**
     * 租户状态
     */
    tenantStatus: number
    [property: string]: any
  }
  interface Role {
    /**
     * 角色code
     */
    roleCode: string
    /**
     * 角色id
     */
    roleId: number
    /**
     * 角色名称
     */
    roleName: string
    /**
     * 角色类型，1：超级管理员 2：租户管理员 3：租户内管理员 4：普通角色
     */
    roleType: number
    [property: string]: any
  }
  interface User {
    /**
     * 账号类型，1:toC用户（账户只保留1有效登陆） 2：toB用户（账户可同时登陆）
     */
    accountType: number
    /**
     * 头像
     */
    avatar: null
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 邮箱
     */
    email: string
    /**
     * 昵称
     */
    nickName: string
    /**
     * 手机号
     */
    phone: string
    /**
     * 真实名称
     */
    realName: null
    /**
     * 备注
     */
    remark: null
    /**
     * 角色类型（多个以逗号分隔），1：超级管理员 2：租户管理员 3：租户内管理员 4：普通角色
     */
    roleTypes: string
    /**
     * 性别 ，1:男 2:女,3:位置
     */
    sex: null
    /**
     * 状态,，1:启用, 2:停用
     */
    status: number
    /**
     * 用户code
     */
    userCode: string
    /**
     * 用户id
     */
    userId: number
    /**
     * 用户名称
     */
    userName: string
    [property: string]: any
  }
}
