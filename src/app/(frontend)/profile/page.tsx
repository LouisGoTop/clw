'use client'

import { useState } from 'react'
import { useAuthStatus, useUpdateUser, useLogout } from '@/hooks/useAuth'
import RouteGuard from '@/components/RouteGuard'
import Link from 'next/link'

export default function ProfilePage() {
  const { user } = useAuthStatus()
  const updateUserMutation = useUpdateUser()
  const logoutMutation = useLogout()

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    updateUserMutation.mutate(
      { name, email },
      {
        onSuccess: () => {
          setIsEditing(false)
        },
      }
    )
  }

  const handleCancel = () => {
    setName(user?.name || '')
    setEmail(user?.email || '')
    setIsEditing(false)
  }

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <RouteGuard requireAuth>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white shadow">
            <div className="px-6 py-8">
              <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">个人资料</h1>
                <Link href="/" className="text-blue-600 hover:text-blue-500">
                  ← 返回首页
                </Link>
              </div>

              {user && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={
                          user.avatar ||
                          `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`
                        }
                        alt={user.name}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {user.name}
                      </h2>
                      <p className="text-gray-600">{user.email}</p>
                      <p className="text-sm text-gray-500">
                        {user.role === 'admin' ? '管理员' : '普通用户'}
                      </p>
                    </div>
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleSave} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          姓名
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          邮箱
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          disabled={updateUserMutation.isPending}
                          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
                        >
                          {updateUserMutation.isPending ? '保存中...' : '保存'}
                        </button>
                        <button
                          type="button"
                          onClick={handleCancel}
                          className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
                        >
                          取消
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            姓名
                          </label>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.name}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            邮箱
                          </label>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.email}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            角色
                          </label>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.role === 'admin' ? '管理员' : '普通用户'}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            用户ID
                          </label>
                          <p className="mt-1 text-sm text-gray-900">
                            {user.id}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setIsEditing(true)}
                          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          编辑资料
                        </button>
                        <button
                          onClick={handleLogout}
                          disabled={logoutMutation.isPending}
                          className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:bg-gray-400"
                        >
                          {logoutMutation.isPending ? '登出中...' : '登出'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </RouteGuard>
  )
}
