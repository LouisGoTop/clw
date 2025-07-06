import Link from 'next/link'
import { Button } from '@heroui/react'

export default function EnterprisesPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">找企业</h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-xl font-semibold">企业搜索</h2>
              <div className="mb-4 flex gap-4">
                <input
                  type="text"
                  placeholder="输入企业名称或关键词"
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <Button color="primary">搜索</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map(item => (
                <div
                  key={item}
                  className="rounded-lg border border-gray-200 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    大连XX科技有限公司 {item}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    专业从事智能建筑系统集成，提供一站式解决方案
                  </p>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      成立时间: 2015年
                    </span>
                    <span className="text-sm text-gray-500">
                      员工: 100-500人
                    </span>
                  </div>
                  <Link
                    href={`/enterprises/${item}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    查看详情 →
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">企业分类</h2>
              <p className="text-gray-600">
                此处提供企业分类浏览功能，按行业、规模、地区等维度分类
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">合作机会</h2>
              <p className="text-gray-600">
                此处展示企业间的合作机会和商业对接信息
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// 启用 SSG
export const dynamic = 'force-static'
