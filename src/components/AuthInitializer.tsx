'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth'

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode
}) {
  const { isHydrated, setHydrated } = useAuthStore()

  useEffect(() => {
    // 确保即使没有存储的状态，也会设置hydrated为true
    if (!isHydrated) {
      const timer = setTimeout(() => {
        setHydrated(true)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [isHydrated, setHydrated])

  return <>{children}</>
}
