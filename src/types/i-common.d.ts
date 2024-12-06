declare namespace ICommon {
  interface Response<T = unknown> {
    code: string
    data?: T
    message?: string
    success?: boolean
    total?: number
  }
}
