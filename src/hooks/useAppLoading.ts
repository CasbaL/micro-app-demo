import { useToggle } from '@vueuse/core'

const [appLoading, setAppLoading] = useToggle(false)

export const useAppLoading = () => {
  return {
    appLoading,
    setAppLoading,
  }
}
