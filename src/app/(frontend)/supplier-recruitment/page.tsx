import Link from 'next/link'

export default function SupplierRecruitmentPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">供方招募</h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-xl font-semibold">招募信息</h2>
              <div className="space-y-4">
                {[1, 2, 3].map(item => (
                  <div
                    key={item}
                    className="rounded-lg border border-gray-100 p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      绿色建筑材料供应商招募 {item}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      建筑材料 · 资质要求: 二级以上 · 招募截止: 2024-03-31
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex items-center rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                        正在招募
                      </span>
                      <Link
                        href={`/supplier-recruitment/${item}`}
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
              <h2 className="mb-2 text-xl font-semibold">招募流程</h2>
              <p className="text-gray-600">此处介绍供方招募的具体流程和要求</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">申请条件</h2>
              <p className="text-gray-600">
                此处说明申请成为供应商需要满足的条件和资质要求
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
