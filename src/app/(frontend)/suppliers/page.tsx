'use client'
import Link from 'next/link'
import { Button } from '@heroui/react'

export default function SuppliersPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">供方资源</h1>
          <p className="mt-2 text-gray-600">
            发现优质供应商，找到最适合的合作伙伴
          </p>
          <div className="mt-4">
            <Link
              href="/suppliers/showroom"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              进入供方展厅
            </Link>
          </div>
        </div>

        {/* 筛选区域 */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label
                htmlFor="industry"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                行业类别
              </label>
              <select
                id="industry"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>全部行业</option>
                <option>机电设备</option>
                <option>电梯</option>
                <option>电线电缆</option>
                <option>消防</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="region"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                地区
              </label>
              <select
                id="region"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>全国</option>
                <option>大连</option>
                <option>北京</option>
                <option>上海</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="size"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                企业规模
              </label>
              <select
                id="size"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>全部规模</option>
                <option>大型企业</option>
                <option>中型企业</option>
                <option>小型企业</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button color="primary" className="w-full">
                筛选
              </Button>
            </div>
          </div>
        </div>

        {/* 供应商列表 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 供应商卡片 */}
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div
              key={item}
              className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">企</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    大连XX建筑设备有限公司
                  </h3>
                  <p className="text-sm text-gray-600">机电设备 · 大连</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="line-clamp-2 text-sm text-gray-600">
                  专业提供各类机电设备、电梯安装维护、电线电缆等服务，拥有丰富的行业经验和专业团队...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="inline-flex items-center rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                    认证企业
                  </span>
                  <span className="inline-flex items-center rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                    VIP会员
                  </span>
                </div>
                <Link
                  href={`/suppliers/${item}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  查看详情 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 分页 */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Button variant="light" size="sm">
              上一页
            </Button>
            <Button color="primary" size="sm">
              1
            </Button>
            <Button variant="light" size="sm">
              2
            </Button>
            <Button variant="light" size="sm">
              3
            </Button>
            <Button variant="light" size="sm">
              下一页
            </Button>
          </nav>
        </div>
      </div>
    </>
  )
}

// 启用 SSG
export const dynamic = 'force-static'
