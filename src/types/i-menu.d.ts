declare namespace IMenu {
  interface MenuRequest {
    /**
     * 应用id
     */
    appIdList: string[]
    /**
     * 角色code，过滤出需要的角色
     */
    roleCode?: string
    /**
     * 企业id，过滤出需要的企业
     */
    tenantId: string
    [property: string]: any
  }

  interface MenuRespData {
    /**
     * 应用下最终菜单权限
     */
    menuNameMap: MenuNameMap
    /**
     * 应用下所有角色对应的菜单
     */
    roleMenuPointInfoMap: RoleMenuPointInfoMap
    /**
     * 用户id
     */
    userId: null
    /**
     * 用户名称
     */
    userName: string
    [property: string]: any
  }

  /**
   * 应用下最终菜单权限
   */
  interface MenuNameMap {
    /**
     * 应用id
     */
    'linker-user': string[]
    [property: string]: any
  }

  /**
   * 应用下所有角色对应的菜单
   */
  interface RoleMenuPointInfoMap {
    /**
     * 应用id
     */
    'linker-user': LinkerUser应用id[]
    [property: string]: any
  }

  interface LinkerUser应用id {
    /**
     * 应用id
     */
    appId?: string
    /**
     * 权限菜单name
     */
    menuNameSet?: string[]
    /**
     * 菜单
     */
    menuPointInfoList?: MenuPointInfoList[]
    /**
     * 备注
     */
    remark?: string
    /**
     * 角色code
     */
    roleCode?: string
    /**
     * 角色id
     */
    roleId?: number
    /**
     * 角色名称
     */
    roleName?: string
    [property: string]: any
  }

  interface MenuPointInfoList {
    /**
     * 菜单别名
     */
    alias: string
    /**
     * 子集菜单
     */
    childMenuPointInfoList: ChildMenuPointInfoList[]
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 功能点
     */
    functionPoint: null
    /**
     * 组id
     */
    groupId: null
    /**
     * 图标
     */
    icon: string
    /**
     * 菜单id
     */
    menuId: number
    /**
     * 权限名称
     */
    menuName: string
    /**
     * 菜单排序
     */
    menuOrder: number
    /**
     * 菜单权限，1：有权限，2：无权限
     */
    menuPermission: number
    /**
     * 菜单类型，1：菜单节点，0：非菜单节点（普通api接口）
     */
    menuType: number
    /**
     * 权限url
     */
    menuUrl: string
    /**
     * 父级菜单，-1标识无父级菜单
     */
    parentId: number
    /**
     * 备注
     */
    remark: null
    /**
     * 显示状态
     */
    showStatus: null
    /**
     * 状态，1：启用，2：停用
     */
    status: null
    [property: string]: any
  }

  interface ChildMenuPointInfoList {
    alias: string
    childMenuPointInfoList: null
    createTime: string
    functionPoint: null
    groupId: null
    icon: string
    menuId: number
    menuName: string
    menuOrder: number
    menuPermission: number
    menuType: number
    menuUrl: string
    parentId: number
    remark: null
    showStatus: null
    status: null
    [property: string]: any
  }
}
