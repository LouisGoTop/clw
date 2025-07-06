import Link from 'next/link'
import { use } from 'react'

interface EnterpriseDetailPageProps {
  params: Promise<{ id: string }>
}

export default function EnterpriseDetailPage({
  params,
}: EnterpriseDetailPageProps) {
  // 使用 React.use 处理 Promise 类型的 params
  // 优点：
  // 1. 不需要 async 函数
  // 2. 更简洁的语法
  // 3. React 会自动处理 Promise 的解析
  const { id } = use(params)

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
                href="/enterprises"
                className="text-gray-500 hover:text-gray-700"
              >
                找企业
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900">企业详情</span>
            </li>
          </ol>
        </nav>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            企业详情页面 - ID: {id}
          </h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">企业基本信息</h2>
              <p className="text-gray-600">
                此处显示企业的基本信息，包括企业名称、成立时间、注册资本、法人代表等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">业务范围</h2>
              <p className="text-gray-600">
                此处描述企业的主要业务范围和专业领域
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">企业资质</h2>
              <p className="text-gray-600">
                此处展示企业获得的各种认证和资质证书
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">合作案例</h2>
              <p className="text-gray-600">
                此处展示企业的重要合作项目和成功案例
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">联系方式</h2>
              <p className="text-gray-600">此处提供企业的联系信息和地址</p>
            </div>

            <div className="flex space-x-4">
              <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                联系企业
              </button>
              <button className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50">
                收藏企业
              </button>
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
