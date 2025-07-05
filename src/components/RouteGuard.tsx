'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStatus } from '@/hooks/useAuth'

interface RouteGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  requireAdmin?: boolean
  redirectTo?: string
  fallback?: React.ReactNode
}

export default function RouteGuard({
  children,
  requireAuth = false,
  requireAdmin = false,
  redirectTo = '/login',
  fallback = (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-lg">加载中...</div>
    </div>
  ),
}: RouteGuardProps) {
  const { isAuthenticated, isAdmin, isLoading, isHydrated } = useAuthStatus()
  const router = useRouter()

  useEffect(() => {
    // 等待状态完全恢复后再进行权限检查
    if (isLoading || !isHydrated) return

    if (requireAuth && !isAuthenticated) {
      router.push(redirectTo)
      return
    }

    if (requireAdmin && !isAdmin) {
      router.push(redirectTo)
      return
    }
  }, [
    isAuthenticated,
    isAdmin,
    isLoading,
    isHydrated,
    requireAuth,
    requireAdmin,
    redirectTo,
    router,
  ])

  // 如果正在加载或状态未完全恢复，显示加载状态
  if (isLoading || !isHydrated) {
    return fallback as React.ReactElement
  }

  // 如果需要认证但未认证，显示加载状态（重定向过程中）
  if (requireAuth && !isAuthenticated) {
    return fallback as React.ReactElement
  }

  // 如果需要管理员权限但不是管理员，显示加载状态（重定向过程中）
  if (requireAdmin && !isAdmin) {
    return fallback as React.ReactElement
  }

  return <>{children}</>
}
