import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import {
  loginAPI,
  registerAPI,
  getUserInfoAPI,
  updateUserAPI,
  LoginRequest,
  RegisterRequest,
} from '@/api/auth'

// 查询键
export const authKeys = {
  all: ['auth'] as const,
  user: () => [...authKeys.all, 'user'] as const,
  userInfo: (token: string) => [...authKeys.user(), token] as const,
}

// 登录 Hook
export const useLogin = () => {
  const { login, setLoading } = useAuthStore()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (credentials: LoginRequest) => loginAPI(credentials),
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: data => {
      login(data.user, data.token)
      setLoading(false)

      // 缓存用户信息
      queryClient.setQueryData(authKeys.userInfo(data.token), data.user)

      // 延迟重定向，确保状态已经更新
      setTimeout(() => {
        if (data.user.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/')
        }
      }, 100)
    },
    onError: error => {
      setLoading(false)
      console.error('登录失败:', error)
    },
  })
}

// 注册 Hook
export const useRegister = () => {
  const { login, setLoading } = useAuthStore()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (userData: RegisterRequest) => registerAPI(userData),
    onMutate: () => {
      setLoading(true)
    },
    onSuccess: data => {
      login(data.user, data.token)
      setLoading(false)

      // 缓存用户信息
      queryClient.setQueryData(authKeys.userInfo(data.token), data.user)

      // 注册成功后重定向到首页
      router.push('/')
    },
    onError: error => {
      setLoading(false)
      console.error('注册失败:', error)
    },
  })
}

// 登出 Hook
export const useLogout = () => {
  const { logout } = useAuthStore()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      // 这里可以调用服务器端的登出 API
      await new Promise(resolve => setTimeout(resolve, 500))
    },
    onSuccess: () => {
      logout()
      queryClient.clear() // 清除所有缓存
      router.push('/login')
    },
  })
}

// 获取用户信息 Hook
export const useUserInfo = () => {
  const { token, user } = useAuthStore()

  return useQuery({
    queryKey: authKeys.userInfo(token || ''),
    queryFn: () => getUserInfoAPI(token!),
    enabled: !!token,
    initialData: user,
    staleTime: 5 * 60 * 1000, // 5分钟内不重新请求
    gcTime: 10 * 60 * 1000, // 10分钟后清除缓存
  })
}

// 更新用户信息 Hook
export const useUpdateUser = () => {
  const { token, updateUser } = useAuthStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (updates: Parameters<typeof updateUserAPI>[1]) =>
      updateUserAPI(token!, updates),
    onSuccess: updatedUser => {
      updateUser(updatedUser)
      queryClient.setQueryData(authKeys.userInfo(token!), updatedUser)
    },
  })
}

// 检查认证状态 Hook
export const useAuthStatus = () => {
  const { isAuthenticated, user, isLoading, isHydrated } = useAuthStore()

  return {
    isAuthenticated,
    user,
    isLoading,
    isHydrated,
    isAdmin: user?.role === 'admin',
    isUser: user?.role === 'user',
  }
}
