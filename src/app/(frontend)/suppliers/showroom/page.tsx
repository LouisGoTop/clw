import Link from 'next/link'

export default function SupplierShowroomPage() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
                href="/suppliers"
                className="text-gray-500 hover:text-gray-700"
              >
                供方资源
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-900">供方展厅</span>
            </li>
          </ol>
        </nav>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">供方展厅</h1>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">精选供应商展示</h2>
              <p className="text-gray-600">
                此处展示精选供应商的产品和服务，包括图片展示、详细介绍等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">产品目录</h2>
              <p className="text-gray-600">
                此处展示供应商的产品目录，按类别分类展示
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">服务案例</h2>
              <p className="text-gray-600">
                此处展示供应商的成功案例和服务实例
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">在线咨询</h2>
              <p className="text-gray-600">
                此处提供在线咨询功能，方便客户与供应商直接沟通
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
