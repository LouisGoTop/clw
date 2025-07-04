import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  currentPage?: string
}

export default function Layout({ children, currentPage = '' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">创联网</h1>
            </div>
            <nav className="hidden space-x-8 md:flex">
              <Link
                href="/"
                className={`hover:text-blue-600 ${currentPage === 'home' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                首页
              </Link>
              <Link
                href="/suppliers"
                className={`hover:text-blue-600 ${currentPage === 'suppliers' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                供方资源
              </Link>
              <Link
                href="/supplier-recruitment"
                className={`hover:text-blue-600 ${currentPage === 'supplier-recruitment' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                供方招募
              </Link>
              <Link
                href="/business-opportunities"
                className={`hover:text-blue-600 ${currentPage === 'business-opportunities' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                找商机
              </Link>
              <Link
                href="/projects"
                className={`hover:text-blue-600 ${currentPage === 'projects' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                找项目
              </Link>
              <Link
                href="/enterprises"
                className={`hover:text-blue-600 ${currentPage === 'enterprises' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                找企业
              </Link>
              <Link
                href="/membership"
                className={`hover:text-blue-600 ${currentPage === 'membership' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
              >
                VIP会员
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
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
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
