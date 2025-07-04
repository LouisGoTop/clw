import Link from 'next/link'

export default function BusinessOpportunitiesPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">找商机</h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-xl font-semibold">商机信息</h2>
              <div className="space-y-4">
                {[1, 2, 3].map(item => (
                  <div
                    key={item}
                    className="rounded-lg border border-gray-100 p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      绿色建筑技术合作项目 {item}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      技术合作 · 投资规模: 2000-8000万 · 合作期限: 3-5年
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex items-center rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600">
                        寻求合作
                      </span>
                      <Link
                        href={`/business-opportunities/${item}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        查看详情 →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">行业分析</h2>
              <p className="text-gray-600">
                此处提供行业趋势分析和市场机会洞察
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">商机匹配</h2>
              <p className="text-gray-600">
                此处提供智能商机匹配功能，为用户推荐合适的商业机会
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
