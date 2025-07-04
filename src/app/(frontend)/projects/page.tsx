import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">找项目</h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-xl font-semibold">项目筛选</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <select
                  aria-label="项目类型"
                  className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>项目类型</option>
                  <option>建筑工程</option>
                  <option>基础设施</option>
                  <option>技术研发</option>
                </select>
                <select
                  aria-label="投资规模"
                  className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>投资规模</option>
                  <option>100万以下</option>
                  <option>100-1000万</option>
                  <option>1000万以上</option>
                </select>
                <select
                  aria-label="项目地区"
                  className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>项目地区</option>
                  <option>大连</option>
                  <option>北京</option>
                  <option>上海</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map(item => (
                <div
                  key={item}
                  className="rounded-lg border border-gray-200 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    智慧城市基础设施建设项目 {item}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    投资规模: 5000万 · 建设周期: 24个月 · 地点: 大连金州新区
                  </p>
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                      招标中
                    </span>
                  </div>
                  <Link
                    href={`/projects/${item}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    查看详情 →
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">项目动态</h2>
              <p className="text-gray-600">此处展示最新的项目动态和招标信息</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">投标指南</h2>
              <p className="text-gray-600">
                此处提供投标流程指导和相关政策信息
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
