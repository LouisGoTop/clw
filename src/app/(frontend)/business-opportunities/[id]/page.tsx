import Link from 'next/link'
import { Button } from '@heroui/react'

interface BusinessOpportunityDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BusinessOpportunityDetailPage({
  params,
}: BusinessOpportunityDetailPageProps) {
  const { id } = await params
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 主要内容区域 */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                首页
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <Link
                href="/business-opportunities"
                className="text-gray-500 hover:text-gray-700"
              >
                找商机
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900">商机详情</span>
            </li>
          </ol>
        </nav>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            商机详情页面 - ID: {id}
          </h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">商机基本信息</h2>
              <p className="text-gray-600">
                此处显示商机的基本信息，包括项目名称、合作类型、投资规模等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">合作需求</h2>
              <p className="text-gray-600">
                此处描述合作方的具体需求和期望合作模式
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">市场分析</h2>
              <p className="text-gray-600">此处提供相关行业和市场的分析数据</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">联系方式</h2>
              <p className="text-gray-600">
                此处显示发布方的联系信息和沟通方式
              </p>
            </div>

            <div className="flex space-x-4">
              <Button color="primary">表达合作意向</Button>
              <Button variant="bordered">收藏商机</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// 生成静态路径
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

// 启用 SSG
export const dynamic = 'force-static'
