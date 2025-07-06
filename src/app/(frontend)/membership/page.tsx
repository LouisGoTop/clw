'use client'

import Link from 'next/link'
import { Button } from '@heroui/react'

export default function MembershipPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">VIP会员购买</h1>
          <p className="mt-2 text-gray-600">
            升级VIP会员，享受更多专属服务和特权
          </p>
        </div>

        {/* 会员套餐对比 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 基础版 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">基础版</h3>
              <p className="mt-2 text-sm text-gray-600">适合个人用户</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-gray-900">免费</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">基础搜索功能</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">查看企业信息</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">每日5次联系机会</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-gray-400">✗</span>
                <span className="text-sm text-gray-400">高级筛选功能</span>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="bordered" className="w-full">
                当前套餐
              </Button>
            </div>
          </div>

          {/* 标准版 */}
          <div className="rounded-lg border-2 border-blue-500 bg-white p-6 shadow-md">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">标准版</h3>
              <p className="mt-2 text-sm text-gray-600">适合中小企业</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-blue-600">¥299</span>
                <span className="text-sm text-gray-600">/月</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">所有基础功能</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">高级搜索筛选</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">无限联系机会</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">企业认证标识</span>
              </div>
            </div>

            <div className="mt-6">
              <Button color="primary" className="w-full">
                立即购买
              </Button>
            </div>
          </div>

          {/* 企业版 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">企业版</h3>
              <p className="mt-2 text-sm text-gray-600">适合大型企业</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-gray-900">¥999</span>
                <span className="text-sm text-gray-600">/月</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">所有标准功能</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">专属客服支持</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">优先展示位</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span className="text-sm text-gray-600">数据报告分析</span>
              </div>
            </div>

            <div className="mt-6">
              <Button color="secondary" className="w-full">
                立即购买
              </Button>
            </div>
          </div>
        </div>

        {/* 会员特权说明 */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">VIP会员特权</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">优先展示</h3>
              <p className="text-gray-600">
                您的企业信息将在搜索结果中优先展示，获得更多曝光机会
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">专属客服</h3>
              <p className="text-gray-600">
                专属客服团队为您提供一对一服务，快速解决各种问题
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">数据分析</h3>
              <p className="text-gray-600">
                详细的数据报告，帮助您了解业务表现和市场趋势
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold">行业资讯</h3>
              <p className="text-gray-600">
                第一时间获取行业动态和商机信息，抢占市场先机
              </p>
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="mt-12 rounded-lg bg-blue-50 p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              需要更多信息？
            </h3>
            <p className="mt-2 text-gray-600">
              我们的专业团队将为您提供详细的服务介绍和定制方案
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// 启用 SSG
export const dynamic = 'force-static'
