'use client'

import { HeroUIProvider } from '@heroui/react'
import QueryProvider from './QueryProvider'
import AuthInitializer from '@/components/AuthInitializer'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryProvider>
      <HeroUIProvider>
        <AuthInitializer>{children}</AuthInitializer>
      </HeroUIProvider>
    </QueryProvider>
  )
}
