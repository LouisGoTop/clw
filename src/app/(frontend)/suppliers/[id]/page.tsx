import Link from 'next/link'

interface SupplierDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function SupplierDetailPage({
  params,
}: SupplierDetailPageProps) {
  const { id } = await params
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
              <span className="text-gray-900">供应商详情</span>
            </li>
          </ol>
        </nav>

        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            供应商详情页面 - ID: {id}
          </h1>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">公司基本信息</h2>
              <p className="text-gray-600">
                此处显示供应商的基本信息，如公司名称、联系方式、资质认证等
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">主营产品与服务</h2>
              <p className="text-gray-600">
                此处显示供应商的主要产品和服务内容
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">成功案例</h2>
              <p className="text-gray-600">此处展示供应商的成功项目案例</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// 生成静态路径
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

// 启用 SSG
export const dynamic = 'force-static'
