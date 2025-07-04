'use client'

import Link from 'next/link'

export default function SupplierDatabasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                创联网 - 后台管理
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-gray-700 hover:text-blue-600">
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 侧边栏 */}
        <nav className="min-h-screen w-64 bg-white shadow-sm">
          <div className="p-4">
            <div className="space-y-2">
              <div>
                <div className="mb-2 font-semibold text-gray-900">采购服务</div>
                <div className="ml-4 space-y-1">
                  <Link
                    href="/admin/procurement/supplier-database"
                    className="block text-sm font-medium text-blue-600"
                  >
                    供应商库
                  </Link>
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/admin/procurement/supplier-database/import-records"
                      className="block text-xs text-gray-500 hover:text-blue-600"
                    >
                      导入记录
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* 主要内容区域 */}
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">供应商库管理</h1>
              <p className="mt-2 text-gray-600">管理和维护供应商信息数据库</p>
            </div>

            {/* 操作按钮 */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex space-x-4">
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  添加供应商
                </button>
                <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                  批量导入
                </button>
                <button className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
                  导出数据
                </button>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="搜索供应商..."
                  className="rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  搜索
                </button>
              </div>
            </div>

            {/* 数据表格 */}
            <div className="rounded-lg bg-white shadow-md">
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          供应商名称
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          行业类别
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          地区
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          认证状态
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          添加时间
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {[1, 2, 3, 4, 5].map(item => (
                        <tr key={item} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              示例供应商 {item}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              机电设备
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">大连</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                              已认证
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                            2024-01-15
                          </td>
                          <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                编辑
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                删除
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 分页 */}
            <div className="mt-6 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  上一页
                </button>
                <button className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white">
                  1
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  2
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  3
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  下一页
                </button>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
