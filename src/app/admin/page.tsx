import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">管理仪表板</h1>
        <p className="mt-2 text-gray-600">欢迎使用创联网后台管理系统</p>
      </div>

      {/* 统计卡片 */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">供应商总数</h3>
          <p className="mt-2 text-2xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">招募项目</h3>
          <p className="mt-2 text-2xl font-bold text-green-600">56</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">认证企业</h3>
          <p className="mt-2 text-2xl font-bold text-orange-600">789</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">活跃用户</h3>
          <p className="mt-2 text-2xl font-bold text-purple-600">2,345</p>
        </div>
      </div>

      {/* 快速操作 */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">快速操作</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link
            href="/admin/procurement/supplier-database"
            className="block rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <h3 className="font-medium text-gray-900">管理供应商</h3>
            <p className="mt-1 text-sm text-gray-600">查看和管理供应商信息</p>
          </Link>
          <Link
            href="/admin/marketing/supplier-service/recruitment"
            className="block rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <h3 className="font-medium text-gray-900">招募管理</h3>
            <p className="mt-1 text-sm text-gray-600">处理供应商招募申请</p>
          </Link>
          <Link
            href="/admin/enterprise/certification"
            className="block rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50"
          >
            <h3 className="font-medium text-gray-900">企业认证</h3>
            <p className="mt-1 text-sm text-gray-600">审核企业认证申请</p>
          </Link>
        </div>
      </div>
    </>
  )
}
