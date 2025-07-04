import Link from 'next/link'

interface RecruitmentDetailPageProps {
  params: { id: string }
}

export default function RecruitmentDetailPage({
  params,
}: RecruitmentDetailPageProps) {
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
                href="/supplier-recruitment"
                className="text-gray-500 hover:text-gray-700"
              >
                供方招募
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900">招募详情</span>
            </li>
          </ol>
        </nav>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            招募详情页面 - ID: {params.id}
          </h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">招募项目信息</h2>
              <p className="text-gray-600">
                此处显示招募项目的基本信息，包括项目名称、需求描述、预算范围等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">申请要求</h2>
              <p className="text-gray-600">
                此处列出供应商申请该项目的具体要求和条件
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">项目时间安排</h2>
              <p className="text-gray-600">
                此处显示项目的时间节点和重要截止日期
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">申请流程</h2>
              <p className="text-gray-600">
                此处说明供应商如何申请参与该招募项目
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                立即申请
              </button>
              <button className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50">
                收藏项目
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
