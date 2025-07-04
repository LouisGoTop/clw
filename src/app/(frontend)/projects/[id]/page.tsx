import Link from 'next/link'

interface ProjectDetailPageProps {
  params: { id: string }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
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
                href="/projects"
                className="text-gray-500 hover:text-gray-700"
              >
                找项目
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900">项目详情</span>
            </li>
          </ol>
        </nav>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            项目详情页面 - ID: {params.id}
          </h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">项目基本信息</h2>
              <p className="text-gray-600">
                此处显示项目的基本信息，包括项目名称、类型、地点、预算等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">项目需求</h2>
              <p className="text-gray-600">
                此处详细描述项目的具体需求和技术要求
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">招标信息</h2>
              <p className="text-gray-600">
                此处展示招标相关信息，包括招标流程、截止时间等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">项目时间安排</h2>
              <p className="text-gray-600">此处显示项目的时间规划和重要节点</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">联系方式</h2>
              <p className="text-gray-600">此处提供项目负责人的联系信息</p>
            </div>

            <div className="flex space-x-4">
              <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                参与投标
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
