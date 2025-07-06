'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthStatus, useLogout } from '@/hooks/useAuth'
import { Button } from '@heroui/react'

export default function FrontendHeader() {
  const pathname = usePathname()
  const { isAuthenticated, user } = useAuthStatus()
  const logoutMutation = useLogout()

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const getLinkClass = (href: string) => {
    if (isActiveLink(href)) {
      return 'font-medium text-blue-600'
    }
    return 'text-gray-700 hover:text-blue-600'
  }

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/suppliers', label: '供方资源' },
    { href: '/supplier-recruitment', label: '供方招募' },
    { href: '/business-opportunities', label: '找商机' },
    { href: '/projects', label: '找项目' },
    { href: '/enterprises', label: '找企业' },
    { href: '/membership', label: 'VIP会员' },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              创联网
            </Link>
          </div>
          <nav className="hidden space-x-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={getLinkClass(href)}
                aria-current={isActiveLink(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                <span className="text-gray-700">欢迎, {user.name}</span>
                <Link
                  href="/profile"
                  className="text-gray-700 hover:text-blue-600"
                >
                  个人资料
                </Link>
                <Button
                  variant="light"
                  isLoading={logoutMutation.isPending}
                  onClick={() => logoutMutation.mutate()}
                >
                  {logoutMutation.isPending ? '登出中...' : '登出'}
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  登录
                </Link>
                <Link
                  href="/register"
                  className="text-gray-700 hover:text-blue-600"
                >
                  注册
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
