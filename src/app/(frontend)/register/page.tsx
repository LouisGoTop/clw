'use client'

import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">用户注册</h2>
          <p className="mt-2 text-gray-600">创建您的创联网账户</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-gray-700"
              >
                用户类型
              </label>
              <select
                id="userType"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              >
                <option>供应商</option>
                <option>采购商</option>
                <option>个人用户</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                企业名称
              </label>
              <input
                id="companyName"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="请输入企业名称"
              />
            </div>

            <div>
              <label
                htmlFor="contactName"
                className="block text-sm font-medium text-gray-700"
              >
                联系人姓名
              </label>
              <input
                id="contactName"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="请输入联系人姓名"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                手机号码
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="请输入手机号码"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                邮箱地址
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="请输入邮箱地址"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                密码
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="请输入密码"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                确认密码
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                placeholder="请再次输入密码"
              />
            </div>

            <div className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="agree"
                className="ml-2 block text-sm text-gray-900"
              >
                我已阅读并同意{' '}
                <Link href="#" className="text-blue-600 hover:text-blue-500">
                  用户协议
                </Link>{' '}
                和{' '}
                <Link href="#" className="text-blue-600 hover:text-blue-500">
                  隐私政策
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                注册
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">或者</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                已有账户？{' '}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  立即登录
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-500">
          ← 返回首页
        </Link>
      </div>
    </div>
  )
}

// 启用 SSG
export const dynamic = 'force-static'
