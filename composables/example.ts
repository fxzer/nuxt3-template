export function useMyComposable() {
  // 可以获取运行时配置 useRuntimeConfig
  const config = useRuntimeConfig()
  return config
}
